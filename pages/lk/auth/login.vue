<template>
  <div class="w-full h-full flex flex-col gap-12 items-center justify-center">
    <div class="flex flex-col gap-4">
      <span class="p-float-label">
        <InputText id="username" v-model="userLogin.identifier" />
        <label for="username">Логин</label>
      </span>
      <span class="p-float-label">
        <InputText id="pass" v-model="userLogin.password" />
        <label for="pass">Пароль</label>
      </span>

      <button @click="onLogin" class="bg-green-500 p-3 rounded-md">
        Войти
      </button>
    </div>
  </div>
</template>

<script setup>
import { userInfo } from '@/store'
definePageMeta({
  layout: 'auth'
})

const store = userInfo()
const userLogin = ref({
  identifier: '',
  password: ''
})
const router = useRouter()
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
      store.setUser(res)
      jwt.value = res.jwt
      LoginApollo(res.jwt)
      setTimeout(() => {
        router.push('/lk/account')
      }, 500);

    })

    .catch(err => alert(err))
}
</script>

<style lang="scss" scoped></style>
