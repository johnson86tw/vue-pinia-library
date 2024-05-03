<script setup lang="ts">
import { useVuePiniaLibrary, useWrapperStore } from 'vue-pinia-library'

const appStore = useApp()
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const wrapperStore = useWrapperStore()
</script>

<template>
	<div>
		<div>isDev: {{ appStore.isDev }}</div>

		<div style="border: solid 1px black">
			<div>useVuePiniaLibrary</div>
			<div>Is good? {{ store.isGood }}</div>
			<button @click="store.yes">yes</button>
			<button @click="store.no">no</button>
		</div>

		<div style="border: solid 1px black">
			<div>useWrapperStore</div>
			<div>Is good? {{ wrapperStore.isGood }}</div>
			<button @click="wrapperStore.yes">yes</button>
			<button @click="wrapperStore.no">no</button>
		</div>
	</div>
</template>

<style lang="scss"></style>
