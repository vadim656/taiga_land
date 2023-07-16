<template>
    <div>
        <pre>{{ props.order }}</pre>
    </div>
</template>

<script setup>
const props =defineProps({
    order: Object
})
</script>

<style lang="scss" scoped>

</style>