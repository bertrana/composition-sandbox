<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFilter from '@/components/TheFilter.vue';
import TheSearch from '@/components/TheSearch.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <div class="container container--filter">
      <TheFilter></TheFilter>
      <TheSearch></TheSearch>
    </div>

    <RouterView />
  </main>
</template>
