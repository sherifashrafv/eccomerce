<template>
  <div>
    <Carousel />
    <BestSelers />
    <MostPopular />
    <Content />
    <FollowUs />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel/Carousel.vue";
import BestSelers from "../components/BestSellers/BestProduct.vue";
import MostPopular from "../components/MostPopular/Most.vue";
import Content from "../components/Content/Content.vue";
import FollowUs from "../components/FollowUs/FollowUs.vue";
export default {
  name: "HomeView",
  components: {
    Carousel,
    BestSelers,
    MostPopular,
    Content,
    FollowUs,
  },
};
</script>
<style scoped></style>
