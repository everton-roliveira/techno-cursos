<template>
  <div>
    <h1>Contato</h1>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data">{{data}}</div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Contact",
  mixins: [fetchData],
  created() {
    this.fetchData("/contact");
  }
};
</script>

<style>
</style>