# tree-component-value

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 打包文档分析
npm run build --report
```

## 说明
``` bash
# 第一种方式 $attrs  $listeners 只实现了 爷到孙 的传值
componentA > componentB > componentC
利用  v-bind="$attrs" v-on="$listeners" 实现
v-bind属性$attr,保证C组件能够获取到A组件传递下来的props(除props属性中声明的属性以外)；
v-on属性$listeners，则保证C组件能直接调用A组件的方法(不含 .native 修饰器的)

# 第二种方式 互相传值 broadcast 与 dispatch
$on和$emit 联合起来使用。 
this.$emit 触发的自定义事件，然后在父组件上面监听这个自定义事件。这里看似是在父组件处理自定义事件
但是是在子组件上面触发的。所以我们完全可以在祖先组件上监听。
```

 