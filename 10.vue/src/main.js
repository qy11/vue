const App = {
  data() {
    return {
      a: 1,
      b: 2,
      type: "plus",
    };
  },
  template: `
    <div>
      <h1>计算属性结果：{{ result }}</h1>
      <h2>方法计算结果：{{ getResult() }}</h2>
      <p>
        <span>{{ a }}</span>
        <span>{{ sym }}</span>
        <span>{{ b }}</span>
        <span>=</span>
        <span>{{ result }}</span>
        <span>({{ getResult() }})</span>
      </p>
      <div>
        <input type="number" v-model="a" />
        <input type="number" v-model="b" />
      </div>
      <div>
        <button @click="compute('plus')">+</button>
        <button @click="compute('minus')">-</button>
        <button @click="compute('mul')">*</button>
        <button @click="compute('div')">/</button>
      </div>
    </div>
  `,
  computed: {
    // 默认为 GETTER get()
    sym() {
      switch (this.type) {
        case "plus":
          return "+";
        case "minus":
          return "-";
        case "mul":
          return "*";
        case "div":
          return "/";
        default:
          break;
      }
    },
    result: {
      get() {
        // console.log("computed result");
        const a = Number(this.a);
        const b = Number(this.b);

        switch (this.type) {
          case "plus":
            return a + b;
          case "minus":
            return a - b;
          case "mul":
            return a * b;
          case "div":
            return a / b;
          default:
            break;
        }
      },
    },
    calData: {
      get() {
        return {
          a: "number a:" + this.a,
          b: "number b:" + this.b,
          type: "computed type:" + this.type,
          result: "computed result:" + this.result,
        };
      },
      set(newValue) {
        this.a = Number(newValue.a.split(":")[1]);
        this.b = Number(newValue.b.split(":")[1]);
        this.type = newValue.type.split(":")[1];
      },
    },
  },
  methods: {
    compute(type) {
      this.type = type;
    },
    getResult() {
      // console.log("method result");
      const a = Number(this.a);
      const b = Number(this.b);

      switch (this.type) {
        case "plus":
          return a + b;
        case "minus":
          return a - b;
        case "mul":
          return a * b;
        case "div":
          return a / b;
        default:
          break;
      }
    },
  },
};

const vm = Vue.createApp(App).mount("#app");

vm.calData = {
  a: "number a:100",
  b: "number b:200",
  type: "computed type:div",
};
