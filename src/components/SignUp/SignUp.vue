<template>
  <div class="m-4">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-row justify-content-center">
          <div class="box rounded m-auto">
            <form>
              <!-- Email -->
              <div class="mb-3 position-relative">
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

              <!--UserName  -->
              <Transition name="fade">
                <p class="error" v-if="userNameError">
                  {{ $t("SignUp.UserNameError") }}
                </p>
              </Transition>
              <div class="mb-3">
                <label class="form-label">{{ $t("SignUp.firstName") }}</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="userName"
                />
              </div>
              <!-- LastName -->
              <Transition name="fade">
                <p class="error" v-if="lastNameError">
                  {{ $t("SignUp.LastNameError") }}
                </p>
              </Transition>
              <div class="mb-3">
                <label class="form-label">{{ $t("SignUp.lastName") }}</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="lastname"
                />
              </div>
              <!-- Telephone -->
              <Transition name="fade">
                <p class="error" v-if="TelephoneError">
                  {{ $t("SignUp.phoneError") }}
                </p>
              </Transition>
              <div class="mb-3">
                <VuePhoneNumberInput v-model="phone" v-bind="vuePhone.props" />
              </div>
              <!-- password -->
              <Transition name="fade">
                <p class="error" v-if="password">
                  {{ $t("SignUp.passwordError") }}
                </p>
              </Transition>
              <div class="mb-3">
                <label class="form-label">{{ $t("SignUp.password") }}</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <!-- Confirm Error -->
              <Transition name="fade">
                <p class="error" v-if="passwordConfirmError">
                  {{ $t("SignUp.ConfirmPassword") }}
                </p>
              </Transition>
              <div class="mb-3">
                <label class="form-label">{{
                  $t("SignUp.passwordConfirm")
                }}</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="repeatPassword"
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
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      userName: "",
      lastname: "",
      errorEmail: false,
      userNameError: false,
      lastNameError: false,
      passwordConfirmError: false,
      TelephoneError: false,
      passwordError: false,
      phone: "",
      vuePhone: {
        props: {
          color: "#ddd",
          clearable: true,
          preferredCountries: ["US", "GB"],
          noExample: true,
          translations: {
            countrySelectorLabel: this.$t("SignUp.country"),
            countrySelectorError: "Error",
            phoneNumberLabel: this.$t("SignUp.enterPhone"),
            example: "Example:",
          },
        },
      },
    };
  },
  components: {
    VuePhoneNumberInput,
  },
  validations: {
    email: { email, required, minLength: minLength(0, 10) },
    userName: { required, minLength: minLength(0, 10) },
    lastname: { required, minLength: minLength(0, 10) },
    password: { required, minLength: minLength(0, 10) },
    repeatPassword: { sameAsPassword: sameAs("password") },
    phone: { required, minLength: minLength(0, 11) },
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("valid");
        let resullt = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          userName: this.userName,
          lastname: this.lastname,
          phone: this.phone,
        });
        if (resullt.status == 201) {
          console.log(resullt);
          localStorage.setItem("user-info", JSON.stringify(resullt.data));
          this.redirectTo({ val: "Home" });
          window.location.reload();
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
