<template>
  <div
    @click="$emit('setProduct')"
    class="bg-neutral-800/90 hover:bg-neutral-700 p-2 rounded-md flex w-full gap-2 cursor-pointer"
  >
    <div class="flex justify-between w-full gap-2">
      <div class="flex flex-col gap-1">
        <span class="text-neutral-500 text-xs">{{
          props.data.attributes.group.data.attributes.Name
        }}</span>
        <span class="font-bold">{{ props.data.attributes.Name }}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="items-center flex gap-2 text-sm"
          ><IconsITime class="w-4 h-4" />
          {{ props.data.attributes.UnitValue }} мин
        </span>
        <span class="text-right w-full"
          >{{ props.data.attributes.Price }} ₽</span
        >
      </div>
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
