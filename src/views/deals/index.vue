<script setup lang="ts">
import { storeToRefs } from 'pinia';
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const { getAddedToDeals } = storeToRefs(productStore);

</script>

<template>
  <h1>Deals</h1>
  <UiProductList :productList="getAddedToDeals" pageType="deals" />
</template>