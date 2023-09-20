<template>
  <div class="container">
    <navbar />
    <div class="detail d-flex justify-content-between mt-4">
      <sidebar />
      <div class="body w-100">
        <div class="header d-flex justify-content-between align-items-center">
          <h5>ที่อยู่จัดส่ง</h5>
          <div class="line"></div>
        </div>

        <a href="#" class="btn d-block fs-6 text-white mt-3 mb-3 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
          >สร้างที่อยู่ใหม่</a
        >

        <table class="table table-striped">
          <thead class="text-white">
            <tr>
              <th class="text-center" scope="col" colspan="3">
                รายละเอียดที่อยู่
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-75" colspan="2">
                1415 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800
              </td>
              <td class="text-center">
                <a href="#" class="fs-6 text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">แก้ไข</a>
                |
                <a href="#" class="fs-6 text-dark">ลบ</a>
              </td>
            </tr>
            <tr>
              <td class="w-75" colspan="2">
                1415 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800
              </td>
              <td class="text-center">
                <a href="#" class="fs-6 text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">แก้ไข</a>
                |
                <a href="#" class="fs-6 text-dark">ลบ</a>
              </td>
            </tr>
            <tr>
              <td class="w-75" colspan="2">
                1415 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800
              </td>
              <td class="text-center">
                <a href="#" class="fs-6 text-dark">แก้ไข</a>
                |
                <a href="#" class="fs-6 text-dark">ลบ</a>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex justify-content-between align-items-center">
          <select class="form-select w-25">
            <option disabled selected hidden>10 / หน้า</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
          <nav class="mt-3">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <modal />
</template>

<style scoped>
thead tr {
  background: var(--blue);
}

tr {
  line-height: 2rem;
}

.btn {
  width: 20%;
  padding: 0.4rem;
  border-radius: 2px;
}

.container {
  padding: 5rem 10rem;
}

.container .detail .body {
  width: auto;
  padding-left: 2rem;
}

.container .detail .body .header .line {
  width: 75%;
}

.container .detail {
  height: 80%;
}

@media (max-width: 1200px) {
  .container {
    padding: 5rem;
  }

  .btn {
    width: 30%;
  }
}

@media (max-width: 991px) {
  .container {
    padding: 5rem 1rem;
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
}

@media (max-width: 414px) {
  .btn {
    width: 40%;
  }

  .container .header {
    display: flex !important;
  }

  .container .detail .body .header .line {
    width: 65%;
  }
}
</style>
