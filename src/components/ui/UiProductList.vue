<script lang="ts">
const defaultProduct: Array<Product> = [{
  id: 10000,
  type: "auction",
  name: "Бревно",
}];
</script>

<script setup lang="ts">
import UiProductCard from './UiProductCard.vue';
import Product from '@/types/ProductType';

interface Props {
  productList: Product[]
}

const props = withDefaults(defineProps<Props>(), {
  productList: () => defaultProduct
})

</script>

<template>
  <ul class="product__list">
    <UiProductCard v-for="product in props.productList" :key="product.id" :title="product.name" :deal-type="product.type"
      :isFavorite="product.isFavorite" />
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