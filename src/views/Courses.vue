<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data" class="content">
        <header class="header-page">
          <h1 class="header-page__title">Sobre a {{data.title}}</h1>
          <p class="header-page__description">{{data.description}}</p>
        </header>
        <ul class="courses">
          <li class="courses__course" v-for="course in data.courses" :key="course.id">
            <h2>
              <router-link
                :to="{name: 'course', params: {course: course.id}}"
              >{{course.name}} - {{course.totalLessons}} | {{course.hours}} horas</router-link>
            </h2>
            <p>{{course.description}}</p>
          </li>
        </ul>
      </div>
    </transition>
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

<style scoped lang="scss">
.courses {
  &__course {
    margin-bottom: 30px;
    h2 {
      margin-bottom: 10px;
    }
  }
}
</style>