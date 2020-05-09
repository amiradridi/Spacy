<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      class="mx-auto form"
      height="450"
      width="900"
    >
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "UserCard",
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
