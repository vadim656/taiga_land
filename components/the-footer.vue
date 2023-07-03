<template>
  <footer class="bg-white pt-8 mt-12">
    <UIContainerCenter class="h-full min-h-[400px] flex flex-col gap-12">
      <TheContacts class="" />
    </UIContainerCenter>
  </footer>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'

const visibleOrderModal = ref(false)
const date = ref()

const { handleSubmit, resetForm } = useForm()
const { value, errorMessage } = useField('value', validateField)
const toast = useToast()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

function validateField (value) {
  if (!value) {
    return 'City is required.'
  }

  return true
}

const onSubmit = handleSubmit(values => {
  if (values.value && values.value.name) {
    toast.add({
      severity: 'info',
      summary: 'Form Submitted',
      detail: values.value.name,
      life: 3000
    })
    resetForm()
  }
})
</script>

<style lang="scss" scoped></style>
