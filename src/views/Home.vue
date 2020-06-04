<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data" class="content">
        <div>
          <h1>Sobre a {{data.title}}</h1>
          <p>{{data.description}}</p>
          <router-link tag="button" class="btn" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="rating in data.ratings" :key="rating.id">
                <p>{{rating.name}}</p>
                <p>{{rating.description}}</p>
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
