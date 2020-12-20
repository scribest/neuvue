import { App, ObjectDirective, VNode } from 'vue';

export type NeumorphicDirectiveName = 'neumorphic' | 'neu';

export const NeumorphicDirective: ObjectDirective = {
  mounted(el: VNode) {
    console.log('Currently empty');
  },
};
