<script setup lang="ts">
import { useVuePiniaLibrary } from './store'

const store = useVuePiniaLibrary()
</script>

<template>
	<div style="border: solid 1px black">
		<div>Vue Pinia Library Component</div>

		<div>Is good? {{ store.isGood }}</div>
		<button @click="store.yes">yes</button>
		<button @click="store.no">no</button>
	</div>
</template>

<style lang="scss"></style>
