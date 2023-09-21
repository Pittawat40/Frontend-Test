<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5" @keyup.enter="login">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>เข้าสู่ระบบ</h3>
        <div class="line"></div>
      </div>
      <div class="mt-3 mb-3">
        <label for="email" class="form-label">อีเมล<span>*</span></label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="อีเมล"
          v-model="form.email"
        />
      </div>
      <div class="mb-3">
        <label for="pass" class="form-label">รหัสผ่าน<span>*</span></label>
        <input
          type="password"
          class="form-control"
          id="pass"
          placeholder="รหัสผ่าน"
          v-model="form.password"
        />
      </div>
      <a
        href="/forgot"
        class="text-secondary text-decoration-underline float-end"
      >
        ลืมรหัสผ่าน ?
      </a>
      <a href="#" class="btn d-block w-100 fs-6 text-white" @click="login"
        >เข้าสู่ระบบ</a
      >
      <div class="footer d-flex justify-content-center mt-3">
        <a class="text-secondary">ลูกค้าใหม่ ?</a>
        <a href="/register" class="text-dark text-decoration-underline mx-3"
          >สมัครสมาชิก</a
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    checkData: false,
  }),
  methods: {
    async login() {
      this.checkData = this.$store.checkUser(this.form);
      if (this.checkData && this.checkData.password === this.form.password) {
        this.$store.setUser(this.form)
        setTimeout(() => this.$router.push({ path: "/profile" }), 500);
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
</style>
