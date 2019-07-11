<template>
  <div class="row">
    <form>
      <div class="col-xs-12 col-sm-8 col-sm-offset-4 form-group">
        <label>Dia</label>
        <input type="text" class="form-control" v-model="results.dia" />
        <label>Sys</label>
        <input type="text" class="form-control" v-model="results.sys" />
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-4 form-group">
        <button class="btn btn-primary" @click.prevent="AddStats">
          Calculate
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: function() {
    return {
      results: {
        dia: "120",
        sys: "80"
      }
    };
  },
  methods: {
    AddStats() {
      this.$emit("diaAdded", this.results);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
