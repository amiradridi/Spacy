<template>
  <div>
    <v-row>
      <v-col class="form" cols="12" sm="6">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto cardc" :elevation="hover ? 16 : 2">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="forminside"
            >
              <v-text-field
                v-model="nom"
                :rules="nomRules"
                label="Nom"
                color="#009688"
                required
              ></v-text-field>
              <v-text-field
                v-model="prénom"
                :rules="prénomRules"
                label="Prénom"
                color="#009688"
                required
              ></v-text-field>
              <v-text-field
                v-model="username"
                :counter="8"
                :rules="telephoneRules"
                label="Téléphone"
                color="#009688"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                color="#009688"
                required
              ></v-text-field>
              <v-text-field
                v-model="mdp"
                type="password"
                :rules="mdpRules"
                color="#009688"
                label="Mot De Passe"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmdp"
                type="password"
                :rules="confirmmdpRules"
                color="#009688"
                label="Confirmez le Mot De Passe"
                required
              ></v-text-field>
              <v-row>
                <v-col align="center" cols="12">
                  <v-btn
                    :disabled="!valid"
                    :loading="loading"
                    rounded
                    width="150px"
                    class="btn black"
                    @click="validate"
                    style="color: #e5dddd"
                  >
                    S'inscrire
                  </v-btn></v-col
                ></v-row
              >
            </v-form></v-card
          >
        </v-hover></v-col
      >
      <v-col :class="$vuetify.breakpoint.xs ? 'd-none' : ''" sm="6">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2">
            <v-img
              class="d-flex align-end pb-12 mt-12 side-image"
              src="../assets/images.jpg"
            >
            </v-img></v-card
        ></v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import authController from "../services/AuthenticationServer";
export default {
  name: "SignUp",
  data() {
    return {
      loading: false,
      compare: "les 2 mots de passe doivent etre similaires",
      valid: false,
      nom: "",
      prénom: "",
      username: "",
      nomRules: [v => !!v || "le nom est demandé"],
      prénomRules: [v => !!v || "le prénom est demandé"],
      userRules: [v => !!v || "username est demandé"],
      telephone: "",
      telephoneRules: [
        v => !!v || "Numéro de téléphone est demandé",
        v =>
          (!isNaN(parseFloat(v)) && !isNaN(v - 0)) ||
          "Veuillez donner que des chiffres ici",
        v =>
          (v && v.length == 8) ||
          "Numéro de téléphone doit se composer de 8 chiffres"
      ],
      email: "",
      emailRules: [
        v => !!v || "L'email est demandé",
        v => /.+@.+\..+/.test(v) || "Veuillez donner une adresse mail valide"
      ],
      mdp: "",
      confirmdp: "",
      mdpRules: [v => !!v || "le mot de passe est demandé"],
      confirmmdpRules: [v => !!v || "vous devez confirmer mot de passe"],
      error:""
    };
  },

  methods: {
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.register({
            firstname: this.nom,
            lastname: this.prénom,
            username: this.username,
            email: this.email,
            password: this.mdp
          });
          this.loading = false;
          this.$router.replace({ name: "SignInPage" });
          console.log(resp);
        } catch (e) {
          this.loading = false;
          console.log(e.response.data);
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
.cardc {
  height: 100%;
}
.forminside {
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
}
.form {
  /* This form has been down-scaled and the z-index is made 1
               with position relative so it doesn't collide with the nav bar */
  position: relative;
  margin-top: 45px;
  z-index: 1 !important;
}

.side-image {
  height: 100%;
  width: 90vw;
}
</style>
