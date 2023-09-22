import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    data: [],
    user: {},
    dataStorage: "",
    checkData: null,
    list: [
      {
        no: "1415",
        subDistrict: "แขวงวงศ์สว่าง",
        district: "เขตบางซื่อ",
        province: "กรุงเทพฯ",
        zipcode: "10800",
      },
      {
        no: "239",
        subDistrict: "ตำบลสุเทพ",
        district: "อำเภอเมือง",
        province: "จังหวัดเชียงใหม่",
        zipcode: "50200",
      },
      {
        no: "15",
        subDistrict: "ตำบลท่าพระ",
        district: "อำเภอเมืองขอนแก่น",
        province: "จังหวัดขอนแก่น",
        zipcode: "40260",
      },
    ],
    addressStorage: "",
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
    getAddress() {
      this.$state.addressStorage = JSON.parse(localStorage.getItem("address"));
      if (!this.$state.addressStorage) {
        localStorage.setItem("address", JSON.stringify(this.$state.list));
        this.$state.addressStorage = JSON.parse(localStorage.getItem("address"));
      } 

      return this.$state.addressStorage
    },
    updateAddress(commit, index) {
      if (index !== null) this.$state.addressStorage[index] = commit
      else this.$state.addressStorage.push(commit)

      localStorage.setItem("address", JSON.stringify(this.$state.addressStorage));
    },
  },
});
