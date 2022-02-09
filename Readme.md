# 渐进式框架  -  vue对自己框架和其他框架对比后，生产的一个特定的名词
# progresive framework

1. Angular -> 综合性框架 开发平台
           -> 项目应用 / X 视图渲染/状态的管理 - 大型应用

2. React -> 用户界面 View 视图层 -> 怎么把数据渲染到视图中
         -> 一个点 视图 -> 库
         -> 状态中央管理（Redux）x
         -> 路由(react-router) x

3. Vue   -> 用户界面 View 视图层 -> 怎么把数据渲染到视图中
         -> 一个点 视图 -> 核心库
         -> Vuex o (选择集成)
         -> vue-router o(选择集成)
         Micro libs

# 数据绑定和数据流

1. 数据绑定 -> 数据与视图渲染直接的关系
           -> React: 单向数据绑定 -> event -> state更改 -> 视图变更
           -> Vue: 双向数据绑定 
                  -> event -> state/data更改 -> 视图变更
                  -> v-model -> 视图变化 -> state/data变更

2. 数据流 -> 数据流淌的方向 -> 父子组件中 数据按照什么方向流动
         -> 单向数据流
         -> React/Vue -> 父组件 -> state -> 子组件 -> props
         -> 子组件 -> props变更 -> 父组件 -> state变更 x
         -> 父组件 -> state变更 -> 子组件 -> props 变更 o
         
         props: immutable value
         state/data: mutable value

3. 22.vue  RecommendTab数据
[
  [
    {
      id: 1,
      title: '北京环球度假区将于9月20日正式向公众开放',
      author: '环球时报',
      dateTime: '08-30 15:01'
    },
    {
      id: 2,
      title: '外媒：美国驻阿使馆主要人员已离开喀布尔',
      author: '京报网',
      dateTime: '08-30 21:58' 
    },
    {
      id: 3,
      title: '“女魔头”劳荣枝案何时宣判？南昌中院回应',
      author: '安徽网',
      dateTime: '08-30 16:33'
    }
  ],
  [
    {
      id: 1,
      title: '冰箱怎么选？什么样的更好用？我家换了三台冰箱，可以说一说感受',
      author: '装修第一站',
      dateTime: '2021-07-22 16:33',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/59c4d23e8491458ab9dffbc58f2d6556?from=pc',
      status: 0,
    },
    {
      id: 2,
      title: '孩子被吼时为什么不说话，知道真相后你还敢吼孩子吗？',
      author: '男孩派',
      dateTime: '2021-08-06 09:47',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/016b07cba31b48c19f094bb0a8915099.png?from=pc',
      status: 1
    },
    {
      id: 3,
      title: '浙江千亿富豪徐文荣，40岁创业，靠卖粪起家，创立900亿横店帝国',
      author: '戍楼吹角',
      dateTime: '2021-06-24 09:42',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/d232b80bb5ab456385cbfe162af59874?from=pc',
      status: 2
    }
  ],
  [
    {
      id: 1,
      name: '36氪',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.69a2cd84.PE6uURU56A_JREArUHOTMA?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=60611',
      follows: 18800
    },
    {
      id: 2,
      name: '京报网',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.ed185f66.Xf6-FXSHAq4IP0r9OkkLlg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=59100',
      follows: 339404
    },
    {
      id: 3,
      name: '新京报',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.c74011dd.zho-8ZBOlVTWIURQsNAPBw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=41011',
      follows: 5403958
    }
  ] 
]
