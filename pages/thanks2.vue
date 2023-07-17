<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full min-h-screen gap-12 pt-32"
  >
    <!-- sert -->
    <div ref="sert" class="p-4  bg-neutral-700 flex flex-col gap-12">
      <div class="w-full flex  items-start justify-center sm:justify-between gap-8 sm:gap-52">
        <img class="w-auto h-[60px] sm:h-[140px]" src="../assets/img/logo.png" alt="" />
        <img
          class="w-auto h-[60px] sm:h-[130px]"
          src="../assets/img/logo_siberika.png"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-4 justify-center items-center ">
        <span class="text-2xl sm:text-[46px] font-bold text-center sm:leading-[54px]"
          >Подарочный сертификат <br />
          на сумму</span
        >
        <span class="text-2xl sm:text-[46px] font-bold"
          >{{ initPrice($route.query.Amount) }} ₽</span
        >
      </div>
      <div class="flex flex-col gap-2 justify-center items-center">
        <span>+7(993) 324-42-42</span>
        <span>г.Краснодар, Пашковская 41/1</span>
      </div>
      <div class="flex flex-col gap-2 justify-center items-center">
        <span
          >№ <b>{{ $route.query.OrderId.slice(0, 6) }}</b></span
        >
        <span class="text-xs text-center"
          >Срок действия сертификата 6 месяцев с момента покупки</span
        >
      </div>
    </div>

    <button @click="downloadSert" class="px-3 py-2 bg-green-600 rounded-md" type="">Скачать</button>
    <button @click="$router.push('/')" type="">Вернуться на главную</button>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
import html2canvas from 'html2canvas'
definePageMeta({
  layout: 'default'
})

const route = useRoute()

const initPrice = price => {
  const pre = price * 0.01
  const done = pre.toLocaleString('ru-RU')
  return done
}

const { mutate: createSertAPI, onDone: GetTG } = useMutation(gql`
  mutation createProduct($N: String, $P: Float) {
    createProduct(
      data: {
        Name: $N
        Price: $P
        sertUsage: 0
        sertActive: true
        Unit: Shtuka
        group: 129
      }
    ) {
      data {
        id
      }
    }
  }
`)

GetTG(() => {
  GetTelegram()
})

async function GetTelegram () {
  const fullMessege =
    `Сертификат с сайта` +
    '%0A' +
    '№:  ' +
    route.query.OrderId +
    '%0A' +
    'Номинал: ' +
    Number(route.query.Amount * 0.01)

  await fetch(
    `https://api.telegram.org/bot5912599314:AAGvFnoKbnL8Dm5C9srfDqeYY2BXvJkeZ40/sendMessage?chat_id=-840169070&text=${fullMessege}&parse_mode=html`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      }
    }
  )
}

const sert = ref(null)
async function downloadSert () {
  console.log('doqnload')

  console.log('printing..')
  const el = sert.value

  const options = {
    type: 'dataURL'
  }
  const printCanvas = await html2canvas(el, options)

  const link = document.createElement('a')
  link.setAttribute('download', 'sertifikat_taiga.png')
  link.setAttribute(
    'href',
    printCanvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
  )
  link.click()

  console.log('done')
}

onMounted(() => {
  setTimeout(() => {
    if (route.query.Success == 'true') {
      console.log('true')
      createSertAPI({
        N: `Сертификат ${route.query.OrderId}`,
        P: Number(route.query.Amount * 0.01)
      })
    } else {
      console.log('false', route.query.Success)
    }
  }, 200)
})
</script>

<style scoped></style>
