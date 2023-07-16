// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "TAIGA",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
        },
      ],
      script: [
        { src: "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js" },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js",
        },
      ],
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/apollo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/strapi",
    "dayjs-nuxt"
  ],
  dayjs: {
    locales: ["ru"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "ru",
    defaultTimezone: "Russia/Moscow",
  },
  runtimeConfig: {
    public: {
      graphqlURL: "https://api.zhivayataiga.ru/graphql",
      strapiURL: "https://api.zhivayataiga.ru",
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/md-dark-indigo/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  strapi: {
    url: "https://api.zhivayataiga.ru",
    prefix: "/api",
    version: "v4",
    cookie: {
      sameSite: "strict",
    },
    cookieName: "strapi_jwt",
  },
  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        httpEndpoint: "https://api.zhivayataiga.ru/graphql",
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },
  build: {
    transpile: ["primevue"],
  },
});
