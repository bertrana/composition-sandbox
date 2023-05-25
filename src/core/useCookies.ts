import Product from '@/types/ProductType';

export const getInfoFromCookies = function (): Product[] {
  if (!document.cookie) return [];

  const startIndex = document.cookie.indexOf('store=') + 6;
  const endIndex = document.cookie.indexOf(';', startIndex);
  const productData = document.cookie.slice(startIndex, endIndex > 0 ? endIndex : document.cookie.length);

  return JSON.parse(productData);
}

export const setCookies = (productList: Product[]) => document.cookie = 'store=' + JSON.stringify(productList);
