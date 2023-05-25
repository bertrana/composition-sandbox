import Product from '@/types/ProductType';
import { getInfoFromCookies } from './useCookies';

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
  const dataFromCookies = getInfoFromCookies()

  if (!document.cookie || dataFromCookies.length === 0) {
    let arr: Product[] = [];

    for (let i = 0; i < num; i++) {
      arr.push(randomProductCard());
    }
    return arr;
  }
  return dataFromCookies;
}

export default getProductList;