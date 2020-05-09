<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto form"
      height="450"
      width="900"
    >
      <v-row justify="center" style="padding-top: 25px">
        <h2>S'inscrire à Espac</h2></v-row
      >
      <v-row justify="center">
        <v-col cols="12" md="11" sm="11">
          <v-form ref="form" v-model="valid" lazy-validation class="forminside">
            <v-label><h3>Email</h3></v-label>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="Email"
              color="#009688"
              outlined
              rounded
              required
            ></v-text-field>
            <v-label><h3>Mot de passe</h3></v-label>
            <v-text-field
              v-model="mdp"
              :rules="mdpRules"
              placeholder="Mot de passe"
              color="#009688"
              outlined
              rounded
              required
            ></v-text-field>
            <v-row>
              <v-col cols="9">
                <router-link to="/ResetMail">
                  <a
                    class=" font-weight-bold font-login-pass"
                    href="#"
                    style="color: darkred"
                  >
                    Mot de pass oublié?
                  </a>
                </router-link>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center" cols="12">
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  rounded
                  width="150px"
                  class="btn black"
                  @click="validate"
                >
                  S'inscrire
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
import authController from "../services/AuthenticationServer";
export default {
  name: "SignIn",
  data: () => ({
    valid: false,
    loading: false,
    mdp: "",
    email: "",
    error: "",
    emailRules: [
      v => !!v || "L'email est demandé",
      v => /.+@.+\..+/.test(v) || "Veuillez donner une adresse mail valide"
    ],
    mdpRules: [v => !!v || "Le mot de passe est demandé"]
  }),

  methods: {
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.signIn({
            email: this.email,
            password: this.mdp
          });
          console.log(resp);
          this.$router.replace({ name: "Home" });
          this.loginUser(resp.data);
          this.loading = false;
        } catch (e) {
          this.loading = false;
          this.error = e.response.data.err;
        }
      } else {
        //to implement notification v-if here
        console.log("validation failed");
      }
    }
  }
};
</script>
<style scoped>
.btn {
  margin-top: 10px;
  justify-content: center;
  color: #e5dddd;
}
.forminside {
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.form {
  margin-top: 25px;
  z-index: 1 !important;
}
h3 {
  margin-bottom: 10px;
  margin-left: 10px;
  color: #009688;
}
</style>
