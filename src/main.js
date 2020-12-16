import * as components from "./components";

const PrettyLib = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  }
};

export default PrettyLib;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(PrettyLib);
}