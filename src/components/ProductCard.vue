<template>
  <div class="product-card">
    <div class="product-card__description">
      <div class="product-card__image"></div>
      <div class="product-card__text-wrapper"></div>
    </div>
    <div class="product-card__price-wrapper">
      <b>
        <slot class="product-card__price"></slot>
      </b>
      <table>
        <tr>
          <th>Количество</th>
          <th class="product-card__count"></th>
        </tr>
        <tr>
          <th>Стоимость за штуку</th>
          <th class="product-card__count"></th>
        </tr>
      </table>
    </div>
  </div>
</template>
