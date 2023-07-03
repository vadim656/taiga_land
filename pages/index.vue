<template>
  <div class="flex flex-col gap-12">
    <MainpageSlider />
    <UIContainerCenter class="h-full min-h-[400px] flex flex-col gap-4 sm:gap-12 px-4 sm:px-0">
      <UIHeaderH3 class="text-white">SPA Услуги</UIHeaderH3>
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-[300px,300px] gap-4 sm:gap-12">
        <div
          class="col-span-1 row-span-2 relative group cursor-pointer rounded-md overflow-hidden"
        >
          <div
            class="bg-[#151515]/60 gap-4 backdrop-blur-sm justify-start px-4 items-center text-white w-full bottom-0 absolute left-0 right-0 h-12 hidden group-hover:flex anime"
          >
            <span>Аэро массажная ванна</span>
            <span>от 2 500₽</span>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/img//Frame16.jpg"
            alt=""
          />
        </div>
        <div
          class="sm:col-span-2 sm:row-span-1 relative group cursor-pointer rounded-md overflow-hidden"
        >
          <div
            class="bg-[#151515]/60 gap-4 backdrop-blur-sm justify-start px-4 items-center text-white w-full bottom-0 absolute left-0 right-0 h-12 hidden group-hover:flex anime"
          >
            <span>Пилинг</span>
            <span>от 1000₽</span>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/img//Frame15.jpg"
            alt=""
          />
        </div>
        <div
          class="sm:col-span-1 sm:row-span-1 relative group cursor-pointer rounded-md overflow-hidden"
        >
          <div
            class="bg-[#151515]/60 gap-4 backdrop-blur-sm justify-start px-4 items-center text-white w-full bottom-0 absolute left-0 right-0 h-12 hidden group-hover:flex anime"
          >
            <span>Обертывание</span>
            <span>от 1000₽</span>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/img//Frame17.jpg"
            alt=""
          />
        </div>
        <div class="relative group cursor-pointer rounded-md overflow-hidden">
          <div
            class="bg-[#151515]/60 gap-4 backdrop-blur-sm justify-start px-4 items-center text-white w-full bottom-0 absolute left-0 right-0 h-12 hidden group-hover:flex anime"
          >
            <span>Массаж</span>
            <span>от 1000₽</span>
          </div>
          <img
            class="w-full h-full object-cover"
            src="../assets/img//Frame19.jpg"
            alt=""
          />
        </div>
      </div>
    </UIContainerCenter>
    <UIContainerCenter class="h-full min-h-[400px] flex flex-col gap-12">
      <UIHeaderH3 class="text-white">О нас</UIHeaderH3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0">
        <p class="text-white text-sm sm:text-base">
          «Живая тайга. Сибирский спа» – воплощение гармонии северного леса в
          самом сердце юга России! Это первый партнерский спа-салон, чья
          концепция полностью построена на новой коллекции профессиональных
          спа-уходов от российского бренда Natura Siberica. <br />
          <br />
          «Живая тайга. Сибирский спа» – новое модное пространство в стиле
          эколофт и настоящее место силы, расположенное в историческом центре
          Краснодара по адресу ул. Пашковская, д. 41/1. Здесь для гостей
          работает не только три этажа спа-процедур, но также бутик полезных
          экопродуктов и косметической продукции для домашнего ухода Natura
          Siberica. Аромапарение, аэромассажная ванная, влажная парная – в
          спа-салоне «Живая тайга» найдется все, что нужно для 100% релакса и
          восстановления тела и духа. <br />
          <br />
          В новой коллекции спа-уходов Natura Siberica самым гармоничным образом
          сочетаются дары сибирской природы (травы и экстракты диких ягод и
          цветов, соль целебных озер, глубоководные водоросли, мед, молоко и
          многое другое) и новейшие научные достижения и современные
          бьюти-компоненты.
        </p>
        <div class="sm:relative flex flex-col gap-4">
          <img
            src="@/assets/img/mainSlide10.jpg"
            alt=""
            class="sm:w-[400px] h-auto object-cover  sm:absolute right-0 top-0 z-[2]"
          />
          <img
            src="../assets/img/logo_siberika.png"
            alt=""
            class="sm:w-[300px] h-auto object-cover  sm:absolute right-0 top-10 left-4 z-[3]"
          />
        </div>
        <div class="sm:col-span-2 w-full sm:mt-32">
          <img
            src="@/assets/img/mainSlide12.jpg"
            alt=""
            class="w-full h-40 object-cover"
          />
        </div>
      </div>
    </UIContainerCenter>
    <UIContainerCenter class="h-full min-h-[400px] flex flex-col gap-12">
      <UIHeaderH3 class="text-white">Наши мастера</UIHeaderH3>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <MainpageSotrudnik
          v-for="(item, i) in cotr"
          :key="i"
          :img="item.img"
          :name="item.name"
          :napr="item.napr"
        />
      </div>
    </UIContainerCenter>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const cotr = ref([
  {
    name: 'Свиркина Алина',
    img: 'sot1',
    napr: 'Мастер спа-программ'
  },
  {
    name: 'Давид Давидов',
    img: 'sot2',
    napr: 'Мастер спа-программ'
  },
  {
    name: 'Бычков Константин',
    img: 'sot3',
    napr: 'Шеф-мастер спа-программ'
  },
  {
    name: 'Старостина Ольга',
    img: 'sot4',
    napr: 'Мастер спа-программ'
  }
])
</script>

<style lang="scss" scoped></style>
