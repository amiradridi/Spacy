<template>
  <v-row align-content="center" class="fill-height" justify="center">
    <v-col class="text-center" cols=" 12 " md="6">
      <h1 class=" Hometext mt-12">
        Bienvenu à l'Espac!
      </h1>
      <h1 class=" Hometext mt-8">
        Ici , vous trouverez vos espaces de reve :
      </h1>
      <h1 class="Subtext">
        co-working spaces , espaces pour les hackathons ...
      </h1>
      <v-row justify="center">
        <v-btn class="btnHome mr-4" dark rounded to="Catalogue">
          voir catalogue
        </v-btn>
      </v-row>
    </v-col>
    <v-col
      align-self="center"
      class="text-center  d-none d-md-flex "
      cols=" 12 "
      md="6"
    >
      <v-img
        aspect-ratio="1.129"
        class=" text-center imgCenter"
        contain
        max-width="600"
        src="../assets/images.jpg"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  }
};
</script>

<style scoped>
.imgCenter {
  margin-right: 2vw !important;
}

.Hometext {
  font-family: Cairo;
  color: white;
  font-weight: bold !important;
  font-size: 2.4vw !important;
  margin-top: 5vw !important;
}

.Subtext {
  font-family: Cairo;

  font-weight: bold !important;
  font-size: 1.5vw !important;
  margin-top: 3vw !important;
}

.btnHome {
  font-family: Cairo;

  margin-top: 50px;
  font-size: 20px;
  font-weight: bold !important;
  font-family: Cairo;
}

@media only screen and (max-width: 958px) {
  .Hometext {
    color: white;
    font-weight: bold !important;
    font-size: 40px !important;
    margin-top: 7vw !important;
    font-family: Cairo;
  }

  .Subtext {
    font-weight: bold !important;
    font-size: 20px !important;
    margin-top: 4vw !important;
    font-family: Cairo;
  }

  .btnHome {
    margin-top: 20px;
    font-weight: bold !important;
    font-family: Cairo;
  }
}
</style>
