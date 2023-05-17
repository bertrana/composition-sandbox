<script setup lang="ts">
import UiProductCard from './UiProductCard.vue';
import getProductList from '@/core/getProductList';
import Product from '@/types/ProductType';

const products: Array<Product> = getProductList(10);

</script>

<template>
  <ul class="product__list">
    <UiProductCard v-for="product in products" :key="product.id" :title="product.name" :deal-type="product.type" />
  </ul>
</template>

<style>
.product__list {
  display: flex;
  flex-wrap: wrap;

  gap: 40px;

  margin: 0;
  padding: 0;

  list-style: none;
}
</style>