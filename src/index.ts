import { computed } from 'vue'
import VuePiniaLibrary from './VuePiniaLibrary.vue'
export { VuePiniaLibrary }

import { useVuePiniaLibrary } from './store'
export * from './store'

export function useWrapperStore() {
	const store = useVuePiniaLibrary()

	return {
		isGood: computed(() => store.isGood),
		yes: store.yes,
		no: store.no,
	}
}
