<template>
  <Toast position="bottom-right" group="cart">
    <template #message="slotProps">
      <div class="flex  items-center gap-4" style="flex: 1">
        <span class="mt-1 pl-2">{{ slotProps.message.detail }}</span>
      </div>
    </template>
  </Toast>
  <div
    class="border border-gray-700 rounded-md p-4 flex items-center justify-center flex-col gap-4"
  >
    <!-- <img
      :src="
        runtimeConfig.public.strapiURL +
        props.data.attributes.Img.data[0].attributes.url
      "
      alt=""
      class="w-full h-40 object-cover rounded-md"
    /> -->
    <span class="font-bold text-xl">{{ props.data.attributes.Name }}</span>
    <div class="w-full flex items-center justify-between">
      <span>{{ props.data.attributes.Price }}</span>

      <Button
        icon="pi pi-shopping-cart"
        severity="secondary"
        aria-label="Bookmark"
        :loading="loading"
        @click="load"
      />
    </div>
    <!-- <pre>{{ props.data }}</pre> -->
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const props = defineProps({
  data: Object
})
const runtimeConfig = useRuntimeConfig()

const loading = ref(false)

const load = () => {
  loading.value = true
  setTimeout(() => {
    toast.add({
      severity: 'success',
      summary: 'Успешно',
      detail: 'Товар добавлен в корзину',
      group: 'cart',
      life: 1000
    })
    loading.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
