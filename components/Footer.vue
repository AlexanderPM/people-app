<script>
import { defineComponent } from "vue";
import Button from "~/components/UI/Button.vue";

export default defineComponent({
  components: { Button }
})

</script>

<template>
  <footer>
    <p>footer</p>
    <Button />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 180px;
  border: solid 15px #00A2E8;
  box-sizing: border-box;
  position: relative;
  p {
    position: absolute;
    top: 45px;
    left: 250px;
  }
}
</style>