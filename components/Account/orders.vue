<template>
  <div class="w-full flex flex-col">
    <DataTable
      :value="props.data"
      dataKey="id"
      v-model:expandedRows="expandedRows"
      @rowExpand="onRowExpand"
      @rowCollapse="onRowCollapse"
      class="w-full rounded-md overflow-hidden"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <span class="text-xl font-bold">Моя заказы</span>
          <div class="flex flex-wrap justify-end gap-2">
            <Button
              text
              icon="pi pi-plus"
              label="Раскрыть все"
              @click="expandAll"
              class="text-sm"
            />
            <Button
              text
              icon="pi pi-minus"
              label="Закрыть все"
              @click="collapseAll"
              class="text-sm"
            />
          </div>
        </div>
      </template>
      <Column expander header="Состав" style="width: 5rem" />
      <Column field="attributes.UID" header="№ Заказа"></Column>
      <Column field="attributes.createdAt" header="Дата"></Column>
      <Column field="attributes.Summ" header="Сумма"></Column>
      <Column field="attributes.Status" header="Статус">
        <template #body="slotProps">
          <span
            class=" px-3 py-2 rounded-md"
            :class="[
              slotProps.data.attributes.Status == 'Pending'
                ? 'bg-yellow-500'
                : 'bg-green-500'
            ]"
          >
            <span class="text-sm " v-if="slotProps.data.attributes.Status == 'Pending'"
              >Обработка</span
            >
            <span class="text-sm" v-else-if="slotProps.data.attributes.Status == 'Done'"
              >Выполнен</span
            >
            <span class="text-sm" v-else-if="slotProps.data.attributes.Status == 'Error'"
              >Отменен</span
            >
          </span>
        </template>
      </Column>
      <template #expansion="slotProps">
        <div class="py-3">
          <h5>Состав заказа {{ slotProps.data.id }}</h5>
          <DataTable :value="slotProps.data.attributes.Product" class="">
            <Column field="id" header="Артикул"></Column>
            <Column
              field="product.data.attributes.Name"
              header="Наименование"
            ></Column>
            <Column field="Val" header="Кол-во"></Column>
            <Column
              field="product.data.attributes.Price"
              header="Цена"
            ></Column>
          </DataTable>
        </div>
      </template>
    </DataTable>
    
    
    <!-- <pre class="text-xs">{{ props.data }}</pre> -->
    <Toast />
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'

const expandedRows = ref([])
const toast = useToast()

const onRowExpand = event => {
  //   toast.add({
  //     severity: 'info',
  //     summary: 'Product Expanded',
  //     detail: event.data.name,
  //     life: 3000
  //   })
}
const onRowCollapse = event => {
  //   toast.add({
  //     severity: 'success',
  //     summary: 'Product Collapsed',
  //     detail: event.data.name,
  //     life: 3000
  //   })
}
const expandAll = () => {
  expandedRows.value = props.data.filter(p => p.id)
}
const collapseAll = () => {
  expandedRows.value = null
}
const props = defineProps({
  data: Array
})
</script>
