<template>
  <div class="pendingQuotes">
    <h1>Pending Quotes</h1>
    <QuotesReport/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuotesReport from '@/components/QuotesReport.vue'
export default Vue.extend({
  components: {
    QuotesReport
  }
})
</script>
