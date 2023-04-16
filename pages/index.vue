<script>
import Header from '~/components/Header.vue'
import Main from "~/components/Main.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>


<template>
  <div class="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style>
.app {
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
}

@media (min-width: 576px) and (max-width: 767px) {
  .app {
    max-width: 540px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .app {
    max-width: 720px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .app {
    max-width: 960px;
  }
}
@media (min-width: 1200px) and (max-width: 1439px) {
  .app {
    max-width: 1140px;
  }
}
@media (min-width: 1440px) {
  .app {
    max-width: 1200px;
  }
}
</style>