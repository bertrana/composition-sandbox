<script setup lang="ts">
const props = defineProps({
  btnType: String //addToDeal, toPay, wasPaid
});


</script>

<template>
  <button class="button">Добавить в сделки</button>
</template>

<style>
.button {
  min-height: 40px;
  width: 222px;

  padding: 0;

  text-align: center;

  background: #F4F5F9;
  border: none;
  border-radius: 10px;
}

.button:hover {
  cursor: pointer;

  background: #E0E3EE;
}
</style>