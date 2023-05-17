<script setup lang="ts">
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const productList = productStore.getFavorites;

</script>

<template>
  <h1>Favorites</h1>
  <UiProductList :productList="productList" />
</template>