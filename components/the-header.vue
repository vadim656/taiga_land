<template>
  <div class="relative">
    <Toast />
    <div class="absolute top-0 left-0 right-0 py-4 px-12 z-[7]">
      <UIContainerCenter class="w-full justify-center sm:justify-between flex items-center gap-8">
        <div class="hidden sm:flex items-center gap-8 text-gray-300">
          <span class="cursor-pointer" @click="getURL('/')">Главная</span>
          <span class="cursor-pointer">О нас</span>
          <span class="cursor-pointer" @click="getURL('/services')">SPA</span>
          <!-- <span>Маркет</span> -->
          <span class="cursor-pointer">Отзывы</span>
          <span class="cursor-pointer">Клуб</span>
          <span class="cursor-pointer">Контакты</span>
        </div>
        <div class="flex-col sm:flex-row items-center justify-center gap-4">
          <div class="flex flex-col text-sm w-full text-center">
            <span>г.Краснодар, Пашковская 41/1</span>
            <span class="font-bold">+7(993) 324-42-42</span>
          </div>

          <ButtonsBtnDefault class="text-gray-300" @click="setStoreOrder">
            <template #title>Записаться</template>
          </ButtonsBtnDefault>
          <!-- <div @click="getURL('/lk/auth/login')">
            <span>Вход / Регистрация</span>
          </div> -->
        </div>
      </UIContainerCenter>
    </div>
    <div
      v-if="store.openOrder == true"
      @click="setStoreOrder"
      class="fixed w-full h-full min-h-screen min-w-screen top-0 right-0 bg-[#17161A]/60 z-[8]"
    ></div>
    <div
      v-if="store.openOrder == true"
      ref="zakaz"
      class="w-full sm:w-[500px] overflow-y-scroll h-screen fixed top-0 right-0 bg-[#17161A] z-[9] p-4"
    >
      <div v-if="allServices" class="flex flex-col gap-2 z-[10] h-full">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between w-full">
            <span class="text-xl font-bold">Запись</span>
            <div
              @click="setStoreOrder"
              class="cursor-pointer flex items-center justify-center p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 gap-2"
            >
              <IconsIClose class="w-5 h-5" />
              <span class="text-sm">Закрыть</span>
            </div>
          </div>
          <!-- //usluga -->
          <div @click="setActiveTab(1)" class="flex flex-col gap-4">
            <div
              class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
            >
              <span>Услуги</span>
              <IconsIArrow :class="[activeTab == 1 ? 'rotate-90' : '']" />
            </div>
          </div>
          <div v-if="activeTab == 1" class="flex flex-col gap-4">
            <div class="relative">
              <input
                type="text"
                name=""
                value=""
                placeholder="Поиск по услугам..."
                class="p-2 rounded-md border border-neutral-700 py-4 w-full"
              />
              <IconsISearch class="absolute top-5 right-2" />
            </div>
            <div class="flex flex-col gap-3">
              <ServicesOrder
                v-for="item in allServices"
                :key="item.id"
                :data="item"
                @closeModal="closeModal"
              >
              </ServicesOrder>
            </div>
          </div>
          <!-- //master -->
          <div @click="setActiveTab(2)" class="flex flex-col gap-4">
            <div
              class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
            >
              <span>Мастер</span>
              <IconsIArrow :class="[activeTab == 2 ? 'rotate-90' : '']" />
            </div>
          </div>

          <div v-if="activeTab == 2" class="flex flex-col gap-4">
            <div class="flex flex-col gap-3">
              <ServicesMaster
                v-for="item in allMasters"
                :key="item.id"
                :data="item"
                @closeModal="closeModal"
              >
              </ServicesMaster>
            </div>
          </div>
          <div @click="setActiveTab(3)" class="flex flex-col gap-4">
            <div
              class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
            >
              <span>Дата и время</span>
              <IconsIArrow :class="[activeTab == 3 ? 'rotate-90' : '']" />
            </div>
          </div>
          <!-- //data -->
          <div v-if="activeTab == 3" class="flex flex-col gap-2">
            <Calendar v-model="date" showIcon>
              <!-- {{ slotProps.date.month }}  -->
              <template #date="slotProps">
                <strong
                  v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                  class="text-red-500 cursor-not-allowed"
                  >{{ slotProps.date.day }}</strong
                >
                <strong v-else>{{ slotProps.date.day }}</strong>
              </template>
            </Calendar>
          </div>
        </div>
      </div>
    </div>
    <!-- //order -1  -->
    <div
      v-if="store.openOrder == true && $route.name == 'services-id'"
      @click="setStoreOrder"
      class="fixed w-full h-full min-h-screen min-w-screen top-0 right-0 bg-[#17161A]/60 z-[8]"
    ></div>
    <div
      v-if="store.openOrder == true && $route.name == 'services-id'"
      ref="zakaz"
      class="w-[500px] overflow-y-scroll h-screen fixed top-0 right-0 bg-[#17161A] z-[9] p-4"
    >
      <div v-if="allServices" class="flex flex-col gap-2 z-[10] h-full">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between w-full">
            <span class="text-xl font-bold">Запись asd</span>
            <div
              @click="setStoreOrder"
              class="cursor-pointer flex items-center justify-center p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 gap-2"
            >
              <IconsIClose class="w-5 h-5" />
              <span class="text-sm">Закрыть</span>
            </div>
          </div>
          <!-- //master -->
          <div @click="setActiveTab(2)" class="flex flex-col gap-4">
            <div
              class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
            >
              <span>Мастер</span>
              <IconsIArrow :class="[activeTab == 2 ? 'rotate-90' : '']" />
            </div>
          </div>

          <div v-if="activeTab == 2" class="flex flex-col gap-4">
            <div class="flex flex-col gap-3">
              <ServicesMaster
                v-for="item in allMasters"
                :key="item.id"
                :data="item"
                @closeModal="closeModal"
              >
              </ServicesMaster>
            </div>
          </div>
          <div @click="setActiveTab(3)" class="flex flex-col gap-4">
            <div
              class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
            >
              <span>Дата и время</span>
              <IconsIArrow :class="[activeTab == 3 ? 'rotate-90' : '']" />
            </div>
          </div>
          <!-- //data -->
          <div v-if="activeTab == 3" class="flex flex-col gap-2">
            <Calendar v-model="date" showIcon>
              <!-- {{ slotProps.date.month }}  -->
              <template #date="slotProps">
                <strong
                  v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                  class="text-red-500 cursor-not-allowed"
                  >{{ slotProps.date.day }}</strong
                >
                <strong v-else>{{ slotProps.date.day }}</strong>
              </template>
            </Calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ALL_SERVICES, ALL_MASTERS } from '@/gql/SERVICES'
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'
import { userInfo } from '@/store'
const router = useRouter()
const store = userInfo()
const visibleOrderModal = ref(false)
const date = ref()

const { handleSubmit, resetForm } = useForm()
const { value, errorMessage } = useField('value', validateField)
const toast = useToast()

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

const step = ref(1)

function getURL (url) {
  router.push(url)
}

function setStoreOrder () {
  store.setOpenOrder()
}

function closeModal () {
  visibleOrderModal.value = false
}

function getService (id) {
  visibleOrderModal.value = false
  setTimeout(() => {
    router.push('/services/' + id)
  }, 100)
}

const activeTab = ref(0)

function setActiveTab (id) {
  activeTab.value == id ? (activeTab.value = 0) : (activeTab.value = id)
}

const zakaz = ref(null)

//ALL_SERVICES

const { result: allS } = useQuery(ALL_SERVICES)
const allServices = computed(() => allS.value?.products?.data ?? [])

//ALL_MASTERS

const { result: allM } = useQuery(ALL_MASTERS)
const allMasters = computed(() => allM.value?.usersPermissionsUsers?.data ?? [])
</script>

<style></style>
