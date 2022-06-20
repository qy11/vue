//
import { proxyData } from "./proxy";
import { observe } from "./observe";

export function initState(vm) {
  // console.log(vm);
  const options = vm.$options;
  if (options.data) {
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data;

  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

  for (let key in data) {
    proxyData(vm, "_data", key);
    /**
     * defineProperty(data, key, {
      get() {
        
      },
      set() {
        
      }
    })
     */
  }
  // console.log(vm, vm._data);
  observe(vm._data);
}
