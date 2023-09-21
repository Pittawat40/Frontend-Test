<template>
  <div
    class="modal fade modal-lg"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
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
                    id="surName"
                    placeholder="ชื่อ"
                  />
                </div>
                <div class="col-md-6" id="txtLastName">
                  <label for="lastName" class="form-label"
                    >นามสกุล<span>*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="นามสกุล"
                  />
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
                    id="address"
                    rows="4"
                    placeholder="รายละเอียดที่อยู่"
                    v-model="val.no"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">จังหวัด<span>*</span></label>
                  {{ val.province }}
                  <select class="form-select" v-model="val.province">
                    <option value="" disabled selected hidden>
                      กรุณาเลือกจังหวัด
                    </option>
                    <option value="กรุงเทพฯ">กรุงเทพฯ</option>
                    <option value="จังหวัดเชียงใหม่">จังหวัดเชียงใหม่</option>
                    <option value="จังหวัดขอนแก่น">จังหวัดขอนแก่น</option>
                  </select>
                </div>
                <div class="col-md-6" id="txtDistrct">
                  <label class="form-label">เขต/อำเภอ<span>*</span></label>
                  <select class="form-select" v-model="val.district">
                    <option value="" disabled selected hidden>
                      กรุณาเลือกเขต/อำเภอ
                    </option>
                    <option value="เขตบางซื่อ">เขตบางซื่อ</option>
                    <option value="อำเภอเมือง">อำเภอเมือง</option>
                    <option value="อำเภอเมืองขอนแก่น">อำเภอเมืองขอนแก่น</option>
                  </select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label">แขวง/ตำบล<span>*</span></label>
                  <select class="form-select" v-model="val.subDistrict">
                    <option value="" disabled selected hidden>
                      กรุณาเลือกแขวง/ตำบล
                    </option>
                    <option value="แขวงวงศ์สว่าง">แขวงวงศ์สว่าง</option>
                    <option value="ตำบลสุเทพ">ตำบลสุเทพ</option>
                    <option value="ตำบลท่าพระ">ตำบลท่าพระ</option>
                  </select>
                </div>
                <div class="col-md-6" id="txtPostCode">
                  <label for="postCode" class="form-label"
                    >รหัสไปรษณีย์<span>*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="postCode"
                    placeholder="รหัสไปรษณีย์"
                    v-model="val.zipcode"
                  />
                </div>
              </div>
              <div
                class="footer d-flex justify-content-between align-items-center"
              >
                <a
                  href="#"
                  class="btn d-block fs-6 text-dark border"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  >ย้อนกลับ</a
                >
                <a href="#" class="btn d-block fs-6 text-white">บันทึก</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Object,
      default: {
        province: "",
        district: "",
        subDistrict: "",
      },
      required: false,
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

@media (max-width: 414px) {
  .modal .header .line {
    width: 65%;
  }

  .modal-body {
    padding: 1.2rem !important;
  }

  #txtLastName,
  #txtDistrct,
  #txtPostCode {
    margin-top: 1rem;
  }
}
</style>
