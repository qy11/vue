//
import { initState } from "./init";
function Vue(options) {
  this._init(options);
}

Vue.prototype._init = function (options) {
  const vm = this;
  // console.log("this", this);
  vm.$options = options;

  initState(vm);
};

export default Vue;
