<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5" @keyup.enter="resetPassword">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>ลืมรหัสผ่าน</h3>
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
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
    },
    checkData: false,
  }),
  methods: {
    async resetPassword() {
      this.checkData = this.$store.checkUser(this.form);
      if (this.checkData) this.$router.push({ path: "/reset" });
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
