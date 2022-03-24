<template>
  <div class="header-custome p-5 w-auto">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-row justify-content-center">
          <router-link tag="div" class="logo" :to="`/${$i18n.locale}/Home`">
            <h5>
              {{ $t("search-header.logo") }}
            </h5>
            <span class="market">
              {{ $t("search-header.span-logo") }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header-Custome",
};
</script>
<style scoped>
.header-custome {
  background: #22313f;
}
.logo h5 {
  font-size: 25px;
  color: #1e8bc3;
}
.logo {
  position: relative;
  text-align: center;
}
.logo span {
  position: absolute;
  top: 20px;
  left: 34px;
  color: white;
  font-size: 23px;
}
</style>
