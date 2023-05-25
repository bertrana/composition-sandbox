<script lang="ts">
import Product from '@/types/ProductType';

const defaultProduct: Array<Product> = [{
  id: 10000,
  type: "auction",
  name: "Бревно",
  isFavorite: false
}];
</script>

<script setup lang="ts">
import UiProductCard from './UiProductCard.vue';

interface Props {
  productList: Product[],
  pageType: string
}

const props = withDefaults(defineProps<Props>(), {
  productList: () => [],
  pageType: "stock"
})


</script>

<template>
  <ul class="product__list">
    <UiProductCard v-for="product in productList" :key="product.id" :title="product.name" :deal-type="product.type"
      :product-id="product.id" :isFavorite="product.isFavorite" :page-type="pageType" />
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