<script setup lang="ts">
import UiProductCard from './UiProductCard.vue';
import getProductList from '@/core/getProductList';
import Product from '@/types/ProductType';

const products: Array<Product> = getProductList(10);
</script>

<template>
  <ul class="product__list">
    <li v-for="product in products" :key="product.id">
      <!-- <li> -->
      <UiProductCard />
    </li>
  </ul>
</template>