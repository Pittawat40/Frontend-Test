<template>
  <div class="container">
    <navbar />
    <div class="detail d-flex justify-content-between mt-4">
      <sidebar />
      <div class="body w-100">
        <form @keyup.enter="changePass">
          <div class="header d-flex justify-content-between align-items-center">
            <h5>เปลี่ยนรหัสผ่าน</h5>
            <div class="line"></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label for="pass" class="form-label"
                >รหัสผ่านปัจจุบัน<span>*</span></label
              >
              <input
                type="password"
                class="form-control"
                :class="{ 'border-danger': v$.form.password.$errors.length }"
                id="pass"
                placeholder="รหัสผ่านปัจจุบัน"
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
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
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
            <div class="col-md-6" id="txtPass">
              <label for="confirmPass" class="form-label"
                >ยืนยันรหัสผ่าน<span>*</span></label
              >
              <input
                type="password"
                class="form-control"
                :class="{
                  'border-danger': v$.form.confirmPassword.$errors.length,
                }"
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
          </div>
          <div class="footer d-flex justify-content-center align-items-center">
            <a href="#" class="btn d-block fs-6 text-white" @click="changePass"
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
import { required, sameAs, minLength, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {
      password: "",
      newPassword: "",
      confirmPassword: "",
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
        confirmPassword: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          min: helpers.withMessage(
            "รหัสผ่านต้องมากกว่า 6 ตัวอักษร !",
            minLength(6)
          ),
          sameAs: helpers.withMessage(
            "กรุณากรอกรหัสผ่านให้เหมือนกัน !",
            sameAs(this.form.newPassword)
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
      const element = this.$refs.alert;

      if (this.formUser.password === this.form.password) {
        if (this.form.newPassword === this.form.confirmPassword) {
          this.formUser.password = this.form.newPassword;
          this.$store.editUser(this.formUser);
          this.v$.$reset();
          this.form = {};

          element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
          setTimeout(() => element.$el.classList.add("active"), 100);
          setTimeout(() => element.$el.classList.remove("active"), 2500);
        }
      } else {
        element.setData("รหัสผ่านไม่ถูกต้อง", "error", "bg-danger");
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

.container form .header .line {
  width: 70%;
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
    width: 65%;
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

  #txtPass {
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
    width: 50%;
  }
}
</style>
