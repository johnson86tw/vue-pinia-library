# Vue Pinia Library

1. update library version and then publish.
2. test prod in nuxt-app

- why @vue-dapp/modal works?

## v0.0.1
- Using directory link package, it works on dev and prod.
- Using pnpm install, it works on dev, but doesn't work on prod.
- Using pnpm install, it works on prod with `const store = useVuePiniaLibrary(useNuxtApp().$pinia)`
- Using pnpm install, they work on prod with the follows:
```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const wrapperStore = useWrapperStore()
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