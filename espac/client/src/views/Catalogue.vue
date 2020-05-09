<template>
  <div class="background">
    <v-toolbar dark color="teal">
      <v-row justify="center" style="padding-top: 30px"
        ><v-col sm="2" style="padding-top: 30px">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Debut"
                prepend-icon="fa fa-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="2" style="padding-top: 30px"
          ><v-select
            v-model="steps"
            :items="['co-working space', 'hackathon space', 'work space']"
            label="type de l'espace"
          ></v-select
        ></v-col>
        <v-col cols="12" sm="2" style="padding-top: 30px"
        ><v-select
                v-model="steps"
                :items="['co-working space', 'hackathon space', 'work space']"
                label="Ville"
        ></v-select
        ></v-col>
        <v-col sm="4">
          <v-text-field
            v-model="ricerca"
            @keyup="updateData()"
            label="chercher"
            append-icon="fas fa-search"
            outlined
          ></v-text-field></v-col
      ></v-row>
    </v-toolbar>
    <v-row>
      <v-col md="7" sm="11" flex="6"> <Espace /></v-col>

      <v-col md="5" sm="11" flex="6"> <Espace /></v-col>
    </v-row>
    <v-row>
      <v-col md="7" sm="11" flex="6"> <Espace /></v-col>

      <v-col md="5" sm="11" flex="6"> <Espace /></v-col>
    </v-row>
  </div>
</template>
<script>
import Espace from "../components/Espace";

export default {
  name: "Catalogue",
  components: {
    Espace
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false
    };
  }
};
</script>

<style scoped>
.background {
  padding-top: 20px;
  background-color: #e5dddd;
  height: 100%;
}
</style>
