<template>
  <div class="container mx-auto flex flex-col gap-12 pt-48">
    <div class="grid grid-cols-1 sm:grid-cols-4">
      <ServicesItem v-for="item in allServices" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup>
import { ALL_SERVICES } from '@/gql/SERVICES'
const { result: allS } = useQuery(ALL_SERVICES)
const allServices = computed(() => allS.value?.products?.data ?? [])

definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
