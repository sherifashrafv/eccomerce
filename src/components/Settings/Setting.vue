<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="side-bar col-lg-3 col-md-3 col-sm-12">
          <div
            class="box-side d-flex flex-column justify-content-center align-items-center"
          >
            <div>
              <ul
                class="list-unstyled d-flex column flex-column align-items-center gap-3 justify-content-center"
              >
                <router-link
                  tag="li"
                  role="button"
                  class="text-white"
                  v-for="(list, i) in $t('settings')"
                  :key="i"
                  :to="`${list.path}`"
                  exact
                >
                  <span>{{ list.title }}</span>
                </router-link>
              </ul>
            </div>
            <div role="button" class="text-white logout" @click="logOut()">
              Log Out
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Setting-routers",
  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>

<style lang="scss" scoped>
.side-bar.col-lg-3.col-md-3.col-sm-12 {
  background: #22313f;
  height: auto;
}
.col-lg-3.col-md-6.col-sm-12 {
  padding-left: 0 !important;
}
.box-side {
  height: 100%;
}
li.text-white.router-link-exact-active.router-link-active {
  color: white !important;
  font-weight: bold;
}
li.text-white,
.logout {
  color: #7c7e7e !important;
  transition: 0.5s;
}
li.text-white:hover,
.logout:hover {
  color: white !important;
}
</style>
