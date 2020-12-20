/* eslint-disable import/prefer-default-export, prefer-destructuring */
import { Directive } from 'vue';
import { Maybe, EvalMaybe } from '@/util/maybe';
import { NeumorphicDirective, NeumorphicDirectiveName } from './neumorphic';

type NVDirectiveName =
  NeumorphicDirectiveName;

type NVDirectiveObject = Partial<Record<NVDirectiveName, string>>;

const DefaultDirectives: Array<[NVDirectiveName, Directive]> = [
  ['neu', NeumorphicDirective],
];

interface MaybeDirective {
  directives?: Record<string, Directive>;
  [key: string]: any;
}

export function Directives(param: NVDirectiveName[] | NVDirectiveObject) {
  return <T extends { new(...args: any[]): MaybeDirective }>(c: T) => class extends c {
    constructor(...args: any[]) {
      super(...args);
      const PossibleDirectives: Maybe<Record<string, Directive>> = EvalMaybe(this.directives);

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

      if (Array.isArray(param)) {
        DefaultDirectives.forEach((element) => {
          if (param.includes(element[0])) {
            AccessDirectives[element[0]] = element[1];
          }
        });
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
