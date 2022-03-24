<template>
  <div class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div
            class="image-main d-flex justify-content-center flex-column align-items-center"
          >
            <div class="image-product w-100">
              <img
                v-img:group
                class="w-100 rounded"
                :src="product.image"
                alt=""
              />
            </div>
            <div class="m-3 d-flex flex-row gap-2 align-items-center">
              <div v-for="(img, i) in product.images" :key="i">
                <img
                  v-img:group
                  class="imag-slider rounded"
                  :src="img.src"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div
            class="h-100 d-flex flex-column justify-content-center align-items-end p-2"
          >
            <div class="info">
              <div class="head">
                <h4>{{ product.title }}</h4>
              </div>
              <div class="price mt-3 justify-content-end gap-2 d-flex flex-row">
                <span>{{ product.currency }}</span>
                <div>
                  <h4>
                    {{ product.price }}
                  </h4>
                </div>
                <div>
                  <h4>
                    <del style="color: red">{{ product.del }}</del>
                  </h4>
                </div>
                <div class="rating">
                  <star-rating
                    :show-rating="false"
                    :rating="3.5"
                    :rtl="true"
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    active-color="#f39c12"
                    v-bind:star-size="15"
                  >
                  </star-rating>
                </div>
              </div>
              <div class="details mt-2">
                <h5>:التفاصيل</h5>
                <div class="body mt-2">
                  <p class="">{{ product.details }}</p>
                </div>
              </div>
              <div
                class="quantity mt-2 align-items-center justify-content-end gap-2 d-flex flex-row"
              >
                <div class="d-flex flex-row gap-2 align-items-center">
                  <button @click="addCountity(product)" class="btn btn-dark">
                    +
                  </button>
                  <div>{{ product.quantity }}</div>
                  <button class="btn btn-success">-</button>
                </div>
                <!-- <div class="button w-100">
                  <button  class="add-button">
                    +
                  </button>
                  <span>{{ product.quantity }}</span>
                  <button
                    
                    class="minus-button"
                  >
                    -
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  name: "Products-View",
  computed: {},
  methods: {
    addCountity(product) {
      product.quantity += 1;
      // let prod = localStorage.getItem("dataBasketCart");
      // console.log(JSON.parse(prod)[0]);
      // localStorage.setItem("dataBasketCart", product);
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      product: [],
    };
  },
  async mounted() {
    axios.get(`http://localhost:3000/products/${this.id}`).then((response) => {
      this.product = response.data;
    });
  },
  components: {
    StarRating,
  },
};
</script>
<style scoped>
.image-main {
  width: 100%;
}
.imag-slider {
  width: 100px;
}
.info {
  height: fit-content !important;
}
.error-box {
  width: 550px;
  height: 350px;
  margin: auto;
  text-align: center;
}
.home-page {
  color: red;
}
</style>
