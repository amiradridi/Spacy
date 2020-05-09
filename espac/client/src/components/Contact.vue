<template>
  <div>
    <v-row justify="center">
      <v-col class="form" cols="12" sm="6">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            class="mx-auto cards"
            height="400"
            width="700"
          >
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <h1>
                  <v-icon size="50px">fas fa-envelope </v-icon> Contactez Nous
                </h1>
              </v-col></v-row
            >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="forminside"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                color="#F54635"
                required
              ></v-text-field>
              <v-textarea
                background-color="grey lighten-2"
                v-model="msg"
                label="Message"
                full-width
                required
                outlined
              ></v-textarea>

              <v-btn
                dark
                rounded
                width="150px"
                :disabled="!valid"
                class="mr-4 btn"
                @click="validate"
              >
                Envoyer
              </v-btn>
            </v-form>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    msg: "",
    email: "",
    emailRules: [
      v => !!v || "L'email est demandé",
      v => /.+@.+\..+/.test(v) || "Veuillez donner une adresse mail valide"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
<style scoped>
.forminside {
  padding-right: 20px;
  padding-left: 20px;
}
.form {
  margin-top: 45px;
  margin-bottom: 50px;
  z-index: 1 !important;
}
.btn {
  margin-top: 20px;
  font-weight: bold !important;
  font-family: Cairo;
}
</style>
