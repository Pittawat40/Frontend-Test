<template>
  <div
    class="alert position-absolute d-flex justify-content-start align-items-center rounded text-white"
    :class="className"
  >
    <i class="fa" v-bind:class="getClass()" aria-hidden="true"></i>
    {{ text }}
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    type: "",
    className: "",
  }),
  methods: {
    setData(text, type, className) {
      this.text = text;
      this.type = type;
      this.className = className;
    },
    getClass() {
      return {
        "fa-check": this.type === "success",
        "fa-exclamation": this.type === "error",
      };
    },
  },
};
</script>

<style scoped>
.alert {
  top: 2rem;
  right: 0;
  padding: 1rem;
  opacity: 0;
  gap: 0.8rem;
  box-shadow: var(--box-shadow);
  width: auto;
  transition: right 0.2s;
  z-index: 1000;
}

.alert.active {
  position: fixed !important;
  right: 2rem;
  opacity: 1;
  transition: 0.2s linear;
}

.alert i {
  font-size: 1.2rem;
}

@media (max-width: 414px) {
  .alert {
    width: 85%;
  }
}
</style>
