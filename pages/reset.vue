<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5" @keyup.enter="changePass">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>ตั้งรหัสผ่านใหม่</h3>
        <div class="line"></div>
      </div>
      <div class="mt-3 mb-3">
        <label for="password" class="form-label">รหัสผ่าน<span>*</span></label>
        <input
          type="password"
          class="form-control"
          :class="{ 'border-danger': v$.form.password.$errors.length }"
          id="password"
          placeholder="รหัสผ่าน"
          v-model="form.password"
        />
        <div
          class="mt-1 input-errors text-danger"
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
        <div class="mt-1 input-errors text-danger" v-if="flag">
          <div class="error-msg">
            รหัสผ่านต้องประกอบด้วยตัวอักษร a-z และ 1-9
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="confirmPass" class="form-label"
          >ยืนยันรหัสผ่าน<span>*</span></label
        >
        <input
          type="password"
          class="form-control"
          :class="{ 'border-danger': v$.form.confirmPassword.$errors.length }"
          id="confirmPass"
          placeholder="ยืนยันรหัสผ่าน"
          v-model="form.confirmPassword"
        />
        <div
          class="mt-1 input-errors text-danger"
          v-for="(error, index) of v$.form.confirmPassword.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <a
        href="#"
        class="btn d-block w-100 fs-6 text-white"
        @click="changePass()"
        >รีเซ็ท</a
      >
    </form>
  </div>
  <alert ref="alert" />
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {
      password: "",
      confirmPassword: "",
    },
    formUser: {},
    flag: false,
  }),
  watch: {
    "form.password": async function (e) {
      if (!this.$store.checkPass(e)) this.flag = true;
      else this.flag = false;
    },
  },
  validations() {
    return {
      form: {
        password: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          min: helpers.withMessage(
            "รหัสผ่านต้องมากกว่า 6 ตัวอักษร !",
            minLength(6)
          ),
        },
        confirmPassword: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          min: helpers.withMessage(
            "รหัสผ่านต้องมากกว่า 6 ตัวอักษร !",
            minLength(6)
          ),
          sameAs: helpers.withMessage(
            "กรุณากรอกรหัสผ่านให้เหมือนกัน !",
            sameAs(this.form.password)
          ),
        },
      },
    };
  },
  methods: {
    async changePass() {
      this.v$.form.$touch();
      if (this.v$.form.$error) return;

      this.formUser = this.$store.getUser();
      this.formUser.password = this.form.password;
      this.$store.editUser(this.formUser);

      const element = this.$refs.alert;
      element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
      setTimeout(() => element.$el.classList.add("active"), 100);
      setTimeout(() => {
        element.$el.classList.remove("active");
        this.$router.push({ path: "/" });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 5rem 10rem;
}

.container .header .line {
  width: 55%;
}

@media (max-width: 1200px) {
  .container {
    padding: 10rem 5rem;
  }
}

@media (max-width: 991px) {
  .container {
    padding: 10rem 3rem;
  }

  .container .header .line {
    width: 55%;
  }
}

@media (max-width: 560px) {
  .container {
    padding: 1rem;
  }
}

@media (max-width: 414px) {
  .container .header .line {
    width: 40%;
  }
}
</style>
