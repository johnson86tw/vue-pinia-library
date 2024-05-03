<script setup lang="ts">
import { useVuePiniaLibrary } from './store'

const store = useVuePiniaLibrary()
</script>

<template>
	<div>Vue Pinia Library</div>
	<div>Is good? {{ store.isGood }}</div>

	<button @click="store.yes">yes</button>
	<button @click="store.no">no</button>
</template>
