<template>
  <div class="w-screen h-[800px] relative flex">
    <img
      src="~/assets/img/mainSlide.jpg"
      alt=""
      class="w-full h-full object-cover absolute top-0 left-0 right-0"
    />
    <UIContainerCenter class="z-[2]"
      ><div
        class="w-full h-full flex flex-col justify-center items-center text-white gap-12 textRock font-bold"
      >
        <img
          src="../../assets/img/logo.png"
          alt=""
          class="w-[320px] sm:w-[600px] h-auto object-contain"
        />

        <div class="w-full flex justify-center">
          <button @click="setStoreOrder" class="text-xl rounded-full p-4 green-bg sm:w-[140px] sm:h-[140px]">
            Записаться
          </button>
        </div>
      </div>
    </UIContainerCenter>
  </div>
</template>

<script setup>
import { userInfo } from '@/store'
const store = userInfo()
function setStoreOrder () {
  store.setOpenOrder()
}
</script>

<style></style>
