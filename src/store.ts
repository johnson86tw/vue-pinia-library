import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVuePiniaLibrary = defineStore('vue-pinia-library', () => {
	const isGood = ref(false)

	function yes() {
		console.log('yes')
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

export const useVuePiniaLibrary2 = defineStore('vue-pinia-library-2', () => {
	const counter = ref(0)

	function increment() {
		counter.value++
	}

	function decrement() {
		counter.value--
	}

	return {
		counter,
		increment,
		decrement,
	}
})
