<script setup>
import { useRouter, useRoute } from 'vue-router'
import Header from './components/Header.vue'

const router = useRouter();
const route = useRoute();

</script>

<template>
  <Header></Header>
<router-view></router-view>
</template>

<style>

</style>
