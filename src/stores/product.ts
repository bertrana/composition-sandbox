import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Product from '@/types/ProductType';
import getProductList from '@/core/getProductList';

const useProductStore = defineStore('product', {
  state: () => {
    return {
      productsList: getProductList(10)
    }
  },

  getters: {
    getFavorites({ productsList }) { return productsList.filter(product => product.isFavorite) },

    getAddedToDeals({ productsList }) { return productsList.filter(product => product.isAddedToDeals) },

    getAuctions({ productsList }) { return productsList.filter(product => product.type == "auction") },

    getDirectDeals({ productsList }) { return productsList.filter(product => product.type == "directDeals") },

    getProductById({ productsList }) {
      return (id: number) => productsList.find(product => product.id == id);
    }
  },

  actions: {
    toggleFavorite(id: number): void {
      const product = this.productsList.find(product => product.id == id);
      console.log(`product ${product} with id ${id}`);
      console.log(this.productsList);
      if (!product) return;
      product.isFavorite = !product?.isFavorite;
      console.log(`new in store ${product.isFavorite}`)
    }
  }
});

export default useProductStore;
