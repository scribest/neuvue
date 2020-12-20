import { Directive } from 'vue';
import { Vue } from 'vue-class-component';
import { Directive as VueDirective } from 'vue';

export class ClassWithDirectives {
    directives!: Record<string, VueDirective>;
    constructor() {
        console.log('I am in ClassWithDirectives');
    }
}