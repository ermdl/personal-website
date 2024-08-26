## What Nuxt modules in this repo?

- [Nuxt Image](https://image.nuxt.com/)
- [Nuxt Icon](https://nuxt.com/modules/icon)
- [Tailwind](https://tailwindcss.com/docs/guides/nuxtjs)
- [Pinia](https://nuxt.com/modules/pinia)

## Optional steps:

- Install icon collection by following command: `npm i -D @iconify-json/collection-name`. Lucide icons is one of the best options `npm i -D @iconify-json/lucide`
- Install [shadecn](https://www.shadcn-vue.com/docs/installation/nuxt)
- Install [Nuxt Content](https://content.nuxt.com/)
- Install GSAP and use in utils `export { gsap, ScrollTrigger } from 'gsap/all'` (place it into index.ts). If ScrollTrigger is necessary, init the plugin:

```
  // plugins/gsap.client.ts
  export default defineNuxtPlugin(async () => {
    useGsap.registerPlugin(ScrollTrigger)
  })
```

Was used 22.3.0 Node version
