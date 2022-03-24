<template>
  <div>
    <!-- LocalSection -->
    <section class="background-blue p-3">
      <div class="container">
        <div class="d-flex align-items-center flex-row justify-content-between">
          <div class="languages ms-4">
            <div class="dropdown">
              <button
                class="btn-custome dropdown-toggle d-flex flex-row gap-2 align-items-center text-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <p>{{ langugaes || "English " }}</p>
                <i class="fa-solid fa-caret-down text-white"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li
                  @click="setlocale('en')"
                  class="d-flex justify-content-center flex-row align-items-center gap-3"
                >
                  <div class="img">
                    <img src="../../assets/Flags/lang_English.png" alt="" />
                  </div>
                  <div class="lang">
                    <p>{{ $t("languages.English") }}</p>
                  </div>
                </li>
                <li
                  @click="setlocale('ar')"
                  class="arabic d-flex justify-content-center flex-row align-item-center"
                >
                  <div class="img">
                    <img src="../../assets/Flags/lang_عربي.png" alt="" />
                  </div>
                  <div class="lang-arabic">
                    <p>{{ $t("languages.Arabic") }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="deliver-icons text-white">
            <ul class="d-flex p-0 m-0 flex-row gap-2">
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.delve") }}</p>
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
              </li>
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.repeat") }}</p>
                <span>
                  <i class="fa-solid fa-repeat"></i>
                </span>
              </li>
              <!--  -->
              <li class="d-flex gap-2 flex-row">
                <p>{{ $t("Deleviery.repeat") }}</p>
                <span>
                  <i class="fa-solid fa-dollar-sign"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End -->
    <section class="search p-3">
      <div class="container">
        <div class="">
          <div class="d-flex flex-row gap-3 align-items-center">
            <!--  -->
            <div
              class="nav-info d-flex gap-1 flex-row justify-content-center align-items-center"
            >
              <router-link
                :to="`/${$i18n.locale}/shoppingCart`"
                tag="div"
                class="shopping-cart-link d-flex flex-column justify-content-center align-items-center"
              >
                <div>
                  <i class="fa-solid fa-basket-shopping text-center"></i>
                </div>
                <div>
                  <p class="text-center">
                    {{ $t("search-header.shopping-cart") }}
                  </p>
                </div>
              </router-link>
              <!-- user-access -->
              <router-link v-if="user" tag="h6" :to="`/${$i18n.locale}/SignUp`">
                <div
                  class="user-access d-flex flex-column justify-content-center align-items-center"
                >
                  <div>
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                  </div>
                  <h6 class="text-center">{{ $t("signUp.sigon") }}</h6>
                </div>
              </router-link>
              <!-- end USER ACCESS -->
              <div v-else @click="dropdown = !dropdown">
                <div class="position-relative">
                  <div
                    class="user-access d-flex flex-column justify-content-center align-items-center"
                  >
                    <div>
                      <i class="fa-solid fa-user"></i>
                    </div>
                    <p class="text-center">{{ $t("signUp.sigon") }}</p>
                  </div>
                  <Transition name="fade">
                    <div v-if="dropdown" class="admin-settings">
                      <div class="d-flex align-items-center gap-3">
                        <i class="fa-solid fa-gear"></i>
                        <h5 class="text">{{ $t("signUp.Settings") }}</h5>
                      </div>
                      <div class="border-bottom-black mt-2 mb-2"></div>
                      <!-- profile settings -->
                      <router-link
                        @click.native="reload()"
                        tag="div"
                        :to="{ name: 'Settings' }"
                        class="account-setting mb-2 text-decoration-none text-black"
                      >
                        <p class="settings">{{ $t("signUp.profile") }}</p>
                      </router-link>
                      <!-- End -->
                      <!-- Log Out -->
                      <div @click="logOut()" class="log-out">
                        <p>{{ $t("signUp.logout") }}</p>
                      </div>
                      <!-- END Out -->
                    </div>
                  </Transition>
                </div>
              </div>
              <!-- END -->
              <router-link tag="div" class="help" :to="`/${$i18n.locale}/Help`">
                <h6 class="text-center">{{ $t("search-header.help") }}</h6>
              </router-link>
            </div>
            <div class="input-search">
              <form class="d-flex flex-row">
                <input
                  type="submit"
                  :value="$t('search-header.buttonsearch')"
                  @click="getSearchVal()"
                />

                <input
                  type="text"
                  v-model="search"
                  :placeholder="$t('search-header.input-placeHolder')"
                />
              </form>
            </div>
            <router-link tag="div" class="logo" :to="`/${$i18n.locale}/`">
              <h5>
                {{ $t("search-header.logo") }}
              </h5>
              <span class="market">
                {{ $t("search-header.span-logo") }}
              </span>
            </router-link>
          </div>
        </div>
        <div class="links-nav mt-4">
          <div @click="openNav()" class="menu-icon">
            <i
              ref="icon"
              v-bind:class="[menu ? ' fa-solid fa-xmark' : 'fa-solid fa-bars']"
            ></i>
          </div>
          <Transition name="fade">
            <ul
              v-if="menu"
              class="list-unstyled flex-row-reverse justify-content-start d-flex flex-wrap flex-row gap-3"
            >
              <router-link
                :title="link.name"
                class="route-links"
                :to="`/${$i18n.locale}/${link.path}`"
                tag="li"
                v-for="(link, i) in links"
                :key="i"
                exact
              >
                {{ link.name }}
              </router-link>
            </ul>
          </Transition>
        </div>
      </div>
    </section>
    <!--  -->
    <div class="border-bottom"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header-Vue",
  data() {
    let lang = localStorage.getItem("lang").toUpperCase();
    return {
      langugaes: lang || "English",
      links: this.$t("links"),
      dropdown: false,
      search: "",
      menu: false,
      // user: true,
    };
  },
  methods: {
    ...mapActions(["addToCart", "redirectTo", "logOut"]),
    setlocale(locale) {
      console.log(locale);
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      window.location.reload();
    },
    getSearchVal() {
      localStorage.setItem("search-val", JSON.stringify(this.search));
      this.redirectTo({ val: "Search" });
    },
    reload() {
      window.location.reload();
    },
    openNav() {
      this.menu = !this.menu;
    },
  },
  computed: {
    ...mapState(["user", "basketCart"]),
  },
  mounted() {
    let users = localStorage.getItem("user-info");
    if (users) {
      this.$store.state.user = false;
    } else {
      this.$store.state.user = true;
    }
  },
};
</script>
<style scoped>
.deliver-icons ul li p {
  font-size: 15px;
}
.logo span {
  color: black !important;
}
li.route-links.router-link-exact-active.router-link-active {
  color: #1e8bc3;
}
.admin-settings {
  background: #ddd;
  position: absolute;
  top: 100%;
  z-index: 33333;
  padding: 15px;
  /* border-radius: 7px; */
  left: 0;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-style: dashed solid solid solid;
  border-width: 1px;
}
.border-bottom-black {
  background: black;
  width: 100%;
  height: 1px;
}
.user-access div i {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.883);
}
.log-out {
  transition: 0.3s ease-in-out !important;
}
.log-out:hover {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateX(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translatex(-20%);
}
</style>
