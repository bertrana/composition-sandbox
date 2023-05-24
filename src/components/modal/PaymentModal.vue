<script setup lang="ts">
import { useModal } from '@/core/useModal';
const { closeModal } = useModal();

const payment = () => {
  console.log("was paid");
  closeModal();
}
</script>

<template>
  <div class="modal-payment">
    <button @click="payment">I paid</button>
  </div>
</template>
