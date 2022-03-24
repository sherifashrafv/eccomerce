<template>
  <div>
    <Transition name="fade">
      <router-view />
    </Transition>
    <div class="container">
      <div class="router-links-sign-up">
        <ul class="d-flex flex-row gap-4 justify-content-center list-unstyled">
          <li>
            <router-link
              class="text-decoration-none"
              exact
              :to="{ name: 'default' }"
              >{{ $t("SignUp.signUp") }}</router-link
            >
          </li>
          <li>
            <router-link class="text-decoration-none" :to="{ name: 'login' }">{{
              $t("SignUp.loginSign")
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "router-sign",
};
</script>
<style scoped>
.router-links-sign-up {
  width: 700px;
  margin: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateY(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-20%);
}
a.text-decoration-none {
  color: black;
}
a.text-decoration-none.router-link-exact-active.router-link-active {
  color: #1e8bc3;
}
</style>
