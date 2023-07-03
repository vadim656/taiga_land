<template>
  <div class="w-screen h-screen">
    <!-- <pre> {{ response }}</pre> -->
    <div class="w-full h-full flex flex-col gap-12 items-center justify-center">
      lk - {{ jwt }}
      <pre>{{ user }}</pre>
      <div class="flex flex-col gap-4">
        <input type="text" v-model="userLogin.identifier" />
        {{ userLogin.identifier }}
        <input type="text" v-model="userLogin.password" />
        {{ userLogin.password }}
        <button @click="onLogin" class="bg-green-300 p-3">Войти</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'lk'
})

const userLogin = ref({
  identifier: '',
  password: ''
})

const jwt = ref()

const user = useStrapiUser()

const { login } = useStrapiAuth()
const { onLogin: LoginApollo } = useApollo()
// const router = useRouter()
const onLogin = async () => {
  await login({
    identifier: userLogin.value.identifier,
    password: userLogin.value.password
  })
    .then(res => {
      console.log(res)
      jwt.value = res.jwt
      LoginApollo(res.jwt)
    })

    .catch(err => alert(err))
}
</script>

<style lang="scss" scoped></style>
