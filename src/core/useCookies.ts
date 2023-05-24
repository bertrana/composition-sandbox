import Product from '@/types/ProductType';

export const getInfoFromCookies = function (): Product[] {
  console.log("get from cookie");

  let arr: Product[] = []
  const data = document.cookie.split(';');
  for (let i = 0; i < data.length; i++) {
    const productData = data[i].slice(data[i].indexOf('=') + 1)
    arr.push(JSON.parse(productData));
    console.log(arr);
  }
  return arr;
}

export const setChangesToCookies = function (id: number, product: Product) {
  document.cookie = id + '=' + JSON.stringify(product);
  console.log("set new changes");
}

