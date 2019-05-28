<template>
  <div class="calculator-body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="">
        <label for="systolic"><strong>Systolic</strong><br>mm Hg (upper #)</label>
        <input id="systolic" type="number" class="form-control required">
      </div>
      <div class="">
        <label for="diastolic"><strong>Diastolic</strong><br>mm Hg (lower #)</label>
        <input id="diastolic" type="number" class="form-control">
      </div>
      <div id="go-btn" class="">
        <button id="submit" class="btn btn-danger btn-lg">Go</button>
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
