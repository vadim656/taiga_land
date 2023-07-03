<template>
  <div class="flex flex-col gap-2">
    <span class="text-xs text-gray-600">{{ props.label }}</span>
    <InputText
      v-if="props.type !== 'phone'"
      type="text"
      v-model="value"
      :disabled="props.active"
      :placeholder="props.placeholder"
    />
    <InputMask
      v-else-if="props.type == 'phone'"
      type="text"
      v-model="value"
      date="phone" mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" 
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  active: Boolean,
  type: {
    type: String,
    default: 'text'
  },
})

const value = ref('')
</script>

