<template>
  <div class="background">
    <v-row justify="center">
      <v-col cols="12" md="7" sm="11">
        <SignIn />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SignIn from "../components/SignIn";

export default {
  name: "SignInPage",
  components: {
    SignIn
  }
};
</script>

<style scoped>
.background {
  background-color: #009688;
  height: 100%;
}
</style>
