import { useUserStore } from '~/store/user'
import { useAddressStore } from '~/store/address'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useUserStore($pinia),
      address: useAddressStore($pinia)
    }
  }
})
