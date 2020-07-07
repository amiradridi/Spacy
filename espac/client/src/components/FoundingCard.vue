<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto form"
      height="450"
      width="900"
    >
    <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline" style="color: #009688"
            >Marwen Guesmi</v-list-item-title
          >
          <v-list-item-subtitle>Etudiant en 3ème génie logiciel</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/Marwen Guesmi.png" height="300"></v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "FoundingCard",
  data: () => ({

  }),

  methods: {

  }
};
</script>
<style scoped>

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
