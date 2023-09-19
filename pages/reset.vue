<template>
  <div class="container d-flex justify-content-center">
    <form class="p-5">
      <div class="header d-flex justify-content-between align-items-center">
        <h3>ตั้งรหัสผ่านใหม่</h3>
        <div class="line"></div>
      </div>
      <div class="mt-3 mb-3">
        <label for="password" class="form-label">รหัสผ่าน<span>*</span></label>
        <input type="password" class="form-control" id="password" placeholder="รหัสผ่าน"/>
      </div>
      <div class="mb-3">
        <label for="newPass" class="form-label">รหัสผ่านใหม่<span>*</span></label>
        <input type="password" class="form-control" id="newPass" placeholder="รหัสผ่านใหม่"/>
      </div>
      <a class="btn d-block w-100 fs-6 text-white">รีเซ็ท</a>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 5rem 10rem;
}

.container .header .line {
  width: 50%;
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

  .container .header .line {
    width: 60%;
  }
}

@media (max-width: 560px) {
  .container {
    padding: 1rem;
  }
}

@media (max-width: 414px) {
  .container .header .line {
    width: 100%;
  }
}
</style>
