<template>
  <div
    class="grid grid-cols-[1fr,3fr] content-between tracking-wide divide-x divide-gray-700 h-auto w-full"
  >
    <div class="grid grid-cols-1 divide-y divide-gray-700">
      <div class="flex flex-col gap-4 p-4 items-center">
        <Avatar />
        <pre class="text-xs">{{store.userData.user}}</pre>
        <span class="text-lg font-bold text-center" v-if="store.userData.user.FIO">{{ store.userData.user.FIO }}</span>
        <div class="w-32 text-sm">
          <span
            v-if="status == 1"
            class="bg-green-500/20 border border-green-500 px-3 py-2 rounded-md flex items-center justify-center"
            >Активный</span
          >
          <span
            v-if="status == 2"
            class="bg-red-500/20 border border-red-500 px-3 py-2 rounded-md flex items-center justify-center"
            >Не активный</span
          >
        </div>
      </div>

      <div class="flex flex-col gap-6 p-4">
        <div class="flex justify-start">
          <span class="p-float-label w-full">
            <InputMask
              id="ssn"
              v-model="dataInfo.phone"
              mask="+7(999) 999-99-99"
              placeholder="+7(999) 999-99-99"
              class="w-full"
            />
            <label for="username">Телефон</label>
          </span>
        </div>
        <div class="flex justify-start">
          <span class="p-float-label w-full">
            <InputText id="username" v-model="dataInfo.date" class="w-full" />
            <label for="username">Дата рождения</label>
          </span>
        </div>
        <div class="flex justify-start">
          <span class="p-float-label w-full">
            <InputText id="username" v-model="dataInfo.email" class="w-full" />
            <label for="username">Email</label>
          </span>
        </div>
      </div>
    </div>
    <div class="w-full" v-if="!loaded">
      <div class="w-full">
       <span v-if="ProductsError">{{ ProductsError }}</span> 
        <TabView>
          <TabPanel header="Продукция">
            <AccountProducts
              :data="productsData.data"
              :pages="productsData.meta.pagination.total"
              @pageEvent="pageEventProducts"
            />
          </TabPanel>
          <TabPanel header="Программы">
            <AccountProducts
              :data="productsData.data"
              :pages="productsData.meta.pagination.total"
              @pageEvent="pageEventProducts"
            />
          </TabPanel>
          <TabPanel header="Спецпредложения">
            <AccountSpecialOffers />
          </TabPanel>
          <TabPanel header="История посещений">
            <AccountHistory />
          </TabPanel>
          <TabPanel header="Заказы">
            <AccountOrders :data="dataOrders" />
          </TabPanel>
          <TabPanel header="Бонусы">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from '@/components/Account/avatar.vue'
import AccountSpecialOffers from '@/components/Account/special-offers.vue'
import AccountHistory from '@/components/Account/history.vue'
import AccountProducts from '@/components/Account/products.vue'
import AccountOrders from '@/components/Account/orders.vue'
import { PRODUCTS_USER, CART_USER } from '@/gql/LK'
import { userInfo } from '@/store'
definePageMeta({
  layout: 'lk',
  middleware: 'auth',
  title: 'Учетные данные'
})

const store = userInfo()
const loaded = ref(true)

const dataInfo = ref({
  name: 'Петров Иван Васильевич',
  phone: '+7(996) 999-00-11',
  date: '10.02.1995',
  email: 'va.four2016@gmail.com'
})

const status = ref(1)
//products
const pageStart = ref(1)
const { result: Products, error: ProductsError } = useQuery(
  PRODUCTS_USER,
  () => ({
    PAGE: pageStart.value,
    PAGE_SIZE: 8
  })
)
const productsData = computed(() => Products.value?.products ?? [])
const pageEventProducts = page => {
  pageStart.value = page
}

//orders
const id = ref(1)
const { result: Orders } = useQuery(CART_USER, () => ({
  ID: id.value
}))
const dataOrders = computed(
  () => Orders.value?.usersPermissionsUser.data.attributes.orders.data ?? []
)

onMounted(() => {
  setTimeout(() => {
    loaded.value = false
  }, 500)
})
</script>

<style></style>
