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
      results: [""],
      maxResults: 100
    };
  },
  methods: {
    diaResult(obj) {
      if (this.results.length >= this.maxResults) {
        return alert(
          "You have reached the maxium amount of results that can be saved, please delete some results before proceeding."
        );
      }
      this.results.push(obj.dia, obj.sys);
    },
    deleteResult(index) {
      this.results.splice(index, 2);
    }
  },
  components: {
    appHistoryResults: HistoryResults,
    appAddBloodPressure: AddBloodPressure,
    appHeader: Header
  }
};
</script>
