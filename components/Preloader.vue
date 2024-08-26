<template>
  <div
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full text-[160px] font-bold text-slate-800 bg-white/20 preloader"
  >
    <span class="tabular-nums">{{ progress ? progress : 0 }}</span>
  </div>
</template>

<script lang="ts" setup>
const global = useGlobalStore()

const totalImages = ref(0)
const loadedImages = ref(0)

const DELAY = 10

const setProgress = (total: number) => {
  loadedImages.value++
  totalImages.value = total
}

onMounted(async () => {
  const images = document.querySelectorAll('img')

  for (const image of images) {
    await new Promise<void>(resolve => {
      if (image.complete) {
        setProgress(images.length)
        resolve()
      } else {
        image.onload = () => {
          setProgress(images.length)
          resolve()
        }
      }
    })

    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, DELAY)
    })
  }
})

const progress = computed(() => {
  return Math.min(
    Math.floor((loadedImages.value / totalImages.value) * 100),
    100,
  )
})

watch(
  () => progress.value,
  newValue => {
    if (newValue === 100) {
      global.hidePreloader()

      gsap.fromTo(
        '.preloader',
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          onComplete() {
            gsap.set('body', { overflow: 'auto' })
          },
        },
      )
    }
  },
)
</script>
