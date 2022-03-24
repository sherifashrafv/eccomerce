<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="footer-back w-100">
            <div class="box-markQuestion rounded p-3">
              <div
                class="d-flex flex-row justify-content-center gap-2 align-items-center"
              >
                <div class="head d-flex align-items-center flex-column">
                  <div>
                    <h4 class="text-black">
                      {{ $t("helperStation.station") }}
                    </h4>
                  </div>
                  <div>
                    <h5 class="text-black">
                      {{ $t("helperStation.Do You Need") }}
                    </h5>
                  </div>
                </div>
                <div class="mark-question">
                  <span class="text-black"
                    ><i class="fa-solid fa-question"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column mt-3">
            <div class="head">
              <router-link
                class="text-decoration-none text-white"
                :to="`/${$i18n.locale}/help`"
              >
                <h5>{{ $t("helperStation.download") }}</h5>
              </router-link>
            </div>
            <ul
              class="social-media mt-2 p-2 m-0 mt-0 p-0 gap-2 list-unstyled d-flex flex-row justify-content-end"
            >
              <li tag="li" v-for="(link, i) in $t('devices')" :key="i">
                <a target="blank" :href="link.path">
                  <span>
                    <i :class="`${link.icon}`"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-for="(box, i) in $t('footer')"
          :key="i"
          class="col-lg-3 col-md-6 col-sm-12"
        >
          <div class="links-json d-flex flex-column align-items-end">
            <div class="head">
              <h4 class="text-white">{{ box.title }}</h4>
            </div>
            <ul class="body d-flex flex-column gap-2 list-unstyled">
              <li
                role="button"
                :key="i"
                class="p-2"
                v-for="(bo, i) in box.links"
              >
                <router-link
                  tag="h5"
                  class="text-decoration-none link-title"
                  :to="bo.path"
                >
                  {{ bo.title }}
                </router-link>
              </li>
              <li class="d-flex flex-row gap-3 justify-content-end">
                <router-link
                  tag="div"
                  :to="pa.path"
                  :key="i"
                  v-for="(pa, i) in box.link"
                >
                  <div>
                    <span class="payments"
                      ><i role="button" :class="`${pa.icon}`"></i
                    ></span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer-OmarAfandy",
  data() {
    return {};
  },
};
</script>

<style>
.footer {
  background: #22313f;
  padding: 15px;
}
.mark-question span i {
  font-size: 45px;
  color: #1e8bc3;
}
.box-markQuestion {
  background: white;
}
.head a h5 {
  color: #fcfcfd;
}
.social-media li span i {
  font-size: 30px;
  color: #1e8bc3;
}
.link-title {
  color: #a9a9ab;
}
.payments i {
  font-size: 44px;
  color: #ffffff;
}
h5.text-decoration-none.link-title.text-white {
  color: #8a8e93;
  font-size: 20px;
}
ul.body.mt-3.d-flex.flex-column.gap-2.list-unstyled {
  margin-right: 45px;
  transition: 0.5s ease-in-out;
}
ul.body.mt-3.d-flex.flex-column.gap-2.list-unstyled:hover {
  color: #1e8bc3;
}
@media (max-width: 767.98px) {
  .links-json.d-flex.flex-column.align-items-center {
    align-items: flex-end !important;
  }
}
</style>
