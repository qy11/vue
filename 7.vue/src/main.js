var str = "I am a global man!!!!";

var App = {
  data() {
    return {
      linkIndex: 0,
      urls: [
        "https://www.taobao.com",
        "https://www.tmall.com",
        "https://www.jd.com",
      ],
      aAttr: "href",
      eventName: "click",
      title: "this is title",
      attr: "data-id",
    };
  },
  template: `
    <div>
      <div>
        <h1 :[attr]='attr'>{{ title }}</h1>
        <h2>{{str}}</h2>
        <p v-if="linkIndex === 0">
          <a :[aAttr]="urls[0]" target="_blank">淘宝商城</a>
        </p>
        <p v-else-if="linkIndex === 1">
          <a :[aAttr]="urls[1]" target="_blank">天猫商城</a>
        </p>
        <p v-else>
          <a :[aAttr]="urls[2]" target="_blank">京东商城</a>
        </p>
      </div>
      <div>
        <button @[eventName]="changeIndex(0)">淘宝</button>
        <button @[eventName]="changeIndex(1)">天猫</button>
        <button @[eventName]="changeIndex(2)">京东</button>
      </div>
    </div>
    `,
  methods: {
    changeIndex(index) {
      this.linkIndex = index;
    },
  },
};

Vue.createApp(App).mount("#app");
