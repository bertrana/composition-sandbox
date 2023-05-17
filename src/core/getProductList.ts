import Product from '@/types/ProductType';

const randomBoolean = function (): boolean {
  return Math.random() >= 0.5;
}

const randomProductCard = function (): Product {
  return {
    id: Math.floor(Math.random() * 10000),
    type: randomBoolean() ? "auction" : "direct",
    name: randomBoolean() ? "Брус" : "Палка",
    isFavourite: randomBoolean(),
    isAddedToDeals: randomBoolean(),
    isPaid: randomBoolean()
  };
}

const getProductList = function (num: number): Product[] {
  // Заменить генерацию рандомных элементов на запрос
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomProductCard());
  }
  console.log(arr);

  return arr;
}

export default getProductList;