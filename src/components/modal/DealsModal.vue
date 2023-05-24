<script setup lang="ts">
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const productStore = useProductStore();
const productList = productStore.getAddedToDeals;

</script>

<template>
  <div class="modal-deals">
    <UiProductList :productList="productList" pageType="modal-deals" />
  </div>
</template>