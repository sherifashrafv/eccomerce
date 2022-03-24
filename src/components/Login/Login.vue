<template>
  <div class="m-4">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-row justify-content-center">
          <div class="box rounded m-auto">
            <form>
              <!-- Email -->
              <div class="mb-5 position-relative">
                <Transition name="fade">
                  <p class="error" v-if="errorEmail">
                    {{ $t("SignUp.EmailError") }}
                  </p>
                </Transition>
                <label for="exampleInputEmail1" class="form-label">{{
                  $t("SignUp.email")
                }}</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="email"
                />
              </div>
              <!-- password -->
              <!-- <Transition name="fade">
                <p class="error" v-if="password">
                  {{ $t("SignUp.passwordError") }}
                </p>
              </Transition> -->
              <div class="mb-5">
                <label class="form-label">{{ $t("SignUp.password") }}</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <button
                @click.prevent="submit()"
                type="submit"
                class="btn btn-primary"
              >
                {{ $t("SignUp.Submit") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Login-Form",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  validations: {
    email: { email, required, minLength: minLength(0, 10) },
    password: { required, minLength: minLength(0, 10) },
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("form validation success");
        let resullt = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        if (resullt.status == 200 && resullt.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(resullt.data[0]));
          this.redirectTo({ val: "Home" });
          //   this.userError = "user found";
        } else {
          console.log("The User Is Not Exisit Please Register ");
        }
      } else {
        console.log("notvalid");
      }
    },
  },
};
</script>

<style>
.box {
  width: 700px;
  background: white;
  padding: 15px;
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateX(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(20%);
}
.error {
  color: red;
}
</style>
