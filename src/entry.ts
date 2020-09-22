import { defineComponent, Plugin } from 'vue';

// iife/cjs usage extends esm default export - so import it all
// import * as components from '@/lib-components/index';
import plugin, * as components from '@/entry.esm';

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. VivintIcon.iconList)
type PluginObject = Plugin & { [key: string]: ReturnType<typeof defineComponent> };
Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== 'default') (plugin as PluginObject)[componentName] = component as any as ReturnType<typeof defineComponent>;
});

export default plugin;
