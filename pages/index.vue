<template>
  <div>
    <div class="text-4xl">Home page</div>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="image in 100" class="image">
        <img loading="lazy" :src="getRandomImage(image)" alt="" />
      </div>
    </div>
    <NuxtLink to="/about"> </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const getRandomImage = (index: number) => {
  return `https://picsum.photos/3000?random=${index}`
}

onMounted(() => {
  const images = document.querySelectorAll('.image')

  animateImagesFromBottom(images)
})

const animateImagesFromBottom = (images: NodeListOf<Element>) => {
  images.forEach(image => {
    gsap.from(image.querySelector('img'), {
      opacity: 0,
      yPercent: 50,
      duration: 1,
      delay: 0.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: image,
        start: 'top 100%',
        end: 'bottom 100%',
        toggleActions: 'play none none reset',
        // scrub: true,
      },
    })
  })
}
</script>
