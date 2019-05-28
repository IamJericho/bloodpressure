<template>
  <div class="calculator-body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-5">
        <label for="systolic"><strong>Systolic</strong><br>mm Hg (upper #)</label>
        <input id="systolic" type="number" class="form-control required">
      </div>
      <div class="col-xs-12 col-sm-5 mt-4 mt-sm-0">
        <label for="diastolic"><strong>Diastolic</strong><br>mm Hg (lower #)</label>
        <input id="diastolic" type="number" class="form-control">
      </div>
      <div id="go-btn" class="col-xs-12 col-sm-2">
        <button id="submit" class="float-sm-left btn btn-danger btn-lg mt-3 mt-sm-5">Go</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
