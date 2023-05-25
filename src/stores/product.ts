import { defineStore } from 'pinia';
import Product from '@/types/ProductType';
import getProductList from '@/core/getProductList';
import { setCookies } from '@/core/useCookies';


const useProductStore = defineStore('product', {
  state: () => {
    const list = getProductList(10);
    setCookies(list);

    return {
      productsList: list
    }
  },

  getters: {
    getFavorites({ productsList }) {
      console.log(productsList);
      return productsList.filter(product => product.isFavorite)
    },

    getAddedToDeals({ productsList }) { return productsList.filter(product => product.isAddedToDeals) },

    getNotPaidDeals({ productsList }) { return productsList.filter(product => product.isAddedToDeals && !product.isPaid) },

    getAuctions({ productsList }) { return productsList.filter(product => product.type == "auction") },

    getDirectDeals({ productsList }) { return productsList.filter(product => product.type == "directDeals") },

    getProductById({ productsList }) {
      return (id: number) => productsList.find(product => product.id == id);
    }
  },

  actions: {
    toggleFavorite(id: number): void {
      const product = this.getProductById(id);
      if (!product) return;
      product.isFavorite = !product?.isFavorite;
      setCookies(this.productsList);
    },
    activePaymentStatus(id: number): void {
      const product = this.getProductById(id);
      if (!product) return;
      product.isPaid = true;
      setCookies(this.productsList);
    },
    addDeal(id: number): void {
      const product = this.getProductById(id);
      if (!product) return;
      product.isAddedToDeals = true;
      setCookies(this.productsList);
    }
  }
});

export default useProductStore;
