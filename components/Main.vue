<script setup lang="ts">

import { getPeopleData } from '~/services/Endpoints'
import { ref } from 'vue';
import { PeopleResponseModel } from "~/model/PeopleResponseModal";

const peopleItems = ref<PeopleResponseModel>();

const response = await getPeopleData();
peopleItems.value = response;

</script>

<template>
  <main>
    <p>gender and name</p>
    <div v-if="peopleItems !== undefined">
      <div v-for="item in peopleItems.results">
        {{item.name}}
      </div>
    </div>
  </main>
</template>

<style lang="scss">
main {
  border: solid 15px #00A2E8;
  height: calc(100vh - 410px - 60px);
  box-sizing: border-box;
  margin-bottom: 30px;
  position: relative;
  p {
    position: absolute;
    top: 100px;
    left: 200px;
  }
}
</style>