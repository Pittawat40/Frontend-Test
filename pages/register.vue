<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5" @keyup.enter="register">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>ลงทะเบียน</h3>
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
        <div class="form-text">
          * รหัสผ่านต้องประกอบด้วยตัวอักษร a-z และ 1-9 ควรมีความยาวไม่ต่ำกว่า 6
          ตัวอักษร
        </div>
      </div>
      <div class="mb-3">
        <label for="confirmPass" class="form-label"
          >ยืนยันรหัสผ่าน<span>*</span></label
        >
        <input
          type="password"
          class="form-control"
          id="confirmPass"
          placeholder="ยืนยันรหัสผ่าน"
          v-model="form.confirmPassword"
        />
      </div>
      <div class="mt-3 mb-3">
        <label class="form-label">วันเกิด<span>*</span></label>
        <div class="d-flex justify-content-between align-items-center gap-3">
          <select class="form-select">
            <option disabled selected hidden>วัน</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </select>
          <select class="form-select">
            <option disabled selected hidden>เดือน</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </select>
          <select class="form-select">
            <option disabled selected hidden>ปี</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </select>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <label class="form-label">เพศ<span>*</span></label>
        <div class="form-check form-check-inline mx-4">
          <input
            class="form-check-input"
            type="radio"
            id="male"
            :value="true"
            v-model="form.gender"
          />
          <label class="form-check-label" for="male">ชาย</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="famale"
            :value="false"
            v-model="form.gender"
          />
          <label class="form-check-label" for="famale">หญิง</label>
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="default"
          v-model="form.access"
        />
        <label class="form-check-label" for="default"
          >ยอมรับข้อกำหนดและเงื่อนไขของการใช้งาน
          <a href="#" class="text-dark text-decoration-underline mx-1"
            >เพิ่มเติม</a
          >
        </label>
      </div>
      <a
        :class="
          !form.access
            ? 'btn d-block w-100 fs-6 text-white mt-4 disabled'
            : 'btn d-block w-100 fs-6 text-white mt-4'
        "
        @click="register"
        >ลงทะเบียน</a
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
      password: "",
      confirmPassword: "",
      birthDay: {
        day: "",
        month: "",
        year: "",
      },
      gender: 0,
      access: false,
    },
  }),
  methods: {
    async register() {
      this.form.gender = this.form.gender ? "male" : "famale";
      if (!this.$store.checkUser(this.form)) {
        this.$store.registerUser(this.form);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0rem 10rem;
}

.container .form-text {
  font-size: 0.7rem;
}

@media (max-width: 1400px) {
  .container form {
    width: 60%;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 2rem 5rem;
  }
}

@media (max-width: 991px) {
  .container {
    padding: 1rem;
  }
}
</style>
