<template>
  <div
    style="padding-bottom: 30px;height: 40px; margin-bottom: 10px; z-index:10;"
  >
    <v-app-bar color="white" class="hidden-md-and-down">
      <template>
        <v-tabs>
          <v-img
            alt="Espac"
            class="shrink mr-1"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            width="70"
          />
          <v-tab to="Home" class="font-weight-medium" style="color:black"
            >Accueil</v-tab
          >
          <v-tab to="Catalogue" class="font-weight-medium" style="color:black"
            >Catalogue Espaces</v-tab
          >
          <v-tab
            to="PostFormPage"
            class="font-weight-medium"
            style="color:black"
            >Ajout d'espace</v-tab
          >
          <v-tab
            to="UserDashboard"
            class="font-weight-medium"
            style="color:black"
            >Qui sommes nous</v-tab
          >
          <v-spacer></v-spacer>
          <v-tab
            to="SignInPage"
            class="font-weight-medium"
            style="color:black"
            v-if="this.$store.state.currentUser === undefined"
            >S'inscrire</v-tab
          >
          <v-tab
            to="SignUpPage"
            class="font-weight-medium"
            style="color:black"
            v-if="this.$store.state.currentUser === undefined"
            >S'identifier</v-tab
          >
          <v-tab
            to="SignUpPage"
            class="font-weight-medium"
            style="color:black"
            @click="logOut"
            v-if="this.$store.state.currentUser !== undefined"
            >log out</v-tab
          >
          <v-tabs-slider color="#009688"></v-tabs-slider>
        </v-tabs>
      </template>
      <v-app-bar color="white" dark class="hidden-lg-and-up">
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-card style="padding-top: 10px ;padding-bottom: 10px ; width:200px">
            <v-list>
              <v-list-item>
                <v-btn href="/#" text color="black">
                  <span class="title">Accueil</span>
                </v-btn>
              </v-list-item>
              <v-list-item class="align-content-center">
                <v-btn href="/#" text color="black">
                  <span class="title">Catalogue</span>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn href="/#" text color="black">
                  <span class="title">Ajout d'Espace</span>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn href="/#" text color="black">
                  <span class="title">S'inscrire</span>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn href="/#" text color="black">
                  <span class="title">S'identifier</span>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-app-bar>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoginPressed"])
  },
  methods: {
    ...mapActions(["pressLogin"]),
    logOut() {
      this.storage.clear();
      this.$router.replace({ name: "Home" });
      this.$router.go();
    }
  },
  mounted() {
    this.storage = window.localStorage;

  }
};
</script>
<style scoped></style>
