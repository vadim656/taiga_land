<template>
  <div class="bg-neutral-800/90 p-2 rounded-md flex w-full gap-2 ">
    <div class="flex flex-col gap-2 w-3/4">
      <span class="text-neutral-500 text-xs">{{
        props.data.attributes.Speciality
      }}</span>
      <span class="font-bold">{{ props.data.attributes.FIO }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
const emit = defineEmits(['closeModal'])
</script>

<style lang="scss" scoped></style>
