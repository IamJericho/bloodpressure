<template>
  <div class="container">
    <app-header
      :resultsCount="results.length"
      :maxResults="maxResults"
    ></app-header>
    <app-add-blood-pressure @diaAdded="diaResult"></app-add-blood-pressure>
    <app-history-results
      :results="results"
      @resultDeleted="deleteResult"
    ></app-history-results>
  </div>
</template>

<script>
// @ is an alias to /src
import HistoryResults from "@/components/HistoryResults.vue";
import AddBloodPressure from "@/components/AddBloodPressure.vue";
import Header from "@/components/Header.vue";

export default {
  data: function() {
    return {
      results: [],
      maxResults: 10
    };
  },
  methods: {
    diaResult(obj) {
      if (this.results.length >= this.maxResults) {
        return alert(
          "You have reached the maxium amount of results that can be saved, please delete some results before proceeding."
        );
      }
      if (obj.dia.length !== 0 && obj.sys.length !== 0) {
        let tempList = [Number(obj.dia), Number(obj.sys)];
        this.results.push(tempList);
        console.log(tempList);
      } else {
        console.log("no value");
      }
      console.log(obj.dia.length);
      console.log(obj.sys.length);
    },
    deleteResult(index) {
      this.results.splice(index, 1);
    }
  },
  components: {
    appHistoryResults: HistoryResults,
    appAddBloodPressure: AddBloodPressure,
    appHeader: Header
  }
};
</script>
