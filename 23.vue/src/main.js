import App from './*App';

const app = Vue.createApp(App);

// 全局注册 - 组件名  kebab-case
app.component('todo-item', {});

// 单文件组件 - 组件名 PascalCase 
export default {
  name: 'TodoItem'
}

// ----------------------------
// prop定义规则：定义类型、默认值、验证(详细)

/**
 * 它们写明了组件的 API，所以组件的设计用法可以通俗易懂；
 * 在开发环境下，如果为一个组件提供了格式不正确的 prop，
 * Vue 将会告警，以帮助你捕获潜在的错误来源。
 */
export default {
  // props: ['status'], // x
  props: {
    status: {
      type: Number,
      require: true,
      default: 0,
      validator: status => {
        return [0, 1, 2].includes(status);
      }
    }
  }
}

// -------------------------------------------
// 单文件组件的style作用域
/**
 * 原则上我们应该针对class进行优化，尽量保证样式类的独立性
 * 或父级样式类的限制影响范围 
 * 
 * 避免使A组件的样式影响到其他组件的样式
 * 
 * 三种方式将组件样式影响限制在组件内部
 * 
 * Scope attribute
 * <style scoped>
 *   .modal-open {}
 *   .modal-close {}
 * </style>
 * 
 * CSS Modules
 * <style module>
 *   .modalOpen {}
 *   .modalClose {}
 * </style>
 * 
 * <button :class="[$style.modalOpen, $style.modalClose]"></button>
 * 
 * // BEM约定 CSS命名规范
 * 本质是将Block/Element/Modifier分开定义
 * 
 * <div class="header header--type-primary">
 *   <div class="header__input"></div>
 * </div>
 * 
 * <style >
 *   .base-modal--open {}
 *   .base-modal--olose {}
 * </style>
 * 
 * <button class="[.base-modal--open, .base-modal--olose]"></button>
 */

// ---------------------------------



app.mount('#app');
