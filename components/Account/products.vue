<template>
  <div class="flex flex-col gap-6">
    <div class="w-full grid grid-cols-4 gap-6">
      <AccountProductWrapper
        v-for="item in products"
        :key="item.id"
        :data="item"
      />
    </div>
    <Paginator
      :rows="8"
      :totalRecords="props.pages"
      :rowsPerPageOptions="[8, 16, 24]"
      @page="pageEvent"
    ></Paginator>
  </div>
</template>

<script setup>
import AccountProductWrapper from '@/components/Account/product-wrapper.vue'
const props = defineProps(['data', 'pages'])
const emit = defineEmits(['pageEvent'])
const products = computed(() => {
  return props.data
})
const pageEvent = event => {
  emit('pageEvent', event.page + 1)
}
</script>

<style lang="scss" scoped></style>
