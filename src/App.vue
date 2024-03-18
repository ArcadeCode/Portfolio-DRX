<script setup lang="ts">
import aboutMe from "./components/aboutMe.vue";
import Header from "./components/globalHeader.vue"
import Footer from "./components/globalFooter.vue"
</script>

<template>
  <main>
    <Header></Header>
    <aboutMe></aboutMe>
    <Footer></Footer>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
