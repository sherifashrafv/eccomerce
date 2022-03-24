<template>
  <div>
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
<script>
import NavBar from "../components/Header/NavBar.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Default-Vue",
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {
      spinner: false,
    };
  },
  create() {
    window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    onWindowLoad() {
      console.log("window load event");
    },
  },
};
</script>
<style scoped>
.overlay {
  width: 100%;
  background: #ddd;
  height: 100vh;
}
.spin {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
