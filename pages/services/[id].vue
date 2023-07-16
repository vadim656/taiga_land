<template>
  <div class="flex flex-col gap-12">
    <div class="w-full flex flex-col-reverse sm:grid  sm:grid-cols-2">
      <div class="pt-8 sm:pt-48">
        <div class="px-3 sm:px-24">
          <div v-if="IDService?.attributes" class="flex flex-col gap-12">
            <span class="text-4xl font-bold">{{
              IDService.attributes.Name
            }}</span>
            <div class="flex flex-col gap-12">
              <div class="">
                <div class="flex flex-wrap gap-4">
                  <span
                    v-for="item in IDService.attributes.ComponentsProgramm"
                    :key="item.id"
                    class="bg-neutral-800 p-4 font-bold rounded-md"
                    >{{ item.Name }}</span
                  >
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <span class="text-xl">Программа:</span>
                <ul class="flex flex-col gap-2 list-disc list-inside">
                  <li
                    v-for="item in IDService.attributes.Programm"
                    :key="item.id"
                    class="text-sm"
                  >
                    {{ item.Name }}
                  </li>
                </ul>
              </div>
              <div class="flex items-center gap-8 text-2xl">
                <div>
                  <span> {{ price(IDService.attributes.Price) }} ₽ </span>
                </div>
                <div class="flex items-center gap-2">
                  <IconsITime class="w-6 h-6" />
                  <span>{{ IDService.attributes.UnitValue }} Мин.</span>
                </div>
              </div>
              <div>
                <ButtonsBtnDefault
                @click="setStoreOrder"
                  class="text-gray-300 bg-neutral-800 hover:bg-neutral-700"
                >
                  <template #title
                    ><span class="text-xl">Записаться</span></template
                  >
                </ButtonsBtnDefault>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div
          class="w-full h-full bg-neutral-800/70 absolute top-0 right-0"
        ></div>
        <img
          v-if="IDService?.attributes?.Img.data.length >= 1"
          :src="
            'https://api.zhivayataiga.ru' +
            IDService.attributes.Img.data[0].attributes.url
          "
          class="w-full h-full object-cover "
          alt=""
        />
        <img
          v-else
          src="/no-image.svg
      "
          class="w-full h-full object-cover "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ID_SERVICE } from '@/gql/SERVICES'
import { userInfo } from '@/store'
const store = userInfo()
function setStoreOrder () {
  store.setOpenOrder()
}
const route = useRoute()
const { result: IDS } = useQuery(ID_SERVICE, () => ({
  ID: route.params.id
}))
const IDService = computed(() => IDS.value?.product?.data ?? {})

const price = x => {
  return x.toLocaleString('ru-RU')
}
</script>

<style scoped></style>
