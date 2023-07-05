<template>
  <!-- час с  10:00 - 22:00 без выходных -->
  <!-- номер клубной карты заявка
папоп вопрос про членство в клубе -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 w-full gap-8 text-gray-600 pb-8 px-4 sm:px-0"
  >
    <div class="flex flex-col gap-4 justify-center">
      <span class="text-2xl">Контакты</span>
      <div class="flex flex-col gap-1">
        <span>Адрес</span>
        <span class="text-sm text-gray-400">Пашковская 41/1</span>
      </div>
      <div class="flex flex-col gap-1">
        <span>Телефон</span>
        <span class="text-sm text-gray-400">8 993 324 42 42</span>
      </div>
      <div class="flex flex-col gap-1">
        <span>График работы</span>
        <span class="text-sm text-gray-400"> 10:00 - 22:00 без выходных </span>
      </div>
      <span @click="$router.push('/politic')" class="text-xs cursor-pointer">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
      <span @click="$router.push('/vozvrat')" class="text-xs cursor-pointer">ПРАВИЛА ВОЗВРАТА</span>
    </div>
    <div class="hidden sm:block">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A60da89df97e39d67e69369b73f3219ca7901bbb2f88c269d253c0fcef9e6dd98&amp;source=constructor"
        width="901"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
    <div class="sm:hidden  flex justify-center">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A60da89df97e39d67e69369b73f3219ca7901bbb2f88c269d253c0fcef9e6dd98&amp;source=constructor"
        width="300"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script setup></script>
