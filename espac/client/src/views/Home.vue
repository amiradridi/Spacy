<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mt-0 pt-0 teal" height="550">
          <HomeHeader />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class=" mt-0 mb-5 text-center ">
      <v-col class="stepsHeader">
        <h1 style="text-decoration: black">Les differents espaces :</h1>
      </v-col>
    </v-row>
    <v-row class=" mt-0 text-center steps">
      <v-col class="mt-0 pt-0 " cols=" 12 " md="4">
        <div class="step1">
          <v-img
            class="pt-0"
            contain
            max-height="100"
            src="@/assets/images.jpg"
          >
          </v-img>
          <h1>
            Co-working spaces
          </h1>
        </div>
      </v-col>
      <v-col class="mt-0 pt-0" cols=" 12 " md="4">
        <div class="step2">
          <v-img
            class="pt-0"
            contain
            max-height="100"
            src="@/assets/images.jpg"
          >
          </v-img>
          <h1>
            Hackathon spaces
          </h1>
        </div>
      </v-col>
      <v-col class="mt-0 pt-0" cols=" 12 " md="4">
        <div class="step3">
          <v-img
            class="pt-0"
            contain
            max-height="100"
            src="@/assets/images.jpg"
          >
          </v-img>
          <h1>
            Studying spaces
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet class="mt-0 pt-0 teal"  height="550">
          <HomeAbout />
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class=" mt-0 mb-5 text-center">
      <v-col class="stepsHeader">
        <Contact />
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader";
import HomeAbout from "@/components/HomeAbout";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeAbout,
    Contact
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.stepsHeader {
  font-family: Cairo;
  margin-top: 30px;
  margin-bottom: 50px;
}
.steps{
  margin-bottom: 100px;
}
.step1 {
  font-family: Cairo;

  margin-right: 50%;
}

.step2 {
  font-family: Cairo;
}

.step3 {
  font-family: Cairo;

  margin-left: 50%;
}

@media only screen and (max-width: 958px) {
  .step1 {
    margin-right: 0%;
    margin-bottom: 20px;
  }

  .step3 {
    font-family: Cairo;
    margin-left: 0%;
    margin-top: 20px;
  }
}
</style>
