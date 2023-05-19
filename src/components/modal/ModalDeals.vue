<script setup lang="ts">
import { ref } from 'vue';
import UiProductList from '@/components/ui/UiProductList.vue';
import useProductStore from '@/stores/product';

const props = defineProps({
  openModal: Boolean
})

const emit = defineEmits(['closeModal'])

const productStore = useProductStore();
const productList = productStore.getAddedToDeals;


</script>

<template>
  <div class="modal__overlay" v-if="props.openModal">
    <div class="modal">
      <h2 class="modal__header">Modal page</h2>
      <UiProductList :productList="productList" pageType="deals" />
      <button @click="$emit('closeModal')">Close</button>
    </div>
  </div>
</template>

<style lang="scss">
.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: #e0e3ee7c;
  // opacity: 0.5;
}

.modal {
  width: 500px;
  height: 600px;

  position: absolute;
  top: 0;
  right: 0;

  background: #fff;
  opacity: 1;
  border: 1px solid #E0E3EE;
  z-index: 2;
}
</style>