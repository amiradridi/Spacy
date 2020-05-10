<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto form"
      height="1170"
      width="900"
    >
      <v-form ref="form" v-model="valid" lazy-validation class="forminside" enctype="multipart/form-data">
        <v-row>
          <v-col>
            <v-label><h3>Titre :</h3></v-label>
            <v-text-field
              v-model="titre"
              :rules="titreRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Le type de l'espace :</h3></v-label>
            <v-select
              v-model="type"
              :items="types"
              class="field"
              required
              :rules="typeRules"
            ></v-select> </v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Description de l'espace :</h3></v-label>
            <v-textarea
              background-color="grey lighten-2"
              v-model="description"
              class="field"
              full-width
              outlined
              :rules="descriptionRules"
              required
            ></v-textarea> </v-col
        ></v-row>
        <v-row
          ><v-col>
            <input
              type="file"
              name="images"
              v-on:change="onImageSelected"
              label="File input"
              required
            /> </v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>prix :</h3></v-label>
            <v-text-field
              v-model="prix"
              :rules="prixRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Adresse :</h3></v-label>
            <v-text-field
              v-model="adress"
              :rules="adressRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col>
            <v-label><h3>Ville :</h3></v-label>
            <v-text-field
              v-model="ville"
              :rules="villeRules"
              required
            ></v-text-field></v-col
        ></v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  prepend-icon="fa fa-calendar"
                  v-model="computedDateFormatteddebut"
                  label="Date debut"
                  persistent-hint
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datedebut"
                required
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" lg="6">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  prepend-icon="fa fa-calendar"
                  v-model="computedDateFormattedfin"
                  label="Date fin"
                  persistent-hint
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datefin"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row
          ><v-col align="center">
            <v-btn
              :disabled="!valid"
              :loading="loading"
              rounded
              width="180px"
              class="btn black"
              @click="validate"
            >
              Ajouter l'espace
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-hover>
</template>

<script>
import postController from "../services/PostServer";

export default {
  name: "PostForm",
  data() {
    return {
      valid: false,
      loading: false,
      titre: "",
      description: "",
      type: "",
      images: null,
      prix: "",
      adress: "",
      ville: "",
      types: ["Item 1", "Item 2", "Item 3", "Item 4"],
      titreRules: [v => !!v || "le titre est demandé"],
      descriptionRules: [v => !!v || "la description est demandée"],
      typeRules: [v => !!v || "le type de l'espace est demandé"],
      prixRules: [v => !!v || "le prix est demandé"],
      adressRules: [v => !!v || "l'adresse de l'espace est demandé"],
      villeRules: [v => !!v || "la ville de l'espace est demandé"],
      datedebut: new Date().toISOString().substr(0, 10),
      datefin: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false
    };
  },
  computed: {
    computedDateFormatteddebut() {
      return this.formatDate(this.datedebut);
    },
    computedDateFormattedfin() {
      console.log(this.datefin);
      return this.formatDate(this.datefin);
    }
  },
  methods: {
    onImageSelected(event) {
      this.images = event.target.files[0];
      console.log(this.images);
    },
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          const fd = new FormData();
          fd.append("images", this.images);
          fd.append("title", this.titre);
          fd.append("type", this.type);
          fd.append("description", this.description);
          fd.append("prix", this.prix);
          fd.append("adresse", this.adress);
          fd.append("ville", this.ville);
          fd.append("date_debut", this.datedebut);
          fd.append("date_fin", this.datefin);
          await postController.ajoutEspace(fd);
          this.$router.replace({ name: "Home" });
          this.loading = false;
        } catch (e) {
          this.loading = false;
          this.error = e.response.data.err;
          console.log(e.response.data.err);
        }
      } else {
        //to implement notification v-if here
        console.log("validation failed");
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
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
.fileinput {
}
.field {
  margin-top: 10px;
  margin-bottom: 20px;
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
  color: black;
}
</style>
