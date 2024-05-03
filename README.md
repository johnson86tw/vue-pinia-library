# Vue Pinia Library

## Related issues
- [pinia store in library mode doesn't work](https://github.com/vuejs/pinia/discussions/2487)
- [Component that uses pinia in library mode can't be imported and reused in another app](https://github.com/vuejs/pinia/discussions/1073)


## Process

1. update library version and then publish.
2. test prod in nuxt-app

## v0.0.1
- Using directory link package, it works on dev and prod.
- Using pnpm install, it works on dev, but doesn't work on prod.
- Using pnpm install, it works on prod with `const store = useVuePiniaLibrary(useNuxtApp().$pinia)`
- Using pnpm install, they work on prod with the follows:
```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const wrapperStore = useWrapperStore()
```

典型錯誤

```
Cannot read properties of undefined (reading '_s')
```

## v0.0.2 remove wrapper store

- Same as v0.0.1
- 不是因為直接 export defineStore 因此能讓 library user 不需要 `useNuxtApp().$pinia`


## v0.0.3 猜測是 component

- 不是 component 有使用 store 因此讓能 library user 不需要 `useNuxtApp().$pinia`

## v0.0.4 不要 external pinia

錯誤訊息不一樣

```
[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"? See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help. This will fail in production.
```

## v0.0.5 使用 external 但不加 output
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

沒用，典型錯誤。

## v0.0.6 store 2 in pinia-library

只需要一個 store 填入 $pinia，其他 store 可以不用填入！
Only one store needs to be filled in with $pinia, other stores do not need to be filled in!

```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const store2 = useVuePiniaLibrary2()
```