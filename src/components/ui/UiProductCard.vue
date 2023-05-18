<script lang="ts" setup>
import UiButton from './UiButton.vue';
import UiButtonFav from './UiButtonFav.vue';
import useProductStore from '@/stores/product';

interface Props {
  productId: number,
  title: string,
  dealType: string,
  isFavorite: boolean
}

const props = withDefaults(defineProps<Props>(), {
  productId: 10000,
  type: "auction",
  title: "Бревно",
  isFavorite: false
})

const changeFavorite = () => {
  console.log('EVENT')
  useProductStore().toggleFavorite(props.productId)
};

const dealType = props.dealType == "auction" ? "Аукцион" : "Прямые продажи";
</script>

<template>
  <li class="product-card">
    <img class="product-card__img" src="@/assets/images/card-image.png" alt="Card image" width="256" height="256">
    <div class="product-card__text-wrapper">
      <b class="product-card__deal-type">{{ dealType }}</b>
      <h3 class="product-card__title">Пиломатериалы {{ props.title?.toLowerCase() }}</h3>
      <p class="product-card__description">Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!
        Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !
        Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка
        бесплатно за наш счет.
        Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не
        соответствует заявленному качеству - бесплатно меняем его.</p>
    </div>
    <div class="product-card__price-wrapper">
      <b class="product-card__price">33000<span>₽</span></b>
      <table>
        <tr>
          <th>Количество</th>
          <th class="product-card__count"></th>
        </tr>
        <tr>
          <th>Стоимость за штуку</th>
          <th class="product-card__count">11000<span>₽</span></th>
        </tr>
      </table>
      <div class="product-card__btn-wrapper">
        <UiButton />
        <UiButtonFav @update:isActive="changeFavorite" :isActive="props.isFavorite" />
      </div>
    </div>
  </li>
</template>

<style>
.product-card {
  display: flex;
  flex-wrap: nowrap;

  gap: 20px;

  border: 1px solid #E0E3EE;
  border-radius: 20px;
}

.product-card__img {
  display: block;

  margin: 20px;
  margin-right: 0;
}

.product-card__text-wrapper {
  max-width: 536px;
  margin-top: 20px;
}

.product-card__price-wrapper {
  padding: 20px;

  border: 1px solid #E0E3EE;
  border-radius: 20px;
}

.product-card__btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
