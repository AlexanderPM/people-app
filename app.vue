<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style>
.app {
  padding: 30px;
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
    max-width: 1040px;
  }
}
@media (min-width: 1440px) {
  .app {
    max-width: 1100px;
  }
}
</style>