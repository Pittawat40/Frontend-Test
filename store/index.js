import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    data: [],
    dataStorage: "",
    checkData: null,
  }),
  actions: {
    registerUser(commit) {
      this.$state.data.push(commit);
      localStorage.setItem("user", JSON.stringify(this.$state.data));
    },
    checkUser(commit) {
      this.$state.dataStorage = JSON.parse(localStorage.getItem("user"));
      return (this.$state.checkData = this.dataStorage.find(
        (e) => e.email == commit.email
      ));
    },
  },
});
