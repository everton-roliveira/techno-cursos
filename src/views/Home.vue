<template>
  <div>
    <h1>Home</h1>
    <page-loading v-if="loading"></page-loading>
    <div v-else>{{data}}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>
