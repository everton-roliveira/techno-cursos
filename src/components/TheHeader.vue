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

<style lang="scss" scoped>
header {
  background: color(brand, secondary);
  a {
    color: #ffffff;
  }
  nav {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-content: space-between;
    padding: 20px;
    .brand {
      flex: 1;
      a {
        @include font-size(xx-big);
        color: #ffffff;
      }
    }
    ul {
      li {
        display: inline-block;
        a {
          padding: 0 10px;
          margin-left: 10px;
          &.router-link-active {
            color: color(brand, primary);
          }
        }
      }
    }
  }
}
</style>