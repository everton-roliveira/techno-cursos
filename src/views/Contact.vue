<template>
  <div>
    <page-loading v-if="loading"></page-loading>
    <transition>
      <div v-if="data">
        <div>
          <header class="header-page">
            <h1 class="header-page__title">{{data.title}}</h1>
            <p class="header-page__description">{{data.description}}</p>
          </header>
          <div class="contact-us">
            <p class="contact">
              <b>Email:</b>
              {{data.contact.email}}
            </p>
            <p class="contact">
              <b>Telefone:</b>
              {{data.contact.phone}}
            </p>
            <p class="contact">
              <b>Endereço:</b>
              {{data.contact.address}}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Contact",
  mixins: [fetchData],
  created() {
    this.fetchData("/contact");
  }
};
</script>

<style scoped lang="scss">
.contact-us {
  .contact {
    margin-bottom: 10px;
    @include font-size(x-big);
  }
}
</style>