<script setup lang="ts">
import { computed } from 'vue';

import DealsModal from './DealsModal.vue';
import PaymentModal from './PaymentModal.vue';
import { useModal } from '@/core/useModal';

const { data, closeModal } = useModal();

const modals = {
  deals: DealsModal,
  payment: PaymentModal
}

const currentModal = computed(() => {
  if (!data.modalType) data.modalType = 'deals';
  const modalName = data.modalType as keyof typeof modals;
  return modals[modalName];
})

</script>

<template>
  <Teleport to="body">
    <div class="modal__overlay" v-if="data.isOpen" @click.self="closeModal">
      <div class="modal">
        <div class="modal__header">
          <h2>Modal {{ data.modalType }} page</h2>
          <button @click="closeModal">Close</button>
        </div>
        <component :is="currentModal"></component>
      </div>
    </div>
  </Teleport>
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

  overflow: auto;

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
