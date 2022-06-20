//
import { defineReactiveData } from "./reactive";
export default function Observer(data) {
  if (Array.isArray(data)) {
    //
  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function (data) {
  // console.log("--", data);
  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i],
      value = data[key];
    defineReactiveData(data, key, value);
  }
};
