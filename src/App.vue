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
  @include font-family("primary");
  margin: 0;
  padding: 0;
  color: color(brand, secondary);
}
a {
  @include font-weight(bold);
  text-decoration: none;
  color: color(brand, secondary);
  &.router-link-active {
    color: color(brand, primary);
  }
}
</style>
