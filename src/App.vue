<template>
  <directive-sample/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NeuvueSample from './components/neuvue-sample.vue';
import DirectiveSample from './components/directive-sample.vue';

@Options({
  components: {
    NeuvueSample,
    DirectiveSample,
  },
  mounted() {
    console.log('welcome to vue 3');
  },
})
export default class App extends Vue {
}
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
