<template>
  <div id="app">
    <TheHeader />
    <router-view class="container"></router-view>
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
  color: color(brand, secondary);
  a {
    @include font-weight(bold);
    text-decoration: none;
    color: color(brand, secondary);
    &.router-link-active {
      color: color(brand, primary);
    }
  }
}
</style>
