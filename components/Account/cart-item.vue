<template>
  <div class="border p-4 rounded-md flex items-center justify-between">
    <pre>{{ props.data }}</pre>
    <InputNumber
      v-model="Val"
      inputId="horizontal-buttons"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      decrementButtonClass="p-button-danger"
      incrementButtonClass="p-button-success"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
      class=" w-full max-w-[100px]"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
})
const Val = ref(1)
</script>

<style></style>
