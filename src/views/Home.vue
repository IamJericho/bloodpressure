<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Intro msg="Blood Pressure Calculator" />
    <!-- begin global compontent -->
    <get-pressure></get-pressure>
    <!-- end global compontent -->
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  }
};
</script>
