<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/CustomeFooter/Footer-Custom.vue";
import Header from "../components/CustomeHeader/Custome.vue";
export default {
  name: "Default-Custome",
  components: {
    Footer,
    Header,
  },
};
</script>
<style scoped></style>
