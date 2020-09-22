<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NeuvueSample/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NeuvueSample from './components/neuvue-sample.vue';

@Options({
  components: {
    NeuvueSample,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
