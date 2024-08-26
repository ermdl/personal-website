import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('Global', {
  state: () => ({
    isPreloaderVisible: true,
  }),

  actions: {
    hidePreloader() {
      this.isPreloaderVisible = false
    },
    showPreloader() {
      this.isPreloaderVisible = true
    },
  },
})
