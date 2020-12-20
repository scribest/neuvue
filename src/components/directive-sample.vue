<template>
  <p>AAAAA</p>
</template>

<script lang="ts">
import { VNode } from 'vue';
import { Vue, Options } from 'vue-class-component';
import { NVDirectives, classDecorator } from '@/directives';
import { ClassWithDirectives } from '@/interfaces';

@NVDirectives(['neu'])
@Options({})
export default class DirectiveSample extends Vue implements ClassWithDirectives {
  mounted() {
    console.log(this.$data);
  }

  directives = {
    andrew: {
      mounted(el: VNode) {
        console.log('lolo');
      },
    },
  };
}
</script>
