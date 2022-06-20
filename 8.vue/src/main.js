var Vue = (function () {
  function Vue(options) {
    this.$data = options.data();
    this._methods = options.methods;

    this._init(this);
  }

  Vue.prototype._init = function (vm) {
    initData(vm);
    initMethods(vm);
  };

  function initData(vm) {
    for (var key in vm.$data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get: function () {
            return vm.$data[key];
          },
          set: function (newValue) {
            vm.$data[key] = newValue;
          },
        });
      })(key);
    }
  }

  function initMethods(vm) {
    for (var key in vm._methods) {
      vm[key] = vm._methods[key];
    }
  }

  return Vue;
})();

var vm = new Vue({
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    increaseA(num) {
      this.a += num;
    },
    increaseB(num) {
      this.b += num;
    },
    getTotal() {
      console.log(this.a + this.b);
    },
  },
});

console.log(vm);

vm.increaseA(1);
vm.increaseA(1);
vm.increaseA(1);
vm.increaseA(1);
// a 5

vm.increaseA(2);
vm.increaseA(2);
vm.increaseA(2);
vm.increaseA(2);
// b 10

vm.getTotal(); //  15
