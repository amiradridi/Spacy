<template>
  <div class="background">
    <v-row justify="center">
      <v-col cols="4" md="3">
        <FounderCard />
      </v-col>
      <v-col cols="4" md="3">
        <FoundingCard />
      </v-col>
      <v-col cols="4" md="3">
        <UserCard/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import UserCard from "../components/UserCard";
import FounderCard from "../components/FounderCard";
import FoundingCard from "../components/FoundingCard";

export default {
  name: "UserDashboard",
  data: () => ({
    name1: "Amira Dridi",
    name2: "Marwen Guesmi",
    name3: "Raed Ouerfelli"
  }),
  components: {
    UserCard,
    FounderCard,
    FoundingCard
  }
};
</script>
<style scoped>
.background {
  background-color: #009688;
  height: 100%;
}
</style>
