<template>
  <div class="row">
    <form @submit="checkForm" id="bp-form">
        <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
      <div class="col-xs-12 col-sm-8 col-sm-offset-4 form-group">
        <label>Dia</label>
        <input
          type="number"
          class="form-control"
          v-model="results.dia"
          placeholder="Enter Dia"
        />
        <label>Sys</label>
        <input
          type="number"
          class="form-control"
          v-model="results.sys"
          placeholder="Enter Sys"
        />
      </div>
      <div class="col-xs-12 form-group">
        <button class="btn btn-primary btn-lg">Calculate</button>
        <button
          id="reset"
          type="reset"
          class="btn btn-danger btn-lg ml-2"
          @click="clear"
        >
          Reset
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
        dia: "",
        sys: ""
      },
      errors: []
    };
  },
  methods: {
    AddStats() {
      console.log("calling add stats");
      this.$emit("diaAdded", this.results);
      this.results.dia = null;
      this.results.sys = null;
    },
    clear() {
      this.results.dia = "";
      this.results.sys = "";
    },
    checkForm: function(e) {
      console.log("calling checkform");
      e.preventDefault();
      if (this.results.dia && this.results.sys) {
        this.AddStats();
      } else {
      this.errors = [];
      if (!this.results.dia) {
        this.errors.push("Dia required.");
      }
      if (!this.results.sys) {
        this.errors.push("Sys required.");
      }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
