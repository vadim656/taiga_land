<template>
  <div>
    {{me}}
  </div>
</template>

<script setup>
import { ME } from '@/gql/LK'
definePageMeta({
  layout: 'lk'
})

const { result: me } = useQuery(ME)
</script>

<style ></style>
