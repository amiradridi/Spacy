<template>
  <div class="background">
    <v-row justify="center">
      <v-col cols="12" md="11" sm="11">
        <SignUp />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SignUp from "../components/SignUp";

export default {
  name: "SignUpPage",
  components: {
    SignUp
  }
};
</script>
<style scoped>
.background {
  background-color: #009688;
  height: 100%;
}
</style>
