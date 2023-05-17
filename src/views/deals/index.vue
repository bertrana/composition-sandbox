<script setup lang="ts">
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const productList = productStore.getAddedToDeals;
</script>

<template>
  <h1>Deals</h1>
  <UiProductList :productList="productList" />
</template>