<template>
  <div class="relative">
    <!-- <div class="absolute top-10 left-10 bg-neutral-600 p-4 z-[9]">
      <pre class="text-sm">{{ mapNotesCOM }}</pre>
      setheader
      <pre>{{ orderSetHeder }}</pre>
    </div> -->
    <Toast />
    <div class="absolute top-0 left-0 right-0 py-4 px-2 sm:px-12 z-[7]">
      <UIContainerCenter class="w-full justify-between flex items-center gap-8">
        <div class="hidden sm:flex items-center gap-8 text-gray-300">
          <span class="cursor-pointer" @click="getURL('/')">Главная</span>
          <span class="cursor-pointer" @click="getURL('/services')">SPA</span>

          <!-- <span>Маркет</span> -->
          <span class="cursor-pointer">Отзывы</span>
          <span class="cursor-pointer" @click="getURL('/lk/auth/login')"
            >Клуб</span
          >
          <span class="cursor-pointer" @click="getURL('/contacts')"
            >Контакты</span
          >
        </div>
        <button class="hidden sm:flex" @click="visibleSert = true" type="">
          Подарочные сертификаты
        </button>
        <!-- mobile mneu -->
        <div class="sm:hidden flex">
          <div @click="mobMenu = true" class="flex items-center gap-1">
            МЕНЮ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
          <div
            v-if="mobMenu"
            class="absolute top-0 left-0 right-0 w-full h-screen flex items-center justify-center bg-neutral-900/90 backdrop-blur-sm"
          >
            <div class="flex flex-col gap-3 text-xl">
              <span class="cursor-pointer" @click="getURL('/')">Главная</span>
              <span class="cursor-pointer" @click="getURL('/services')"
                >SPA</span
              >
              <button @click="visibleSertMob" type="">
                Подарочные сертификаты
              </button>
              <!-- <span>Маркет</span> -->
              <span class="cursor-pointer">Отзывы</span>
              <span class="cursor-pointer" @click="getURL('/lk/auth/login')"
                >Клуб</span
              >
              <span class="cursor-pointer" @click="getURL('/contacts')"
                >Контакты</span
              >
            </div>
          </div>
        </div>
        <div
          class="flex-col sm:flex-row items-end sm:items-center sm:justify-center gap-4"
        >
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
    <!-- //order  -->
    <div
      v-if="store.openOrder == true"
      ref="zakaz"
      class="w-full sm:w-[500px] overflow-y-scroll h-screen fixed top-0 right-0 bg-[#17161A] z-[9] p-4"
    >
      <div v-if="allServices" class="flex flex-col gap-2 z-[10] h-full">
        <div class="flex flex-col gap-4 pb-12">
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
          <!-- //tinek -->
          <!-- //end tinek -->
          <div v-if="stepOrder == 1" class="flex flex-col gap-4 pb-12">
            <!-- //usluga -->
            <div @click="setActiveTab(1)" class="flex flex-col gap-4">
              <div
                class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
              >
                <div class="flex items-center gap-2">
                  <IconsICheck
                    v-if="orderSetHeder.product.id"
                    class="text-green-500"
                  />
                  <IconsICheck v-else class="text-neutral-600" />
                  <span>Услуга</span>
                </div>

                <IconsIArrow :class="[activeTab == 1 ? 'rotate-90' : '']" />
              </div>
            </div>
            <div v-if="activeTab == 1" class="flex flex-col gap-4">
              <div class="flex flex-col gap-3">
                <ServicesOrder
                  v-for="item in allServices"
                  :key="item.id"
                  :data="item"
                  @closeModal="closeModal"
                  @setProduct="setProduct(item)"
                  :class="
                    orderSetHeder.product.id == item.id ? '!bg-green-500' : ''
                  "
                >
                </ServicesOrder>
              </div>
            </div>
            <!-- //master -->
            <div @click="setActiveTab(2)" class="flex flex-col gap-4">
              <div
                class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
              >
                <div class="flex items-center gap-2">
                  <IconsICheck
                    v-if="orderSetHeder.master.length"
                    class="text-green-500"
                  />
                  <IconsICheck v-else class="text-neutral-600" />
                  <span>Мастер</span>
                </div>

                <IconsIArrow :class="[activeTab == 2 ? 'rotate-90' : '']" />
              </div>
            </div>

            <div v-if="activeTab == 2" class="flex flex-col gap-4">
              <div class="flex flex-col gap-3">
                <ServicesMaster
                  :key="ghost.id"
                  :data="ghost"
                  @closeModal="closeModal"
                  @click="setMaster2()"
                  class="cursor-pointer"
                  :class="
                    orderSetHeder.master == ghost.id ? '!bg-green-500' : ''
                  "
                ></ServicesMaster>
                <ServicesMaster
                  v-for="item in allMasters"
                  :key="item.id"
                  :data="item"
                  @closeModal="closeModal"
                  @click="setMaster(item.id)"
                  class="cursor-pointer"
                  :class="
                    orderSetHeder.master == item.id ? '!bg-green-500' : ''
                  "
                >
                </ServicesMaster>
              </div>
            </div>
            <div @click="setActiveTab(3)" class="flex flex-col gap-4">
              <div
                class="p-4 bg-neutral-800 hover:bg-neutral-700 cursor-pointer flex items-center justify-between w-full"
              >
                <div class="flex items-center gap-2">
                  <IconsICheck
                    v-if="orderSetHeder.time.code"
                    class="text-green-500"
                  />
                  <IconsICheck v-else class="text-neutral-600" />

                  <span>Дата и время</span>
                </div>

                <IconsIArrow :class="[activeTab == 3 ? 'rotate-90' : '']" />
              </div>
            </div>
            <!-- //data -->
            <div v-if="activeTab == 3" class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <span> Дата </span>
                <Calendar v-model="date" inline showWeek showButtonBar>
                </Calendar>
              </div>

              <div v-if="date" class="flex flex-col gap-2">
                <span> Время </span>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div
                    v-for="(item, i) in allTimes"
                    :key="i"
                    @click="setTimeOrder(item)"
                    class="p-4 rounded-md anime cursor-pointer flex justify-center"
                    :class="
                      item.code == orderSetHeder.time.code
                        ? 'bg-green-500'
                        : 'bg-neutral-800 hover:bg-neutral-700'
                    "
                  >
                    {{ validTime(item.name) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="stepOrder == 2" class="flex flex-col gap-4 py-12">
            <span class="p-float-label w-full">
              <InputText
                id="username"
                v-model="orderSetHeder.user.name"
                class="w-full"
              />
              <label for="username">Имя</label>
            </span>
            <span class="p-float-label w-full">
              <InputMask
                id="ssn"
                v-model="orderSetHeder.user.phone"
                mask="+7(999)-999-99-99"
                placeholder="+7(999)-999-99-99"
                class="w-full"
              />
              <label for="ssn">Телефон</label>
            </span>
          </div>
          <div v-if="stepOrder == 3" class="flex flex-col gap-4 py-12">
            <span class="p-float-label w-full">
              <InputText
                id="username"
                v-model="orderSetHeder.user.name"
                class="w-full"
              />
              <label for="username">Имя</label>
            </span>

            <span class="p-float-label w-full">
              <InputMask
                id="ssn"
                v-model="orderSetHeder.user.phone"
                mask="+7(999)-999-99-99"
                placeholder="+7(999)-999-99-99"
                class="w-full"
              />
              <label for="ssn">Телефон</label>
            </span>
          </div>
          <div class="flex flex-col gap-4 w-full">
            <button
              v-if="
                stepOrder == 1 &&
                orderSetHeder.product.id &&
                orderSetHeder.master.length &&
                orderSetHeder.time.code
              "
              @click="stepOrder = 2"
              class="w-full p-3 rounded-md bg-green-600"
            >
              Продолжить
            </button>
            <button
              v-if="stepOrder == 2 || stepOrder == 3"
              @click="stepOrder = 1"
              class="w-full p-3 rounded-md bg-neutral-800"
            >
              Назад
            </button>
            <button
              v-if="
                stepOrder == 2 &&
                orderSetHeder.user.name.length >= 3 &&
                orderSetHeder.user.phone.length == 17 &&
                !orderSetHeder.user.phone.includes('_')
              "
              @click="handlerSendNote()"
              class="w-full p-3 rounded-md bg-green-600"
            >
              Записаться
            </button>
            <button
              v-if="
                stepOrder == 3 &&
                orderSetHeder.user.name.length >= 3 &&
                orderSetHeder.user.phone.length == 17 &&
                !orderSetHeder.user.phone.includes('_')
              "
              @click="handlerSendReq()"
              class="w-full p-3 rounded-md bg-green-600"
            >
              Отправить
            </button>
            <button
              v-if="stepOrder !== 3"
              @click="stepOrder = 3"
              class="w-full p-3 rounded-md text-sm"
            >
              Свяжитесь со мной
            </button>
            <span v-if="thank == true">
              Спасибо за запись, мы свяжемся с Вами в течении 10 минут.
            </span>
            <span v-if="thank2 == true">
              Ожидайте, Мы свяжемся с Вами в течении 10 минут.
            </span>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      v-model:visible="visibleSert"
      modal
      header="Создание подарочного сертификата"
      class="w-[90vw] sm:w-[30vw]"
    >
      <div class="w-full flex flex-col gap-2 items-center justify-center p-4">
        <span class="p-float-label">
          <!-- <InputNumber
            v-model="valueSert"
            inputId="minmax-buttons"
            mode="decimal"
            :step="100"
            :min="2500"
            :max="50000"
          /> -->
          <InputNumber
            v-model="valueSert"
            inputId="minmax-buttons"
            mode="decimal"
            :step="100"
            :min="2500"
            :max="50000"
          />
        </span>
        <span class="text-xs">Введите сумму кратную 100 и не более 50 000</span>
      </div>
      <template #footer>
        <div class="flex justify-end">
          <Button
          label="Отменить"
          icon="pi pi-times"
          @click="visibleSert = false"
          autofocus
          text
        />

        <Button
          v-if="valueSert % 100 === 0"
          label="Оплатить"
          icon="pi pi-check"
          @click="createSert()"
        />
        </div>
        
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ALL_SERVICES, ALL_MASTERS } from '@/gql/SERVICES'
import { GET_SETTING_ORDER, CREATE_CLIENT_NOTE } from '@/gql/ORDER'
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'
import { v4 as uuidv4 } from 'uuid'
import { userInfo } from '@/store'
const router = useRouter()
const store = userInfo()
const visibleOrderModal = ref(false)
const date = ref()

const testTin = ref(3)
const visibleSert = ref(false)
const valueSert = ref(2500)
const { handleSubmit, resetForm } = useForm()
const { value, errorMessage } = useField('value', validateField)
const toast = useToast()

const stepOrder = ref(1)

function visibleSertMob() {
  visibleSert.value = true
  mobMenu.value = false
}


function validateField (value) {
  if (!value) {
    return 'City is required.'
  }
  return true
}

async function createSert () {
  const UID = uuidv4()
  const UIDS = UID.replaceAll('-', '')
  const token = {
    Amount: Number(valueSert.value * 100),
    OrderId: UIDS,
    // Password: 'z8ybza4e4awq0tl7',
    // TerminalKey: '1683478494845DEMO'
    Password: 'tp8c5kl9euj23vs5',
    TerminalKey: '1683478494845'
  }

  const tokenConcat = `${
    token['Amount'].toString() +
    token['OrderId'].toString() +
    token['Password'].toString() +
    token['TerminalKey'].toString()
  }`

  let encrypted = CryptoJS.SHA256(tokenConcat).toString()

  const fullMessege = {
    TerminalKey: '1683478494845',
    Amount: Number(valueSert.value * 100),
    OrderId: UIDS,
    Token: encrypted,
    SuccessURL:
      'https://zhivayataiga.ru/thanks2?Success=${Success}&ErrorCode=${ErrorCode}&OrderId=${OrderId}&PaymentId=${PaymentId}&Amount=${Amount}',
    DATA: {
      Phone: '+71234567890',
      Name: `Сертификат № ${UIDS}`,
      Type: 2
    },
    Receipt: {
      Email: 'mmpcapital@mail.ru',
      Phone: '+79069314242',
      Taxation: 'osn',
      Payments: {
        Electronic: Number(valueSert.value * 100)
      },
      Items: [
        {
          Name: `Сертификат № ${UIDS}`,
          Price: Number(valueSert.value * 100),
          Quantity: 1.0,
          Amount: Number(valueSert.value * 100),
          Tax: 'none',
          MeasurementUnit: 'шт'
        }
      ]
    }
  }

  const { data } = await useFetch('https://securepay.tinkoff.ru/v2/Init', {
    method: 'POST',
    body: JSON.stringify(fullMessege),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  setTimeout(() => {
    window.open(data.value.PaymentURL, '_blank')
  }, 200)
}

const orderSetHeder = ref({
  product: {},
  master: {},
  time: {},
  user: {
    name: '',
    phone: ''
  }
})

const ghost = ref({
  id: '1111',
  attributes: {
    FIO: 'Не важно',
    Speciality: 'Мастер'
  }
})

const allTimes = ref([
  { name: '10:00', code: '1' },
  { name: '10:30', code: '2' },
  { name: '11:00', code: '3' },
  { name: '11:30', code: '4' },
  { name: '12:00', code: '5' },
  { name: '12:30', code: '6' },
  { name: '13:00', code: '7' },
  { name: '13:30', code: '8' },
  { name: '14:00', code: '9' },
  { name: '14:30', code: '10' },
  { name: '13:30', code: '11' },
  { name: '15:00', code: '12' },
  { name: '15:30', code: '13' },
  { name: '16:00', code: '15' },
  { name: '16:30', code: '16' },
  { name: '17:00', code: '17' },
  { name: '17:30', code: '18' },
  { name: '18:00', code: '19' },
  { name: '18:30', code: '20' },
  { name: '19:00', code: '21' },
  { name: '19:30', code: '22' },
  { name: '20:00', code: '23' },
  { name: '20:30', code: '24' },
  { name: '21:00', code: '25' }
])

// setOrderUser

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

const mobMenu = ref(false)

function getURL (url) {
  mobMenu.value = false
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

const activeTab2 = ref(0)

function setActiveTab2 (id) {
  activeTab2.value == id ? (activeTab2.value = 0) : (activeTab2.value = id)
}

const zakaz = ref(null)

//ALL_SERVICES

const { result: allS } = useQuery(ALL_SERVICES)
const allServices = computed(() => allS.value?.products?.data ?? [])

//ALL_MASTERS

function setProduct (data) {
  const cabinets = data.attributes.crm_cabinets.data.map(x => Number(x.id))
  console.log(cabinets)
  orderSetHeder.value.product = {
    id: data.id,
    price: data.attributes.Price,
    name: data.attributes.Name,
    cabinets: cabinets,
    timer: data.attributes.UnitValue
  }
  activeTab.value = 0
}

function setMaster (data) {
  orderSetHeder.value.master = data
  activeTab.value = 0
}

function setMaster2 () {
  const masters = allMasters.value.map(x => x.id)
  var rand = Math.floor(Math.random() * masters.length)
  console.log('randor', masters[rand])
  orderSetHeder.value.master = masters[rand]
  activeTab.value = 0
}

function setTimeOrder (data) {
  orderSetHeder.value.time = data
  activeTab.value = 0
}

// order

const getTimeOrder = ref({
  cabinets: [],
  start: '',
  end: ''
})

const { result: GSO } = useQuery(
  GET_SETTING_ORDER,
  () => ({
    CABINET: orderSetHeder.value.product.cabinets,
    START: getTimeOrder.value.start,
    END: getTimeOrder.value.end
  }),
  {
    fetchPolicy: 'network-only'
  }
)
const allGSO = computed(() => GSO.value?.crmCabinets?.data ?? [])

const { result: allM } = useQuery(ALL_MASTERS)
const allMasters = computed(() => allM.value?.usersPermissionsUsers?.data ?? [])

watch(date, date => {
  const startDay = new Date(date)
  startDay.setHours(8)
  const endDay = new Date(date)
  endDay.setHours(21)
  getTimeOrder.value.end = new Date(endDay)
  getTimeOrder.value.start = new Date(startDay)
  const start = new Date(startDay)
  const end = new Date(endDay)

  setTimeout(() => {
    correctOrder(start, end, allGSO.value)
  }, 300)
})

const mapNotes = ref()
const mapNotesCOM = computed(() => mapNotes.value)

function correctOrder (start, stop, res) {
  // console.log('correctOrder', start, stop)
  const getNotes = []
  const allOrderDay = res

  // if select master
  if (orderSetHeder.value.master.length) {
    console.log('master select')
    allOrderDay.forEach(element => {
      const data = {
        cabinet: element.id,
        notes: []
      }
      element.attributes.user_records.data.forEach(n => {
        const note = {
          master: n.attributes.users_permissions_user.data.id,
          time: {
            start: n.attributes.Time,
            end: n.attributes.TimeEnd
          }
        }
        data.notes.push(note)
        console.log('element', note)
      })
      getNotes.push(data)
    })
  } else {
    console.log('master not select')
    allOrderDay.forEach(element => {
      const data = {
        cabinet: element.id,
        notes: []
      }
      element.attributes.user_records.data.forEach(n => {
        const note = {
          master: n.attributes.users_permissions_user.data.id,
          time: {
            start: n.attributes.Time,
            end: n.attributes.TimeEnd
          }
        }
        data.notes.push(note)
        console.log('element', note)
      })
      getNotes.push(data)
    })
  }

  mapNotes.value = getNotes
  console.log('correctOrder ok', getNotes)
}

function validTime (time) {
  const hour = String(time).split(':')[0]
  const min = String(time).split(':')[1]
  // console.log(hour, min)
  return time
}

const thank = ref(false)
const thank2 = ref(false)

const { mutate: sendNote, onDone: sendNoteDone } =
  useMutation(CREATE_CLIENT_NOTE)

sendNoteDone(res => {
  console.log(res)
  thank.value = true
  GetTelegram()
  setTimeout(() => {
    orderSetHeder.value = {
      product: {},
      master: {},
      time: {},
      user: {
        name: '',
        phone: ''
      }
    }
    stepOrder.value = 1
    thank.value = false
    store.setOpenOrder()
  }, 5000)
})

async function GetTelegram () {
  const fullMessege =
    `Запись с сайта` +
    '%0A' +
    'Телефон:  ' +
    orderSetHeder.value.user.phone +
    '%0A' +
    'Имя: ' +
    orderSetHeder.value.user.name

  await fetch(
    `https://api.telegram.org/bot5912599314:AAGvFnoKbnL8Dm5C9srfDqeYY2BXvJkeZ40/sendMessage?chat_id=-840169070&text=${fullMessege}&parse_mode=html`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      }
    }
  ).then(res => {
    if (res.status == '200') {
      console.log(resetForm)
    }
    console.log(res)
  })
}

async function handlerSendReq () {
  const fullMessege =
    `Связаться с клиентом` +
    '%0A' +
    'Телефон:  ' +
    orderSetHeder.value.user.phone +
    '%0A' +
    'Имя: ' +
    orderSetHeder.value.user.name

  await fetch(
    `https://api.telegram.org/bot5912599314:AAGvFnoKbnL8Dm5C9srfDqeYY2BXvJkeZ40/sendMessage?chat_id=-840169070&text=${fullMessege}&parse_mode=html`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      }
    }
  ).then(res => {
    if (res.status == '200') {
      console.log('')
      thank2.value = true
      setTimeout(() => {
        stepOrder.value = 1
        thank2.value = false
      }, 5000)
    }
    console.log(res)
  })
}

//tinek pay

async function opalataTinek (UIDS, price, name) {
  const token = {
    Amount: Number(price * 100),
    OrderId: UIDS,
    Password: 'z8ybza4e4awq0tl7',
    TerminalKey: '1683478494845DEMO'
    // Password: 'tp8c5kl9euj23vs5',
    // TerminalKey: '1683478494845'
  }

  const tokenConcat = `${
    token['Amount'].toString() +
    token['OrderId'].toString() +
    token['Password'].toString() +
    token['TerminalKey'].toString()
  }`

  let encrypted = CryptoJS.SHA256(tokenConcat).toString()

  const fullMessege = {
    TerminalKey: '1683478494845DEMO',
    Amount: Number(price * 100),
    OrderId: UIDS,
    Token: encrypted,
    DATA: {
      Phone: '+71234567890',
      // Email: 'a@test.com',
      Name: name.toString(),
      Price: Number(price * 100),
      Master: '1',
      Usluga: '210'
    },
    Receipt: {
      Email: 'mmpcapital@mail.ru',
      Phone: '+79069314242',
      Taxation: 'osn',
      Payments: {
        Electronic: Number(price * 100)
      },
      Items: [
        {
          Name: name.toString(),
          Price: Number(price * 100),
          Quantity: 1.0,
          Amount: Number(price * 100),
          Tax: 'vat0',
          MeasurementUnit: 'шт'
        }
      ]
    }
  }

  const { data } = await useFetch('https://securepay.tinkoff.ru/v2/Init', {
    method: 'POST',
    body: JSON.stringify(fullMessege),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  setTimeout(() => {
    window.open(data.value.PaymentURL, '_blank')
  }, 200)

  console.log('fetch', data.value.PaymentURL)
}

function handlerSendNote () {
  const UID = uuidv4()
  const UIDS = UID.replaceAll('-', '')
  // start
  let time1 = orderSetHeder.value.time
  let h1 = String(time1.name).split(':')[0]
  let m1 = String(time1.name).split(':')[1]
  let timer1 = new Date(date.value)
  timer1.setHours(Number(h1))
  timer1.setMinutes(Number(m1))

  let timer2 = new Date(date.value)
  let valueService = orderSetHeder.value.product.timer

  let hourService = parseInt(valueService / 60)

  let minService = Number(valueService - hourService * 60)

  timer2.setHours(Number(hourService) + Number(h1))
  timer2.setMinutes(Number(minService) + Number(m1))

  const servicesInNote = []
  servicesInNote.push(Number(orderSetHeder.value.product.id))
  const noteData = {
    DATE: timer1,
    NOTE: `Заказ с сайта # ${UIDS}`,
    DATEEND: timer2,
    SERVICES: servicesInNote,
    FIO: orderSetHeder.value.user.name,
    PHONE: orderSetHeder.value.user.phone,
    CABINET: Number(3),
    MASTER: Number(orderSetHeder.value.master)
  }

  ///////////////////

  sendNote({
    DATE: timer1,
    NOTE: `Заказ с сайта # ${UIDS}`,
    DATEEND: timer2,
    SERVICES: servicesInNote,
    FIO: orderSetHeder.value.user.name,
    PHONE: orderSetHeder.value.user.phone,
    CABINET: Number(3),
    MASTER: Number(orderSetHeder.value.master)
  })
  opalataTinek(
    UIDS,
    orderSetHeder.value.product.price,
    orderSetHeder.value.product.name
  )
}
</script>

<style></style>
