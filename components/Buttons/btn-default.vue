<template>
  <button class="px-4 py-3 rounded-md w-full flex justify-center">
    <div class="flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>

      <slot name="title"></slot>
    </div>
  </button>
</template>
