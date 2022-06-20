// var obj = {};

// Object.defineProperty(obj, "key", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: "static",
// });
// obj.value = "6";
// obj.key = "6";
// console.log(obj);

var o = {}; // 创建一个新对象

var bValue = 38;
Object.defineProperty(o, "b", {
  // 使用了方法名称缩写（ES2015 特性）
  // 下面两个缩写等价于：
  // get : function() { return bValue; },
  // set : function(newValue) { bValue = newValue; },
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});

console.log(o.b);
o.b = 9;
console.log(o.b);
