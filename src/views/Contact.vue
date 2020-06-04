<template>
  <div>
    <h1>Contato</h1>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>{{data}}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Contact",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>

<style>
</style>