<template>
  <header>
    <LayoutHeader />
  </header>
  <main>
    <div class="container container_filter">
      <LayoutFilter />
      <LayoutSearch />
    </div>

    <RouterView />
  </main>
</template>

<script setup lang="ts">
import LayoutHeader from '@/components/layout/LayoutHeader.vue';
import LayoutFilter from '@/components/layout/LayoutFilter.vue';
import LayoutSearch from '@/components/layout/LayoutSearch.vue';

</script>

<style>
.container_filter {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;
}
</style>