<template>
  <div class="bg-neutral-800/90 p-2 rounded-md flex w-full gap-2">
    <div class="flex flex-col gap-2 w-3/4">
      <span class="text-neutral-500 text-xs">{{
        props.data.attributes.group.data.attributes.Name
      }}</span>
      <span class="font-bold">{{ props.data.attributes.Name }}</span>
      <span class="items-center flex gap-2"
        ><IconsITime class="w-4 h-4" />
        {{ props.data.attributes.UnitValue }} мин
      </span>
      <span>{{ props.data.attributes.Price }} ₽</span>
    </div>
    <div class="w-1/4 flex flex-col gap-2 items-center h-auto">
      <button class="p-4 w-full flex items-center justify-center text-sm">
        Выбрать
      </button>
      <button @click="getService(props.data.id)" class="text-sm h-full">
        Подробнее
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
const emit = defineEmits(['closeModal'])
const router = useRouter()
function getService (id) {
  emit('closeModal')
  setTimeout(() => {
    router.push('/services/' + id)
  }, 100)
}
</script>

<style lang="scss" scoped></style>
