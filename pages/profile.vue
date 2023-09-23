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
import { required, email, minLength, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {},
  }),
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
        gender: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
      },
    };
  },
  mounted() {
    this.form = this.$store.getUser();
  },
  methods: {
    async updateProfile() {
      this.v$.form.$touch();
      if (this.v$.form.$error) return;

      this.$store.editUser(this.form);
      const element = this.$refs.alert;
      element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
      setTimeout(() => element.$el.classList.add("active"), 100);
      setTimeout(() => element.$el.classList.remove("active"), 2500);
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
