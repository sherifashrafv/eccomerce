<template>
  <div class="header-custome p-5 w-auto">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-row justify-content-center">
          <ul
            class="social-media d-flex flex-row gap-2 align-items-center p-0 m-0 mt-0 p-0 gap-1 list-unstyled"
          >
            <li tag="li" v-for="(link, i) in $t('social')" :key="i">
              <a target="blank" :href="link.path">
                <span>
                  <i :class="`${link.icon}`"></i>
                </span>
              </a>
            </li>
            <li>
              <h4 class="text-white">{{ $t("folowUs") }}</h4>
            </li>
          </ul>
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
.social-media li a span i {
  font-size: 22px;
  color: #1e8bc3;
  padding: 6px 9px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
}
.social-media li a span i:hover {
  color: white;
  background: black;
}
</style>
