<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data" class="content">
        <div>
          <header class="header-page">
            <h1 class="header-page__title">{{data.name}}</h1>
            <p class="header-page__description">{{data.description}}</p>
          </header>
          <ul class="lessons">
            <h2 class="lessons__title">Aulas</h2>
            <li
              class="lessons__lesson"
              v-for="lesson in data.lessons"
              :key="lesson.id"
            >{{lesson.name}}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Course",
  props: ["course"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/course/${this.course}`);
  }
};
</script>

<style scoped lang="scss">
.lessons {
  .lessons__title {
    margin-bottom: 20px;
  }

  &__lesson {
    @include radius(small);
    @extend %elevation-cardMenu;
    padding: 20px;
    margin-bottom: 10px;
    letter-spacing: 0.12rem;
  }
}
</style>