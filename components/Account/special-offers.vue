<template>
  <div class="grid grid-cols-4 gap-6">
    <div v-for="i in 5" :key="i" class="rounded-md overflow-hidden">
      <img
        src="https://www.gd.ru/images/articles/4317/goryachie-aktsii.jpg"
        alt=""
        class="w-full h-auto object-cover"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
