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
            <router-link
              :to="{name: 'lesson', params: {lesson: lesson.id}}"
              v-for="lesson in data.lessons"
              :key="lesson.id"
              tag="li"
            >{{lesson.name}}</router-link>
          </ul>
        </div>
        <router-view></router-view>
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

<style lang="scss">
.lessons {
  .lessons__title {
    margin-bottom: 20px;
  }

  li {
    @include radius(small);
    @extend %elevation-cardMenu;
    padding: 20px;
    margin-bottom: 10px;
    letter-spacing: 0.12rem;
    transition-duration: 0.3s;
    cursor: pointer;
    &.router-link-active {
      @include font-weight(bold);
      background: color(brand, primary);
      color: #ffffff;
    }
  }
}
</style>