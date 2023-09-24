import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
  state: () => ({
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
    deleteAddress(index) {
      this.$state.addressStorage.splice(index, 1);
      localStorage.setItem("address", JSON.stringify(this.$state.addressStorage));
    },
  },
});
