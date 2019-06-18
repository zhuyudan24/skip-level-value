/**
 * broadcast 事件广播
 * @param { 组件名 } componentName
 * @param { 事件名 } eventName
 * @param { 参数 } params
 * 遍历寻找所有子孙组件，假如子孙组件和componentName组件名称相同的话，则触发$emit的事件方法，数据为 params.
 如果没有找到 则使用递归的方式 继续查找孙组件，直到找到为止，否则继续递归查找，直到找到最后一个都没有找到为止。 
 */
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName, params]);
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
/* 
 * dispatch 查找所有父级，直到找到要找到的父组件，并在身上触发指定的事件。派发 向上查找
 @param { componentName } 组件名称
 @param { eventName } 事件名
 @param { params } 参数
 */
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 广播 向下查找
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
