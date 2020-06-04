<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data" class="content">
        <div>
          <header class="header-page">
            <h1 class="header-page__title">Sobre a {{data.title}}</h1>
            <p class="header-page__description">{{data.description}}</p>
          </header>
          <router-link tag="button" class="btn btn__big" to="/cursos">Cursos</router-link>
          <div class="ratings">
            <h2>Avaliações</h2>
            <ul>
              <li class="ratings__rating" v-for="rating in data.ratings" :key="rating.id">
                <p class="ratings__rating__name">{{rating.name}}</p>
                <p class="ratings__rating__description">{{rating.description}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/images/learn.png" alt="aprender" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>
<style lang="scss">
.btn {
  margin-bottom: 20px;
}

.ratings {
  &__rating {
    margin-bottom: 20px;
    &__name {
      @include font-weight(bold);
    }
    &__description {
      font-style: italic;
    }
  }
}
</style>
