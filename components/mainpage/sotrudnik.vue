<template>
  <div class="relative w-full h-auto flex flex-col items-center justify-center gap-4">
    <img
      :src="imgURL(props.img)"
      alt=""
      class="w-60 h-60 object-cover -p-1 overflow-hidden rounded-full"
    />
    <div class="flex flex-col gap-2 items-center justify-center text-white">
      <span>{{ props.name }}</span>
      <span class="text-sm text-gray-400">{{ props.napr }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  napr: String,
  img: String
})


const imgURL = id => {
  const path = new URL(`../../assets/img`, import.meta.url).href
  return `${path}/${id}.jpg`
}

</script>

<style lang="scss" scoped></style>
