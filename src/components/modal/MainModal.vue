<script setup lang="ts">
import DealsModal from './DealsModal.vue';
import PaymentModal from './PaymentModal.vue';
import { useModal } from '@/core/useModal';

const { data, closeModal } = useModal();

const modals = {
  deals: DealsModal,
  payment: PaymentModal
}

if (!Object.hasOwn(modals, data.modalType)) {
  console.log("problem");
  data.modalType = "deals";
}

</script>

<template>
  <div class="modal__overlay" v-if="data.isOpen" @click.self="closeModal">
    <div class="modal">
      <div class="modal__header">
        <h2>Modal {{ data.modalType }} page</h2>
        <button @click="closeModal">Close</button>
      </div>
      <component :is="modals[data.modalType]"></component>
    </div>
  </div>
</template>

<style lang="scss">
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.modal {
  box-sizing: border-box;

  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 400px);

  height: 500px;
  width: 800px;

  padding: 20px;

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 75px;
  ;
}

.modal__header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}
</style>
