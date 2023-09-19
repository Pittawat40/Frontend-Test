<template>
  <div class="container">
    <navbar />
    <div class="detail d-flex justify-content-between mt-4">
      <sidebar />
      <div class="body w-100">
        <form>
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
                id="pass"
                placeholder="รหัสผ่านปัจจุบัน"
              />
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
                id="newPass"
                placeholder="รหัสผ่านใหม่"
              />
            </div>
            <div class="col-md-6" id="txtPass">
              <label for="confirmPass" class="form-label"
                >ยืนยันรหัสผ่าน<span>*</span></label
              >
              <input
                type="password"
                class="form-control"
                id="confirmPass"
                placeholder="ยืนยันรหัสผ่าน"
              />
            </div>
          </div>
          <div class="footer d-flex justify-content-center align-items-center">
            <a href="#" class="btn d-block fs-6 text-white">บันทึก</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

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

.container form .footer {
  height: 5rem;
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
