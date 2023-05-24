<script setup lang="ts">
import { RouterLink } from 'vue-router';
import UiButton from '../ui/UiButton.vue';
import { useModal } from '@/core/useModal';

interface HeaderLink {
  linkClass: string;
  title: string;
  path: string;
}

const headerLinks: HeaderLink[] = [
  {
    title: 'Favorites',
    path: '/favorites',
    linkClass: 'favorites',
  },
  {
    title: 'Stock',
    path: '/',
    linkClass: 'stock',
  },
  {
    title: 'Deals',
    path: '/deals',
    linkClass: 'deals',
  },
];

const { openModal, data } = useModal();

</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink v-for="(link, i) in headerLinks" :key="i" :to="link.path" :class="link.linkClass">
        {{ link.title }}
      </RouterLink>
    </nav>
    <UiButton class="modal__open-button" btnTitle="Show Modal" @wasClicked="openModal('deals')" />
  </div>
</template>

<style lang="scss">
header {
  position: relative;

  margin-bottom: 40px;

  .wrapper {
    display: flex;
    justify-content: space-between;

    margin-left: auto;
    padding-top: 60px;
  }

  &::before {
    content: "";

    position: absolute;

    width: 100%;
    height: 40px;

    background-color: #e0e3ee;
    border-radius: 0px 0px 10px 10px;
  }
}

nav {
  display: flex;
  justify-content: end;
}

nav a {
  position: relative;

  display: block;
  min-width: 86px;
  max-height: 50px;

  padding-top: 30px;
  padding-bottom: 7px;

  color: #2d3b87;
  text-decoration: none;
  text-align: center;

  border-radius: 10px;
}

nav a:active,
nav a:focus {
  background: #f4f5f9;
}

nav a::before {
  content: "";

  position: absolute;

  width: 20px;
  height: 20px;

  top: 6px;
  left: 33px;

  background-repeat: no-repeat;
}

nav a.stock::before {
  background-image: url("@/assets/icons/IconStock.svg");
}

nav a.favorites::before {
  background-image: url("@/assets/icons/IconFavorites.svg");
}

nav a.deals::before {
  background-image: url("@/assets/icons/IconDeals.svg");
}
</style>
