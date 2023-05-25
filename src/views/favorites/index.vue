<script setup lang="ts">
import { storeToRefs } from 'pinia'
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const { getFavorites } = storeToRefs(productStore);


</script>

<template>
  <h1>Favorites</h1>
  <UiProductList :productList="getFavorites" pageType="favorites" />
</template>