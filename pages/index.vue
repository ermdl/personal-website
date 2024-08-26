<template>
  <div>
    <div class="text-4xl">Home page</div>
    <div class="grid grid-cols-3 gap-4">
      <NuxtImg v-for="image in 100" :src="getRandomImage(image)" alt="" />
    </div>
    <NuxtLink to="/about"> </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const getRandomImage = (index: number) => {
  return `https://picsum.photos/1000?random=${index}`
}

onMounted(() => {
  const images = document.querySelectorAll('img')

  animateImagesFromBottom(images)
})

const animateImagesFromBottom = (images: NodeListOf<HTMLImageElement>) => {
  images.forEach(image => {
    gsap.from(image, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: image,
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: 1,
      },
    })
  })
}
</script>
