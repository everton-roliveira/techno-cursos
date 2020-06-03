<template>
  <header>
    <nav>
      <div class="brand">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style>
</style>