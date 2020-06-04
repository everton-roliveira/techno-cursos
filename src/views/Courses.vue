<template>
  <div>
    <h1>Cursos</h1>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>{{data}}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Courses",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
};
</script>

<style>
</style>