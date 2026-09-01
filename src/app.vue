<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useType } from './composables/useType'

let flag = useType()
let layoutName = flag.isMobiFlag ? 'mobile' : 'default'
</script>
