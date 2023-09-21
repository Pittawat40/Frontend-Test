<template>
  <div class="sidebar w-50 border-end">
    <div class="menu text-warning" id="menu" @click="toggle()">
      <span class="p-1 border-end-0 border-start-0">เมนู</span>
      <a class="bars text-warning"
        ><i class="fa fa-chevron-up" aria-hidden="true"></i
      ></a>
      <a class="times text-warning"
        ><i class="fa fa-chevron-down" aria-hidden="true"></i
      ></a>
    </div>
    <ul class="list-group rounded-0">
      <li class="list-group-item p-3 border-end-0 border-start-0">
        <i class="fa fa-user" aria-hidden="true"></i>
        <a href="/profile" class="mx-2 p-2 text-dark">บัญชีของฉัน</a>
      </li>
      <li class="list-group-item p-3 border-end-0 border-start-0">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <a href="/change" class="mx-2 p-2 text-dark">เปลี่ยนรหัสผ่าน</a>
      </li>
      <li class="list-group-item p-3 border-end-0 border-start-0">
        <i class="fa fa-address-book" aria-hidden="true"></i>
        <a href="/address" class="mx-2 p-2 text-dark">ที่อยู่จัดส่ง</a>
      </li>
      <li class="list-group-item p-3 border-end-0 border-start-0">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
        <a href="/" class="mx-2 p-2 text-dark">ออกจากระบบ</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      const ul = document.querySelector(".list-group");
      const bars = document.querySelector(".bars");
      const times = document.querySelector(".times");

      ul.classList.toggle("active");
      bars.classList.toggle("active");
      times.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.times {
  display: none;
}

.times.active {
  display: block;
}

.bars.active {
  display: none;
}

.sidebar {
  padding-right: 1rem;
  transition: 0.2;
}

.sidebar:hover .menu i {
  transition: 0.2s;
}

.sidebar .menu {
  padding: 1rem 0rem;
}

.sidebar .menu i {
  display: none;
}

.sidebar li {
  cursor: pointer;
  transition: 0.1s all;
}

.sidebar li:hover {
  border-left: 4px solid var(--blue) !important;
}

.sidebar i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100% !important;
    border: none !important;
    padding: 0;
  }

  .sidebar .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-radius: 4px;
    padding: 1rem;
    cursor: pointer;
  }

  .sidebar .menu i {
    display: block;
  }

  .sidebar ul span {
    padding: 0 !important;
  }

  .sidebar ul {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: opacity 1s ease-out;
  }

  .sidebar ul.active {
    opacity: 1;
    height: auto;
  }
}
</style>
