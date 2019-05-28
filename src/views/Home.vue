<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Intro msg="Blood Pressure Calculator" />
    <Results />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Results from "@/components/Results.vue";

export default {
  name: "home",
  components: {
    Intro,
    Results
  }
};
</script>
