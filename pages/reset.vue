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
      </div>
      <div class="mb-3">
        <label for="newPass" class="form-label"
          >รหัสผ่านใหม่<span>*</span></label
        >
        <input
          type="password"
          class="form-control"
          :class="{ 'border-danger': v$.form.newPassword.$errors.length }"
          id="newPass"
          placeholder="รหัสผ่านใหม่"
          v-model="form.newPassword"
        />
        <div
          class="mt-1 input-errors text-danger"
          v-for="(error, index) of v$.form.newPassword.$errors"
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
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {
      password: "",
      newPassword: "",
    },
    formUser: {},
  }),
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
        newPassword: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          min: helpers.withMessage(
            "รหัสผ่านต้องมากกว่า 6 ตัวอักษร !",
            minLength(6)
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
      if (this.formUser.password === this.form.password) {
        this.formUser.password = this.form.newPassword;
        this.$store.editUser(this.formUser);
        setTimeout(() => this.$router.push({ path: "/" }), 500);
      }
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
