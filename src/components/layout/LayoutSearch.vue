<template>
  <div class="search">
    <input type="search" id="search" placeholder="Поиск" />
    <label class="visually-hidden" for="search">Поиск</label>
    <button class="" type="button">Искать</button>
  </div>
</template>

<style scoped>
.search {
  position: relative;

  color: #2d3b87;
  font-size: 15px;
}

.search input {
  padding: 16px 52px 16px 20px;

  border: 1px solid #e0e3ee;
  border-radius: 10px;
}

.search button {
  content: "";

  position: absolute;
  top: 4px;
  right: 4px;

  width: 40px;
  height: 40px;

  background-color: #2d3b87;
  background-image: url("@/assets/icons/IconSearch.svg");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 10px;

  font-size: 0;
}

.search button:hover {
  background-color: #969dc3;
}
</style>
