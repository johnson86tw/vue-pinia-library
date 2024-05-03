# Nuxt App

```
pnpm add pinia @pinia/nuxt
```


## Link package
- Using directory link, library should rebuild to update the dist files and can be used.


```
pnpm link ../
```


## Cancel Directory Link

Whether using Method 1 or 2 for Directory link, unlinking is done in the target project:

# Unlink my-lib in my-app
cd ~/projects/my-app

pnpm unlink ~/projects/my-lib
# Or using the package name
pnpm unlink my-lib
