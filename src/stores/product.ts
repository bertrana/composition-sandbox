import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Product from '@/types/ProductType';
import getProductList from '@/core/getProductList';

const useProductStore = defineStore('product', {
  state: () => ({
    productsList: getProductList(10)
  }),

  getters: {
    getFavorites({ productsList }) { return productsList.filter(product => product.isFavorite) },

    getAddedToDeals({ productsList }) { return productsList.filter(product => product.isAddedToDeals) },

    getAuctions({ productsList }) { return productsList.filter(product => product.type == "auction") },

    getDirectDeals({ productsList }) { return productsList.filter(product => product.type == "directDeals") }
  }




});

export default useProductStore;
