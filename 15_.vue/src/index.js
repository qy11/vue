import Vue from "vue";

const vm = new Vue({
  el: "#app",
  data() {
    return {
      title: "学生列表",
      classNum: 1,
      teacher: ["章三", "李四"],
      students: [
        {
          id: 1,
          name: "小红",
        },
        {
          id: 2,
          name: "小明",
        },
      ],
    };
  },
});

console.log(
  "src",
  vm,
  vm._data.title,
  vm.title
);
