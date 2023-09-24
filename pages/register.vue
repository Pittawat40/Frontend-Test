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
      <div class="mb-3">
        <label for="pass" class="form-label">รหัสผ่าน<span>*</span></label>
        <input
          type="password"
          class="form-control"
          :class="{ 'border-danger': v$.form.password.$errors.length || flag }"
          id="pass"
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
      <div class="mt-3 mb-3">
        <label class="form-label">วันเกิด<span>*</span></label>
        <div class="d-flex justify-content-between align-items-center gap-3">
          <span class="holder position-relative d-inline w-100 mx-auto">
            <select
              class="form-select"
              :class="{ 'border-danger': v$.form.birthDay.day.$errors.length }"
              onmousedown="this.size=5"
              onchange="this.size=0"
              v-model="form.birthDay.day"
            >
              <option value="" disabled selected hidden>วัน</option>
              <option v-for="(n, index) in day" :key="n" :value="index">
                {{ n }}
              </option>
            </select>
          </span>
          <span class="holder position-relative d-inline w-100 mx-auto">
            <select
              class="form-select"
              :class="{
                'border-danger': v$.form.birthDay.month.$errors.length,
              }"
              onmousedown="this.size=5"
              onchange="this.size=0"
              v-model="form.birthDay.month"
            >
              <option value="" disabled selected hidden>เดือน</option>
              <option v-for="(n, index) in month" :key="n" :value="index">
                {{ n }}
              </option>
            </select>
          </span>
          <span class="holder position-relative d-inline w-100 mx-auto">
            <select
              class="form-select"
              :class="{
                'border-danger': v$.form.birthDay.year.$errors.length,
              }"
              onmousedown="this.size=5"
              onchange="this.size=0"
              v-model="form.birthDay.year"
            >
              <option value="" disabled selected hidden>ปี</option>
              <option v-for="(n, index) in year" :key="n" :value="index">
                {{ n }}
              </option>
            </select>
          </span>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <label class="form-label">เพศ<span>*</span></label>
        <div class="form-check form-check-inline mx-4">
          <input
            class="form-check-input"
            :class="{ 'border-danger': v$.form.gender.$errors.length }"
            type="radio"
            id="male"
            value="male"
            v-model="form.gender"
          />
          <label class="form-check-label" for="male">ชาย</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            :class="{ 'border-danger': v$.form.gender.$errors.length }"
            type="radio"
            id="famale"
            value="famale"
            v-model="form.gender"
          />
          <label class="form-check-label" for="famale">หญิง</label>
        </div>
        <div
          class="input-errors text-danger"
          v-for="(error, index) of v$.form.gender.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
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
        class="btn d-block w-100 fs-6 text-white mt-4"
        :class="!form.access ? 'disabled' : ''"
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
  <alert ref="alert" />
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  helpers,
  sameAs,
} from "@vuelidate/validators";

import value from "../store/data.json";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
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
      gender: "",
      access: false,
    },
    flag: false,
    day: [],
    month: [],
    year: [],
    current: 10,
  }),
  watch: {
    "form.password": async function (e) {
      this.$store.checkPass(this.form.password);
      if (!this.$store.checkPass(this.form.password)) this.flag = true;
      else this.flag = false;
    },
  },
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          email: helpers.withMessage("กรุณากรอกอีเมล !", email),
        },
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
        birthDay: {
          day: {
            required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          },
          month: {
            required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          },
          year: {
            required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          },
        },
        gender: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
      },
    };
  },
  mounted() {
    console.log(value);
    this.month = value.month;
    this.day = value.day[0];

    const currentYear = new Date().getFullYear();
    for (let i = 0; i < this.current; i++) {
      if (i !== 0) this.year.push(currentYear - (i + 1));
      else this.year.push(currentYear);
    }
  },
  methods: {
    async register() {
      this.v$.form.$touch();
      if (this.v$.form.$error) return;

      if (!this.$store.checkUser(this.form)) {
        this.$store.registerUser(this.form);
        setTimeout(() => this.$router.push({ path: "/" }), 500);
      } else {
        const element = this.$refs.alert;
        element.setData("อีเมลนี้ถูกใช้งานแล้ว", "error", "bg-danger");
        setTimeout(() => element.$el.classList.add("active"), 100);
        setTimeout(() => element.$el.classList.remove("active"), 2500);
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
