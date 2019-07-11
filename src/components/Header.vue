<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: (resultsCount / maxResults) * 100 + '%' }"
          >
            {{ resultsCount }} / {{ maxResults }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resultsCount", "maxResults"]
};
</script>

<style scoped></style>
