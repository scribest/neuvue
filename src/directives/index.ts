/* eslint-disable import/prefer-default-export, prefer-destructuring */
import { Directive } from 'vue';
import { Maybe, EvalMaybe } from '@/util/maybe';
import { NeumorphicDirective, NeumorphicDirectiveName } from './neumorphic';

/**
 * Indicates original library directive names.
 */
type NVDirectiveName =
  NeumorphicDirectiveName;

/**
 * Indicates alias-defining-purposed objects, where the key is the
 * library defined name, and the value is the user-selected name.
 */
type NVDirectiveObject = Partial<Record<NVDirectiveName, string>>;

const DefaultDirectives: Array<[NVDirectiveName, Directive]> = [
  ['neu', NeumorphicDirective],
];

/**
 * This is a generalization of the expected Vue-derived class for the class
 * components. It may or it may not contain a 'directives' key.
 */
interface MaybeDirective {
  directives?: Record<string, Directive>;
  [key: string]: any;
}

export function Directives(param: NVDirectiveName[] | NVDirectiveObject) {
  return <T extends { new(...args: any[]): MaybeDirective }>(c: T) => class extends c {
    constructor(...args: any[]) {
      super(...args);

      /**
       * This field represents the directives that may already exist in the class
       * that's being decorated. If they are present, we want to preserve them and
       * only append the NeuVue directives to it.
       */
      const PossibleDirectives: Maybe<Record<string, Directive>> = EvalMaybe(this.directives);

      /**
       * This field represents the correct reference to the class directives.
       * The following conditions will check whether the class already has some
       * directives, in which case that will be the reference passed to AccessDirectives,
       * or if it has no directives, in which case it will initalize a new, initially empty,
       * directives field.
       */
      let AccessDirectives: Record<string, Directive>;

      if (!PossibleDirectives.present) {
        this.directives = {};
        const CertainDirectives: Maybe<Record<string, Directive>> = EvalMaybe(this.directives);

        /**
         * Should be always true, since we just defined the field.
         * Condition present for type checking.
         */
        if (CertainDirectives.present) {
          AccessDirectives = CertainDirectives.value;
        }
      } else {
        AccessDirectives = PossibleDirectives.value;
      }

      /**
       * If the provided parameters are just elements in an array,
       * it means the user wants to use the original, library-provided
       * directive names.
       */
      if (Array.isArray(param)) {
        DefaultDirectives.forEach((element) => {
          if (param.includes(element[0])) {
            AccessDirectives[element[0]] = element[1];
          }
        });
      /**
       * Otherwise, it means that the user wants to use name aliases
       * for the directives. (Conflicts are present or they simply prefer
       * another name)
       */
      } else {
        DefaultDirectives.forEach((element) => {
          if (element[0] in param) {
            console.log(param[element[0]]);
            AccessDirectives[param[element[0]]!] = element[1];
          }
        });
      }
    }
  };
}
