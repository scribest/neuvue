<template>
  <p>AAAAA</p>
</template>

<script lang="ts">
import { VNode } from 'vue';
import { Vue, Options } from 'vue-class-component';
import { Directives } from '@/directives';

@Directives({ neu: 'neu_alias' })
@Options({})
export default class DirectiveSample extends Vue {
  mounted() {
    console.log(this);
  }
}
</script>
