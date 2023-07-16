<template>
  <div class="w-full">
    <DataTable :value="products" stripedRows class="w-full">
      <Column header="№ Заказа">
        <template #body="slotProps">
          <span class="text-gray-400 text-sm">{{ slotProps.data.code }}</span>
        </template>
      </Column>
      <Column header="Услуга">
        <template #body="slotProps">
          <span class=" text-sm">{{ slotProps.data.name }}</span>
        </template>
      </Column>
      <Column header="Адрес">
        <template #body="slotProps">
          <span class=" text-sm">{{ slotProps.data.addres }}</span>
        </template>
      </Column>
      <Column header="Цена">
        <template #body="slotProps">
          <span class=" text-sm">{{ slotProps.data.quan }}</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
const products = ref([
  {
    name: 'Массаж лица',
    code: '12332',
    addres: 'Московская 21',
    quan: '1 000 ₽'
  },
  {
    name: 'Массаж лица',
    code: '12323',
    addres: 'Московская 21',
    quan: '2 000 ₽'
  },
  {
    name: 'Массаж рук',
    code: '12312',
    addres: 'Московская 21',
    quan: '500 ₽'
  }
])
</script>

<style lang="scss" scoped></style>
