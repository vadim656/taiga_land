<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full min-h-screen gap-12"
  >
    <span class="text-2xl">Ваш заказ</span>
    <div class="flex flex-col gap-2" v-if="viewCheck">
      <span
        >Имя:<br />
        <b>{{ allGSO.attributes.FIO }}</b></span
      >
      <span
        >Телефон:<br />
        <b>{{ allGSO.attributes.Phone }}</b></span
      >
      <span
        >Услуга:<br />
        <b>{{
          allGSO.attributes.tovary_i_uslugis.data[0].attributes.Name
        }}</b></span
      >
      <span
        >Мастер:<br />
        <b>{{
          allGSO.attributes.users_permissions_user.data.attributes.FIO
        }}</b></span
      >
      <span
        >Запись на:<br />
        <b>{{
          dayjs(allGSO.attributes.Time).format('DD.MM.YYYY : HH:mm')
        }}</b></span
      >
    </div>

    <button @click="$router.push('/')" type="">Вернуться на главную</button>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
definePageMeta({
  layout: 'default'
})
const dayjs = useDayjs()
const route = useRoute()




const { result: Check, onResult: updateStatus } = useQuery(
  gql`
    query GET_ORDER($UID: String) {
      userRecords(filters: { OrderID: { eq: $UID } }) {
        data {
          id
          attributes {
            FIO
            Phone
            Time
            TimeEnd
            OrderID
            users_permissions_user {
              data {
                attributes {
                  FIO
                }
              }
            }
            tovary_i_uslugis {
              data {
                id
                attributes {
                  Name
                }
              }
            }
          }
        }
      }
    }
  `,

  () => ({
    UID: route.query.OrderId
  }),
  {
    fetchPolicy: 'network-only'
  }
)
const allGSO = computed(() => Check.value?.userRecords?.data[0] ?? [])

const viewCheck = ref(false)

updateStatus(res => {
  viewCheck.value = true
  console.log('updateStatus', res.data.userRecords.data[0].id)
  updateUserRecord({
    ID: res.data.userRecords.data[0].id
  })
})

const { mutate: updateUserRecord } = useMutation(gql`
  mutation updateUserRecord($ID: ID!) {
    updateUserRecord(id: $ID, data: { statusPay: 200 }) {
      data {
        id
      }
    }
  }
`)

onMounted(() => {
  console.log('rur', route.query.OrderId)
})
</script>

<style scoped></style>
