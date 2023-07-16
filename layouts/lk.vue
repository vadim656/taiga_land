<template>
  <div class="relative overflow-x-auto inset-0">
    <nav class="fixed top-0 z-50 w-full bg-[#121212] border-b border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-[#121212]/70 focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <NuxtLink to="/" class="flex ml-2 md:mr-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
              />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"
                >TAIGA</span
              >
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div class="flex items-center gap-2 text-white">
                <div v-if="store.userData.user">
                  Бонусы: {{ store.userData.user.Bonus }}
                </div>
                <NuxtLink to="/lk/cart" class="p-2">
                  <i class="pi pi-shopping-cart"></i>
                </NuxtLink>
                <button @click="onLogout()">Выйти</button>
                <button
                  type="button"
                  class="flex text-sm bg-[#121212] rounded-full focus:ring-4 focus:ring-gray-600"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
                <!-- <span v-if="user"
                  >{{ user.getInfo.username }} || {{ role }}</span
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="pt-16 h-full min-h-screen bg-[#17161A] flex items-start">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { userInfo } from '@/store'
const store = userInfo()
const route = useRoute()
const router = useRoute()
const pageName = route.meta.title
const { logout } = useStrapiAuth()
const { onLogout: LogoutAppolo } = useApollo()
const onLogout = () => {
  logout()
  LogoutAppolo()
}
</script>
