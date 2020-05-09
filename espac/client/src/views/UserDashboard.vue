<template>
  <div class="background">
    <v-row justify="center">
      <v-col cols="12" md="6" >
        <UserCard />
      </v-col>
      <v-col cols="12" md="6" >
        <UserCard />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import UserCard from "../components/UserCard";

export default {
  name: "UserDashboard",
  components: {
    UserCard
  }
};
</script>
<style scoped>
.background {
  background-color: #009688;
  height: 100%;
}
</style>
