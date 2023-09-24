<template>
  <div class="modal fade modal-lg" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-5">
          <div class="w-100">
            <form>
              <div
                class="header d-flex justify-content-between align-items-center"
              >
                <h5>ที่อยู่จัดส่ง</h5>
                <div class="line"></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label for="surName" class="form-label"
                    >ชื่อ<span>*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :class="{
                      'border-danger': v$.detail.surName.$errors.length,
                    }"
                    id="surName"
                    placeholder="ชื่อ"
                    v-model="detail.surName"
                  />
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.surName.$errors"
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
                    :class="{
                      'border-danger': v$.detail.lastName.$errors.length,
                    }"
                    id="lastName"
                    placeholder="นามสกุล"
                    v-model="detail.lastName"
                  />
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.lastName.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <label for="address" class="form-label"
                    >รายละเอียดที่อยู่<span>*</span></label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    :class="{
                      'border-danger': v$.detail.no.$errors.length,
                    }"
                    id="address"
                    rows="4"
                    placeholder="รายละเอียดที่อยู่"
                    v-model="detail.no"
                  />
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.no.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">จังหวัด<span>*</span></label>
                  <select
                    class="form-select"
                    :class="{
                      'border-danger': v$.detail.province.$errors.length,
                    }"
                    v-model="detail.province"
                  >
                    <option value="" disabled selected hidden>
                      กรุณาเลือกจังหวัด
                    </option>
                    <option value="กรุงเทพฯ">กรุงเทพฯ</option>
                    <option value="จังหวัดเชียงใหม่">จังหวัดเชียงใหม่</option>
                    <option value="จังหวัดขอนแก่น">จังหวัดขอนแก่น</option>
                  </select>
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.province.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
                <div class="col-md-6" id="txtDistrct">
                  <label class="form-label">เขต/อำเภอ<span>*</span></label>
                  <select
                    class="form-select"
                    :class="{
                      'border-danger': v$.detail.district.$errors.length,
                    }"
                    v-model="detail.district"
                  >
                    <option value="" disabled selected hidden>
                      กรุณาเลือกเขต/อำเภอ
                    </option>
                    <option value="เขตบางซื่อ">เขตบางซื่อ</option>
                    <option value="อำเภอเมือง">อำเภอเมือง</option>
                    <option value="อำเภอเมืองขอนแก่น">อำเภอเมืองขอนแก่น</option>
                  </select>
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.district.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">แขวง/ตำบล<span>*</span></label>
                  <select
                    class="form-select"
                    :class="{
                      'border-danger': v$.detail.subDistrict.$errors.length,
                    }"
                    v-model="detail.subDistrict"
                  >
                    <option value="" disabled selected hidden>
                      กรุณาเลือกแขวง/ตำบล
                    </option>
                    <option value="แขวงวงศ์สว่าง">แขวงวงศ์สว่าง</option>
                    <option value="ตำบลสุเทพ">ตำบลสุเทพ</option>
                    <option value="ตำบลท่าพระ">ตำบลท่าพระ</option>
                  </select>
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.subDistrict.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
                <div class="col-md-6" id="txtPostCode">
                  <label for="postCode" class="form-label"
                    >รหัสไปรษณีย์<span>*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :class="{
                      'border-danger': v$.detail.zipcode.$errors.length,
                    }"
                    id="postCode"
                    placeholder="รหัสไปรษณีย์"
                    v-model="detail.zipcode"
                    maxlength="5"
                  />
                  <div
                    class="mt-1 input-errors text-danger"
                    v-for="(error, index) of v$.detail.zipcode.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <a class="d-none" id="reset" @click="v$.detail.$reset"></a>
              <div
                class="footer d-flex justify-content-between align-items-center"
              >
                <a
                  href="#"
                  class="btn d-block fs-6 text-dark border"
                  data-bs-dismiss="modal"
                  id="close"
                  aria-label="Close"
                  >ย้อนกลับ</a
                >
                <a
                  href="#"
                  class="btn d-block fs-6 text-white"
                  @click="update(indexArr)"
                  >บันทึก</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <alert ref="alert" />
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, numeric, minLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    val: {
      type: Object,
      default: {},
      required: false,
    },
    indexArr: {
      type: String,
      default: null,
      required: false,
    },
  },
  watch: {
    val: async function (e) {
      if (Object.keys(e).length === 0) {
        this.detail = {
          province: "",
          district: "",
          subDistrict: "",
        };
      } else this.detail = e;
    },
  },
  data: () => ({
    detail: {},
  }),
  validations() {
    return {
      detail: {
        surName: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        lastName: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        no: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        province: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        district: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        subDistrict: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
        },
        zipcode: {
          required: helpers.withMessage("กรุณากรอกข้อมูล !", required),
          numeric: helpers.withMessage("กรุณากรอกข้อมูลเป็นตัวเลข !", numeric),
          min: helpers.withMessage(
            "รหัสไปรษณีย์ต้องมี 5 ตัวอักษร !",
            minLength(5)
          ),
        },
      },
    };
  },
  methods: {
    async update(index) {
      this.v$.detail.$touch();
      if (this.v$.detail.$error) return;

      this.$address.updateAddress(this.detail, index);

      const element = this.$refs.alert;
      element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
      setTimeout(() => element.$el.classList.add("active"), 100);
      setTimeout(() => element.$el.classList.remove("active"), 2500);

      document.getElementById("close").click();
    },
    reset() {
      setTimeout(() => document.querySelector("#reset").click(), 100);
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 2rem;
  border-radius: 2px;
  margin-top: 2.5rem;
}

.modal .header .line {
  border-bottom: 2px solid;
  border-color: var(--blue);
  width: 85%;
}

.modal .footer a:first-child {
  background: var(--white) !important;
}

@media (max-width: 991px) {
  .modal .header .line {
    width: 70%;
  }

  .modal-body {
    padding: 2rem !important;
  }
}

@media (max-width: 768px) {
  #txtLastName,
  #txtDistrct,
  #txtPostCode {
    margin-top: 1rem;
  }
}

@media (max-width: 414px) {
  .modal .header .line {
    width: 65%;
  }

  .modal-body {
    padding: 1.2rem !important;
  }
}
</style>
