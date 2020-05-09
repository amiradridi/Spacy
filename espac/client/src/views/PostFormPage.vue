<template>
  <div class="background">
    <v-row justify="center">
      <v-col>
        <PostForm />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import PostForm from "../components/PostForm";
export default {
  name: "PostFormPage",
  components: {
    PostForm
  }
};
</script>

<style scoped>
.background {
  background-color: #009688;
  height: 100%;
}
</style>
