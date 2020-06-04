<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
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
