<template>
  <div class="container mx-auto flex flex-col gap-12 pt-48">
    <ClientOnly>
      <iframe
        :src="imgURL('re')"
        frameborder="0"
        type="application/pdf"
        height="400"
        >не удалось показать документ2</iframe
      >
    </ClientOnly>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
const imgURL = id => {
  const path = new URL(`../assets`, import.meta.url).href
  return `${path}/${id}.pdf`
}
</script>

<style scoped></style>
