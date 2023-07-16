<template>
  <div class="grid grid-cols-[3fr,1fr] w-full">
    <div class="w-full p-6">
      <!-- <AccountCartItem
        v-for="item in productsData"
        :key="item.id"
        :data="item"
      /> -->
    </div>
    <div class="w-full  p-6 ">
        <div class="bg-[#121212] rounded-md w-full h-full"></div>
    </div>
    <pre>{{ productsData }}</pre>
  </div>
</template>

<script setup>
import AccountCartItem from '@/components/Account/cart-item.vue'
import { CART_USER } from '@/gql/LK'
definePageMeta({
  layout: 'lk',
  title: 'Корзина'
})

const id = ref(1)

const { data: Cart } = await useAsyncQuery(CART_USER, { ID: id.value })
const productsData = computed(
  () => Cart.value.usersPermissionsUser.data.attributes.orders.data ?? []
)
</script>

<style></style>
