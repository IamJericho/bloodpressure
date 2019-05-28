<template>
  <div class="calculator-body">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col col-sm-6 offset-sm-3">
        <ul class="list-unstyled">
          <li>results</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
