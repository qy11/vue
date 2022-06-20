//
export function defineReactiveData(data, key, value) {
  Object.defineProperty(data, key, {
    get() {
      console.log("响应式获取", value);
      return value;
    },
    set(newValue) {
      console.log("响应式-设置", newValue);
      if (newValue === value) return;
      value = newValue;
    },
  });
}
