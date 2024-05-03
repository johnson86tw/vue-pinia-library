# Vue Pinia Library


## v0.0.1
- Using directory link package, it works on dev and prod.
- Using pnpm install, it works on dev, but doesn't work on prod.
- Using pnpm install, it works on prod with `const store = useVuePiniaLibrary(useNuxtApp().$pinia)`
- Using pnpm install, they work on prod with the follows:
```ts
const store = useVuePiniaLibrary(useNuxtApp().$pinia)
const wrapperStore = useWrapperStore()
```

## v0.0.2

- why @vue-dapp/modal works?
- remove wrapper store, publish, and test on nuxt prod.

Same as v0.0.1