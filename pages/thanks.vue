<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full min-h-screen gap-12"
  >
    <span class="text-2xl">Спасибо за заказ!</span>
    <span>Номер заказа: </span>
    <b>{{ $route.query.OrderId }}</b>
    <button @click="$router.push('/')" type="">На главную</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
