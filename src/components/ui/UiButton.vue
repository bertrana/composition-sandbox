<script setup lang="ts">

interface Props {
  btnTitle: string,
  btnClass: string
}

const props = defineProps({
  btnTitle: String,
  btnClass: String
});

const emit = defineEmits(['wasClicked']);

</script>

<template>
  <button class="button" :class="props.btnClass" @click="$emit('wasClicked')">{{ props.btnTitle }}</button>
</template>

<style lang="scss">
.button {
  min-height: 40px;
  width: 222px;

  padding: 0;

  text-align: center;

  background: #F4F5F9;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;

    background: #969dc3;
  }

  &_active {
    color: #fff;
    background: #69C57F;
  }

  &_disabled {
    color: #969DC3;

    background: #fff;
    border: 1px solid #E0E3EE;

    &:hover {
      cursor: initial;
      background: #fff;
    }
  }
}
</style>