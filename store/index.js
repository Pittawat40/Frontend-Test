import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    data: [],
    user: {},
    dataStorage: "",
    checkData: null,
  }),
  actions: {
    registerUser(commit) {
      this.$state.data = JSON.parse(localStorage.getItem("data"));
      if (this.$state.data !== null) this.$state.data.push(commit);
      else this.$state.data = [commit];

      localStorage.setItem("data", JSON.stringify(this.$state.data));
    },
    checkUser(commit) {
      this.$state.dataStorage = JSON.parse(localStorage.getItem("data"));
      return (this.$state.checkData = this.$state.dataStorage
        ? this.$state.dataStorage.find((e) => e.email == commit.email)
        : false);
    },
    setUser(commit) {
      this.$state.user = this.$state.dataStorage.find(
        (e) => e.email == commit.email
      );
      localStorage.setItem("user", JSON.stringify(this.$state.user));
    },
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
    editUser(commit) {
      this.$state.dataStorage = JSON.parse(localStorage.getItem("data"));
      let index = this.$state.dataStorage.findIndex(
        (e) => e.email === commit.email
      );

      this.$state.dataStorage[index] = commit;
      localStorage.setItem("data", JSON.stringify(this.$state.dataStorage));

      this.setUser(commit);
    },
  },
});
