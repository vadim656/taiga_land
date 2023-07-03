<template>
  <div
    @click="getURL(props.item.id)"
    class="flex p-4 flex-col gap-4 border-[1px] border-neutral-800 hover:bg-[#17161A] cursor-pointer"
  >
    <img
      v-if="props.item.attributes.Img.data.length >= 1"
      :src="
        'https://api.zhivayataiga.ru' +
        props.item.attributes.Img.data[0].attributes.url
      "
      class="w-full h-80 rounded-md object-cover"
      alt=""
    />
    <img
      v-else
      src="/no-image.svg
      "
      class="w-full h-80 rounded-md object-cover"
      alt=""
    />
    <span class="text-sm font-bold">{{ props.item.attributes.Name }}</span>

    <div class="flex items-center justify-between">
      <div class="font-bold text-sm">
        {{ price(props.item.attributes.Price) }} ₽
      </div>
      <div class="flex items-center gap-2">
        <IconsITime class="w-4 h-4" /><span class="text-sm"
          >{{ props.item.attributes.UnitValue }} мин</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
const price = x => {
  return x.toLocaleString('ru-RU')
}
const router = useRouter()
function getURL (url) {
  router.push('/services/' + url)
}
</script>

<style lang="scss" scoped></style>
