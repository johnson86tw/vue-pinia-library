import { defineStore } from 'pinia'

export const useApp = defineStore('App', {
	state: (): { isDev: boolean } => ({
		isDev: true,
	}),
	getters: {},
	actions: {},
})
