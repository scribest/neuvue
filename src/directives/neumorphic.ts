import { App, ObjectDirective, VNode } from 'vue';

export type NeumorphicDirectiveName = 'neumorphic' | 'neu';

export const alex: ObjectDirective = {
    mounted(el: VNode) {
        console.log('alex');
    }
};
