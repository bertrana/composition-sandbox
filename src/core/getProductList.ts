import Product from '@/types/ProductType';

const randomBoolean = function (): boolean {
  return Math.random() >= 0.5;
}

const randomProductCard = function (): Product {
  return {
    id: Math.floor(Math.random() * 10000),
    type: randomBoolean() ? "auction" : "directDeals",
    name: randomBoolean() ? "Брус" : "Палка",
    isFavorite: randomBoolean(),
    isAddedToDeals: false,
    isPaid: false
  };
}

const getProductList = function (num: number): Product[] {
  // Заменить генерацию рандомных элементов на запрос
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomProductCard());
  }
  return arr;
}

export default getProductList;