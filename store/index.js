import { defineStore } from 'pinia'

export const userInfo = defineStore('user', {
  state: () => {
    return {
      data: {},
      openOrder: false
    }
  },
  actions: {
    setUser(data) {
      this.data = data
    },
    setOpenOrder() {
      this.openOrder = !this.openOrder
    }
  },
  getters: {
    userData: state => state.data
  },
  persist: {
    storage: persistedState.sessionStorage
  }
})
