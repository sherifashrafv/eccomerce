<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const defaultlayout = "default";
export default {
  name: "App",
  data() {
    return {
      isLoading: false,
    };
  },
  create() {},
  methods: {
    onWindowLoad() {},
  },
  computed: {
    layout() {
      return this.$route.meta.layout || defaultlayout + "-layout";
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800&display=swap");
body,
html {
  font-family: "Cairo", sans-serif;
}
.layout {
  background: red;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>
