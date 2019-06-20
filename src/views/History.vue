<template>
  <div class="history-body">
    <History msg="Blood Pressure History" />
  </div>
</template>

<script>
// @ is an alias to /src
import History from "@/components/HistoryResults.vue";

export default {
  name: "history",
  components: {
    History
  }
};
</script>
