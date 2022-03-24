<template>
  <div class="follow-Us p-3 mt-4">
    <div class="container">
      <div class="row">
        <div
          class="nav-bar d-flex flex-row justify-content-between align-items-center"
        >
          <ul
            class="social-media p-0 m-0 mt-0 p-0 gap-1 list-unstyled d-flex flex-row"
          >
            <li tag="li" v-for="(link, i) in $t('social')" :key="i">
              <a target="blank" :href="link.path">
                <span>
                  <i :class="`${link.icon}`"></i>
                </span>
              </a>
            </li>
            <li>
              <h4>{{ $t("folowUs") }}</h4>
            </li>
          </ul>
          <div
            class="d-flex gap-3 flex-row align-items-end justify-content-end"
          >
            <form class="d-flex flex-row">
              <input type="submit" :value="$t('joinUs.button')" />
              <input type="text" />
            </form>
            <div class="join-us d-flex-column">
              <div>
                <h4>{{ $t("joinUs.head") }}</h4>
              </div>
              <div>
                <h5>{{ $t("joinUs.descrip") }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Follow-Us",
};
</script>

<style scoped>
.follow-Us {
  background: white;
}
.social-media li a span i {
  font-size: 30px;
  color: black;
  transition: 0.5s ease-in-out;
}
.social-media li {
  padding: 5px;
  position: relative;
  z-index: 0;
}
.social-media li a::before {
  content: "";
  background: black;
  top: 0;
  left: 0;
  position: absolute;
  transition: 0.5s ease-in-out;
  width: 0%;
  height: 100%;
  z-index: -1;
}
.social-media li a span i:hover,
.social-media li a:hover::before {
  color: white;
  width: 100%;
}
 {
  color: white;
}
</style>
