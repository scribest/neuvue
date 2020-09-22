import { defineComponent, Plugin } from 'vue';

declare const Neuvue: { install: Plugin['install'] };
export default Neuvue;

export const NeuvueSample: ReturnType<typeof defineComponent>;
