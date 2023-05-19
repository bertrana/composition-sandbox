import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Product from '@/types/ProductType';
import getProductList from '@/core/getProductList';

const useProductStore = defineStore('product', {
  state: () => {
    return {
      productsList: getProductList(10)
      // dealsList: Array<Object>
    }
  },

  getters: {
    getFavorites({ productsList }) { return productsList.filter(product => product.isFavorite) },

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
    },
    activePaymentStatus(id: number): void {
      const product = this.getProductById(id);
      if (!product) return;
      product.isPaid = true;
    },
    addDeal(id: number): void {
      const product = this.getProductById(id);
      if (!product) return;
      product.isAddedToDeals = true;
    }
  }
});

export default useProductStore;
