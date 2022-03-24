import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketCart: [],
    user: null,
  },
  getters: {},
  mutations: {
    redirectTo(state, payload) {
      router.push({ name: payload });
    },
    addToCart: (state, product) => {
      const qP = state.basketCart.find((pro) => pro.id === product.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.basketCart.push(product);
        localStorage.setItem(
          "dataBasketCart",
          JSON.stringify(state.basketCart)
        );
        this.$swal("Good job!", "You are ready to start!", "success");
      } else {
        qP.quantity++;
        localStorage.setItem(
          "dataBasketCart",
          JSON.stringify(state.basketCart)
        );
      }
    },
    dataCart(state) {
      if (localStorage.getItem("dataBasketCart")) {
        state.basketCart = JSON.parse(localStorage.getItem("dataBasketCart"));
      } else {
        state.basketCart = localStorage.getItem("dataBasketCart");
      }
    },
    addCountity(state, idx) {
      const qP = state.basketCart.find((pro) => pro.id === idx);
      if (qP) {
        qP.quantity++;
        localStorage.setItem(
          "dataBasketCart",
          JSON.stringify(state.basketCart)
        );
      }
    },
    rQuantity(state, idx) {
      const qP = state.basketCart.find((pro) => pro.id === idx.idx);
      if (qP.quantity > 1 && qP) {
        qP.quantity--;
        localStorage.setItem(
          "dataBasketCart",
          JSON.stringify(state.basketCart)
        );
      } else if (qP.quantity <= 1 && qP) {
        state.basketCart.splice(idx.index, 1);
        localStorage.setItem(
          "dataBasketCart",
          JSON.stringify(state.basketCart)
        );
      }
    },
  },
  actions: {
    redirectTo({ commit }, payload) {
      commit("redirectTo", payload.val);
    },
    addToCart: async ({ commit }, product) => {
      await commit("addToCart", product);
    },
    logOut: function () {
      localStorage.removeItem("user-info");
      window.location.reload();
    },
    addQuantity: async ({ commit }, idx) => {
      await commit("addQuantity", idx);
    },
    removeQuantity: async ({ commit }, idx) => {
      await commit("removeQuantity", idx);
    },
  },
  modules: {},
});
