<template>
  <div class="modal" id="confirmModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div
          class="modal-body d-flex justify-content-center align-items-center flex-column p-4"
        >
          <i
            class="fa fa-question-circle-o text-warning"
            aria-hidden="true"
          ></i>
          <h4>ยืนยันการทำรายการ ?</h4>
          <div class="footer d-flex justify-content-center align-items-center">
            <button
              type="button"
              class="btn btn-primary"
              @click="remove(indexArr)"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              class="btn btn-secondary text-dark"
              data-bs-dismiss="modal"
              id="closeModal"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <alert ref="alert" />
</template>

<script>
export default {
  props: {
    indexArr: {
      type: String,
      default: null,
      required: false,
    },
  },
  methods: {
    remove(index) {
      this.$store.deleteAddress(index);

      const element = this.$refs.alert;
      element.setData("ดำเนินการสำเร็จ", "success", "bg-success");
      setTimeout(() => element.$el.classList.add("active"), 100);
      setTimeout(() => element.$el.classList.remove("active"), 2500);

      document.getElementById("closeModal").click();
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 2rem;
  border-radius: 2px;
  margin-top: 0.2rem;
}

.modal .modal-body,
.modal .modal-body .footer {
  gap: 1rem;
}

.modal .modal-body i {
  font-size: 3rem;
}

.modal .modal-body .footer button:last-child {
  background: var(--white) !important;
}
</style>
