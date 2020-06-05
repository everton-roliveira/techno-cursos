<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data">
        <h2>{{data.name}}</h2>
        <div class="move">
          <iframe
            frameborder="0"
            :src="`https://www.youtube.com/embed/${data.youtube}`"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Lesson",
  props: ["lesson"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/lesson/${this.lesson}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/lesson/${to.params.lesson}`);
    next();
  }
};
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 20px;
}
.move {
  position: relative;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>