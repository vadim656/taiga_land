<template>
  <div class="container mx-auto flex flex-col gap-12 pt-48">
    <UIContainerCenter class="flex flex-col gap-12 px-2">
      <UIHeaderH3 class="text-white">Контакты</UIHeaderH3>
      <div class="flex flex-col">
        <span> Адрес: </span>
        <span class="font-bold">Пашковская 41/1</span>
      </div>
      <div class="flex flex-col">
        <span> Телефон: </span>
        <span class="font-bold">+7(993) 324-42-42</span>
      </div>
      <div class="flex flex-col">
        <span> График работы: </span>
        <span class="font-bold">10:00 - 22:00 без выходных </span>
      </div>
      <div class="flex flex-col">
        <span> Полное наименование организации : </span>
        <span class="font-bold"
          >Общество с ограниченной ответственностью «ММП-КАПИТАЛ»</span
        >
      </div>
      <div class="flex flex-col">
        <span> ИНН/КПП: </span>
        <span class="font-bold">4217204110/421701001</span>
      </div>
      <div class="flex flex-col">
        <span> Email: </span>
        <span class="font-bold">mmpcapital@mail.ru</span>
      </div>
    </UIContainerCenter>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
