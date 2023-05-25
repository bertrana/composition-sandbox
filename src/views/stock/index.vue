<script setup lang="ts">
import { storeToRefs } from 'pinia';
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const { productsList } = storeToRefs(productStore);

</script>

<template>
  <h1>Stock</h1>
  <UiProductList :productList="productsList" pageType="stock" />
</template>