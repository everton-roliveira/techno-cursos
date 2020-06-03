<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  color: #234;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}
</style>
