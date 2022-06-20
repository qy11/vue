  /**有难度的题目*/
  function Foo() {
    getName = function () {
      console.log(1)
    }
    return this
  }
  Foo.getName = function () {
    console.log(2)
  }
  Foo.prototype.getName = function () {
    console.log(3)
  }
  var getName = function () {
    console.log(4)
  }
  function getName() {
    console.log(5)
  }


  
  Foo.getName() //2
  getName() //4 //函数声明在GO后被变量声明覆盖
  Foo().getName() // 1
  getName() //1 覆盖了
  new Foo.getName() // 2  .的优先级比new高
  new Foo().getName() // 3 ()括号的优先级比点.大，先执行()带着new一起执行
  new new Foo().getName() //3 ??
  var fn = function () {
    console.log(1)
  }
  function fn() {
    console.log(2)
  }
  fn() //1