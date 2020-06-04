<template>
  <div>
    <h1>Cursos</h1>
    <page-loading v-if="loading"></page-loading>
    <div v-if="data">{{data}}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Courses",
  mixins: [fetchData],
  created() {
    this.fetchData("/courses");
  }
};
</script>

<style>
</style>