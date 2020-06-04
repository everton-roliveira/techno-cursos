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
  @include font-family("primary");
  margin: 0;
  padding: 0;
  color: color(brand, secondary);
  a {
    @include font-weight(bold);
    text-decoration: none;
    color: color(brand, secondary);
    &.router-link-active {
      color: color(brand, primary);
    }
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    grid-gap: 30px;

    @media screen and(max-width: 600px) {
      display: block;
    }
  }

  .header-page {
    margin-bottom: 40px;
    &__title {
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    &__description {
      @include font-weight(bold);
      font-size: 1rem;
    }
  }
}
</style>
