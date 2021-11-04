<template>
  <div class="page">
    <header class="page__header header">
      <Search class="header__search"></Search>
    </header>
    <main class="page__main main">
      <Posts class="main__content posts"></Posts>
    </main>    
  </div>
</template>

<script>
import Posts from "./components/posts.vue";
import Search from "./components/search.vue";

export default {
  name: 'App',
  components: {
    Posts,
    Search
}
}
</script>

<style lang="scss">
  .body_background_light-blue {
    background: #ecf1f6;
  }
</style>
