<template>
  <div v-if="basketCart.length > 0">
    <div class="container">
      <div class="float-end">
        <button @click="deleteAll()" class="btn btn-danger">
          {{ $t("Delete.All") }}
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">الرقم</th>
            <th scope="col">السعر</th>
            <th scope="col">الاسم</th>
            <th scope="col">الخصائص</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in basketCart" :key="row.id">
            <th scope="row">{{ row.id }}</th>
            <td scope="row">{{ row.id }}</td>
            <td scope="row">{{ row.price }}</td>
            <td scope="row">{{ row.title }}</td>
            <td role="button" scope="row">
              <button
                @click="deletes(row)"
                class="btn btn-dark w-100 text-center"
              >
                {{ $t("Delete.once") }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="m-5">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h2>{{ $t("shopping-cart.empty") }}</h2>
      </div>
      <div>
        <img src="../../assets/Cart/68b7acd6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-Cart",
  methods: {
    deletes(row) {
      const exisist = JSON.parse(localStorage.getItem("dataBasketCart"));
      exisist.splice(row, 1);
      localStorage.setItem("dataBasketCart", JSON.stringify(exisist));
      window.location.reload();
    },
    deleteAll() {
      localStorage.removeItem("dataBasketCart");
      window.location.reload();
    },
  },
  data() {
    return {
      basketCart: [],
      inBasket: false,
    };
  },
  async mounted() {
    let basket = localStorage.getItem("dataBasketCart");
    if (basket) {
      this.basketCart = JSON.parse(basket);
      this.inBasket = true;
    } else {
      this.inBasket = false;
      console.log("no");
    }
  },
};
</script>

<style></style>
