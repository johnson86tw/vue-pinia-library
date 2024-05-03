# Vue Pinia Library

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

## v0.0.2 remove wrapper store

- why @vue-dapp/modal works?

Same as v0.0.1


## v0.0.3 猜測是 component

不是 component 有使用 store 因此讓能 library user 不需要 `useNuxtApp().$pinia`

