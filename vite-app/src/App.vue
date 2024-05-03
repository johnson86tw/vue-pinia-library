<script setup lang="ts">
import { useVuePiniaLibrary } from 'vue-pinia-library'

const store = useVuePiniaLibrary()
</script>

<template>
	<div>
		<div style="border: solid 1px black">
			<div>useVuePiniaLibrary</div>
			<div>Is good? {{ store.isGood }}</div>
			<button @click="store.yes">yes</button>
			<button @click="store.no">no</button>
		</div>
	</div>
</template>

<style lang="scss"></style>
