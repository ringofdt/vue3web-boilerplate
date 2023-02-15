// @ts-check
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    token: '1234',
  }),
  actions:{

  }
})

