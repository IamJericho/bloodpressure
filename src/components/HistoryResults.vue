<template>
  <div class="row">
    <div class="col-sm-6">
      <app-result
        v-for="(result, index) in results"
        @click.native="deleteResult(index)"
        >{{ result.join(", ") }}</app-result
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Result from "./Results.vue";

export default {
  props: ["results"],
  components: {
    appResult: Result
  },
  methods: {
    deleteResult(index) {
      this.$emit("resultDeleted", index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
