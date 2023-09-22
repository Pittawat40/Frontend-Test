<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5" @submit.prevent="resetPassword">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>ลืมรหัสผ่าน</h3>
        <div class="line"></div>
      </div>
      <div class="mt-3 mb-3">
        <label for="email" class="form-label">อีเมล<span>*</span></label>
        <input
          type="email"
          class="form-control"
          :class="{ 'border-danger': v$.form.email.$errors.length }"
          id="email"
          placeholder="อีเมล"
          v-model="form.email"
        />
        <div
          class="mt-1 input-errors text-danger"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <a
        href="#"
        class="btn d-block w-100 fs-6 text-white"
        @click="resetPassword"
        >รีเซ็ทรหัสผ่าน</a
      >
      <div class="footer d-flex justify-content-center mt-3">
        <a class="text-secondary">เป็นสมาชิกแล้ว ?</a>
        <a href="/" class="text-dark text-decoration-underline mx-3"
          >เข้าสู่ระบบ</a
        >
      </div>
    </form>
  </div>
  <alert ref="alert" />
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {
      email: "",
    },
    checkData: false,
  }),
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          email: helpers.withMessage("กรุณากรอกอีเมล !", email),
        },
      },
    };
  },
  methods: {
    async resetPassword() {
      this.v$.form.$touch();
      if (this.v$.form.$error) return;

      this.checkData = this.$store.checkUser(this.form);
      if (this.checkData) {
        this.$store.setUser(this.form);
        setTimeout(() => this.$router.push({ path: "/reset" }), 500);
      } else {
        const element = this.$refs.alert;
        element.setData("ไม่พบอีเมลในระบบ", "error", "bg-danger");
        setTimeout(() => element.$el.classList.add("active"), 100);
        setTimeout(() => element.$el.classList.remove("active"), 2500);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 5rem 10rem;
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
}

@media (max-width: 560px) {
  .container {
    padding: 1rem;
  }
}

@media (max-width: 414px) {
  .container .header .line {
    width: 55%;
  }
}
</style>
