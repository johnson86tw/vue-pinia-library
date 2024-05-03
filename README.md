# Vue Pinia Library

## Related issues
- [pinia store in library mode doesn't work](https://github.com/vuejs/pinia/discussions/2487)
- [Component that uses pinia in library mode can't be imported and reused in another app](https://github.com/vuejs/pinia/discussions/1073)
- [How to pass a Pinia store from the app to a vue 3 library](https://stackoverflow.com/questions/76852804/how-to-pass-a-pinia-store-from-the-app-to-a-vue-3-library)


## Experiments

Goal: Find a way that doesn't require manually adding `useNuxtApp().$pinia`


Typical error in nuxt-app:

```
Cannot read properties of undefined (reading '_s')
```

### Process

1. update library version and then publish.
2. test prod in nuxt-app

### v0.0.1
- Using directory link package, it works on dev and prod.
- Using pnpm install, it works on dev, but doesn't work on prod.
- Using pnpm install, it works on prod with `const store = useVuePiniaLibrary(useNuxtApp().$pinia)`
- Using pnpm install, they work on prod with the follows:
```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const wrapperStore = useWrapperStore()
```


### v0.0.2 Remove wrapper store

- Same as v0.0.1
- Not because directly exporting defineStore allows library users to not need useNuxtApp().$pinia


### v0.0.3 Guess is component

- It's not that the component is using the store, so the library user doesn't need useNuxtApp().$pinia

### v0.0.4 Do not externalize Pinia

The error message is different

```
[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"? See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help. This will fail in production.
```

### v0.0.5 Use external but do not add output
```
rollupOptions: {
	external: ['vue', 'pinia'],
	output: {
		dir: 'dist',
		globals: {
			vue: 'vue',
		},
	},
},
```

Useless, typical error.

### v0.0.6 store 2 in pinia-library

Only one store needs to be filled in with $pinia, other stores do not need to be filled in!

```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const store2 = useVuePiniaLibrary2()
```