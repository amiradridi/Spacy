<template>
  <v-hover v-slot:default="{ hover }">
    <v-card width="450" class="mx-auto" :elevation="hover ? 16 : 2">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline" style="color: #009688"
            >Flat6Labs</v-list-item-title
          >
          <v-list-item-subtitle>publié par Amira Dridi</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/images.jpg" height="194"></v-img>

      <v-card-text>
        Visitez notre espaces , vous trouverez tout ce qu'il vous faut.<br />
        Type : co-working space
      </v-card-text>

      <v-card-actions>
        <v-btn text color="accent-4">
          lire plus
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card></v-hover
  >
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
