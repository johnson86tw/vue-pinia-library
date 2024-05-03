import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVuePiniaLibrary = defineStore('vue-pinia-library', () => {
	const isGood = ref(false)

	function yes() {
		isGood.value = true
	}

	function no() {
		isGood.value = false
	}

	return {
		isGood,
		yes,
		no,
	}
})
