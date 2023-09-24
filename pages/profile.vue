<template>
  <div class="container">
    <navbar />
    <div class="detail d-flex justify-content-between mt-4">
      <sidebar />
      <div class="body w-100">
        <form>
          <div class="header d-flex justify-content-between align-items-center">
            <h5>บัญชีของฉัน</h5>
            <div class="line"></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label for="surName" class="form-label">ชื่อ<span>*</span></label>
              <input
                type="text"
                class="form-control"
                :class="{ 'border-danger': v$.form.surName.$errors.length }"
                id="surName"
                placeholder="ชื่อ"
                v-model="form.surName"
              />
              <div
                class="mt-1 input-errors text-danger"
                v-for="(error, index) of v$.form.surName.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="col-md-6" id="txtLastName">
              <label for="lastName" class="form-label"
                >นามสกุล<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :class="{ 'border-danger': v$.form.lastName.$errors.length }"
                id="lastName"
                placeholder="นามสกุล"
                v-model="form.lastName"
              />
              <div
                class="mt-1 input-errors text-danger"
                v-for="(error, index) of v$.form.lastName.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
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
            <div class="col-md-6" id="txtPhone">
              <label for="phone" class="form-label"
                >เบอร์โทรศัพท์<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :class="{ 'border-danger': v$.form.phone.$errors.length }"
                id="phone"
                placeholder="เบอร์โทรศัพท์"
                v-model="form.phone"
              />
              <div
                class="mt-1 input-errors text-danger"
                v-for="(error, index) of v$.form.phone.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="form-label">วันเกิด<span>*</span></label>
              <div
                class="d-flex justify-content-between align-items-center gap-3"
              >
                <span class="holder position-relative d-inline w-100 mx-auto">
                  <select
                    class="form-select"
                    onmousedown="this.size=5"
                    onmouseleave="this.size=0"
                    onchange="this.size=0"
                    v-model="form.birthDay.day"
                  >
                    <option value="" disabled selected hidden>วัน</option>
                    <option v-for="(n, index) in day" :key="n" :value="n">
                      {{ n }}
                    </option>
                  </select>
                </span>
                <span class="holder position-relative d-inline w-100 mx-auto">
                  <select
                    class="form-select"
                    onmousedown="this.size=5"
                    onmouseleave="this.size=0"
                    onchange="this.size=0"
                    v-model="form.birthDay.month"
                  >
                    <option value="" disabled selected hidden>เดือน</option>
                    <option v-for="(n, index) in month" :key="n" :value="n">
                      {{ n }}
                    </option>
                  </select>
                </span>
                <span class="holder position-relative d-inline w-100 mx-auto">
                  <select
                    class="form-select"
                    onmousedown="this.size=5"
                    onmouseleave="this.size=0"
                    onchange="this.size=0"
                    v-model="form.birthDay.year"
                  >
                    <option value="" disabled selected hidden>ปี</option>
                    <option v-for="(n, index) in year" :key="n" :value="n">
                      {{ n }}
                    </option>
                  </select>
                </span>
              </div>
            </div>
            <div class="col-md-6" id="txtGender">
              <label class="form-label">เพศ<span>*</span></label>
              <div class="d-flex mt-2">
                <div class="form-check form-check-inline">
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
            </div>
          </div>
          <div class="footer d-flex justify-content-center align-items-center">
            <a
              href="#"
              class="btn d-block fs-6 text-white"
              @click="updateProfile"
              >บันทึก</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
  <alert ref="alert" />
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

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
    },
    day: [],
    month: [],
    year: [],
    current: 30,
  }),
  watch: {
    "form.birthDay.month": async function (e) {
      let index = value.month.findIndex(function (month) {
        return month === e;
      });

      if (
        value.day[index].length < this.day.length &&
        !value.day[index].includes(this.form.birthDay.day)
      ) {
        this.form.birthDay.day = "";
      }
      this.day = value.day[index];
    },
  },
  validations() {
    return {
      form: {
        surName: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        lastName: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        email: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          email: helpers.withMessage("กรุณากรอกอีเมล !", email),
        },
        phone: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
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
    this.form = this.$store.getUser();

    this.month = value.month;
    this.day = value.day[0];

    const currentYear = new Date().getFullYear() + 543;
    for (let i = 0; i < this.current; i++) {
      if (i > 5) this.year.push(currentYear - i);
    }
  },
  methods: {
    async updateProfile() {
      this.v$.form.$touch();
      if (this.v$.form.$error) return;

      this.$store.editUser(this.form);
      const element = this.$refs.alert;
      element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
      setTimeout(() => {
        element.$el.classList.add("active");
        setTimeout(() => element.$el.classList.remove("active"), 2500);
      }, 100);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 5rem 10rem;
}

.container form .header .line {
  width: 75%;
}

.container form {
  width: auto;
  padding-left: 2rem;
}

.container form a {
  width: 20%;
}

.container .detail {
  height: 80%;
}

@media (max-width: 1200px) {
  .container {
    padding: 5rem;
  }
}

@media (max-width: 991px) {
  .container {
    padding: 5rem 1rem;
  }

  .container form .header .line {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .container {
    height: 100%;
    padding: 2rem 1rem;
  }

  .container .detail {
    display: grid !important;
    justify-content: center !important;
    gap: 2rem;
  }

  .container .detail .body {
    border: 1px solid var(--grey);
    border-radius: 4px;
    padding: 1rem;
  }

  .container form {
    padding: 0;
  }

  .container form .footer .btn {
    margin-top: 2rem;
  }

  #txtLastName,
  #txtPhone,
  #txtGender {
    margin-top: 1rem;
  }
}

@media (max-width: 414px) {
  .container .header {
    display: flex !important;
  }

  .container form {
    padding: 0.5rem !important;
  }

  .container form .header .line {
    width: 60%;
  }
}
</style>
