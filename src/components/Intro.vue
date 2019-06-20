<template>
  <div class="calculator-body">
    <h1>{{ msg }}</h1>
    <form>
      <div class="row">
        <div class="col col-sm-6 offset-sm-3">
          <label for="systolic">
            <strong>Systolic</strong>
            <br />mm Hg (upper #)
          </label>
          <input
            id="systolic"
            type="number"
            class="form-control required"
            min="60"
            max="500"
            v-model="sys"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col col-sm-6 offset-sm-3">
          <label for="diastolic">
            <strong>Diastolic</strong>
            <br />mm Hg (lower #)
          </label>
          <input
            id="diastolic"
            type="number"
            class="form-control required"
            min="60"
            max="500"
            v-model="dia"
          />
        </div>
      </div>
      <div class="row">
        <div id="go-btn" class="col">
          <button
            @click="calculatePressure"
            id="calculate"
            type="button"
            class="btn btn-success btn-lg mt-4 mr-4"
          >
            Calculate
          </button>
          <button
            id="reset"
            type="reset"
            class="btn btn-danger btn-lg mt-4 ml-4"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
    <div v-if="dia > 0 || sys > 0" class="row">
      <div v-if="dia > 80 && sys > 60" class="results-body mt-5 col">
        <div id="results" class="bg-color">
          <div>
            <p class="text-center">Results</p>
            <p>{{ sys }}</p>
            <p>{{ dia }}</p>
          </div>
        </div>
      </div>
      <p v-else>Check yo stuff again</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data: function() {
    return {
      dia: "",
      sys: ""
    };
  },
  methods: {
    calculatePressure: function() {
      this.dia = "";
      this.sys = "";
    }
  },
  props: {
    msg: String
  },
  categories: [
    {
      categoryId: 1,
      categoryMsg: "Normal",
      categoryColor: "green"
    },
    {
      categoryId: 2,
      categoryMsg: "Elevated",
      categoryColor: "yellow"
    },
    {
      categoryId: 3,
      categoryMsg: "High Blood Pressure",
      categoryWarning: "Hypertension Stage 1",
      categoryColor: "orange"
    },
    {
      categoryId: 4,
      categoryMsg: "High Blood Pressure",
      categoryWarning: "Hypertension Stage 2",
      categoryColor: "red-orange"
    },
    {
      categoryId: 5,
      categoryMsg: "Hypertensive Crisis",
      categoryWarning: "Consult your doctor immediately",
      categoryColor: "red"
    }
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#results {
  background-color: red;
  padding: 40px 20px;
  width: 100%;
  color: #fff;
}
div#results p {
  margin-bottom: 0px;
}

@media only screen and (min-width: 768px) {
  div#results {
    background-color: red;
    padding: 40px 20px;
    width: 50%;
    margin: 0 auto;
    color: #fff;
  }
}
</style>
