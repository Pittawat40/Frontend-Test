<template>
  <div class="user">
    <i class="fa fa-user" aria-hidden="true"></i>
    <a class="mx-1 p-2 text-dark">{{ data.surName ? data.surName : data.email}}</a>
  </div>
  <div class="header d-flex justify-content-between align-items-center w-100">
    <h3>บัญชีผู้ใช้</h3>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getUser();
    },
  },
};
</script>

<style scoped>
.user {
  position: absolute;
  top: 40px;
  right: 145px;
}

.header .line {
  width: 85%;
}

@media (max-width: 1200px) {
  .user {
    right: 70px;
  }
}

@media (max-width: 991px) {
  .user {
    right: 5px;
  }

  .header .line {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .user {
    display: none;
  }
}

@media (max-width: 560px) {
  .header .line {
    width: 75%;
  }
}

@media (max-width: 414px) {
  .header {
    display: flex !important;
  }

  .header .line {
    width: 70%;
  }
}
</style>
