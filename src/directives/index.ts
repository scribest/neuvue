/* eslint-disable */
import { alex, NeumorphicDirectiveName } from './neumorphic';
import { Directive } from 'vue';
import { ClassWithDirectives } from '@/interfaces';

type NVDirectiveName =
    NeumorphicDirectiveName;

type NVDirectiveObject = Record<NVDirectiveName, string>;

export function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        data() {
            return {
                i_am_here: true
            }
        }
    }
}

export function NVDirectives(param: NVDirectiveName[] | NVDirectiveObject) {
        return <T>(c: FunctionConstructor & ClassWithDirectives) => {
            return class extends c {
                constructor(...args: any[]) {
                    super(...args);
                    console.log('I hit the decorator');
                    if (c instanceof ClassWithDirectives) {
                        console.log(this.directives);
                    }
                    // if (!this.hasOwnProperty('directives')) {
                    //     Object.defineProperty(this, 'directives', {});
                    // }
                }
            }
        }
}