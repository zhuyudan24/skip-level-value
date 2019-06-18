<template>
  <div  class="componentB-wrap">
    <p>{{msg}}</p>
    <p>$attrs:{{$attrs}}</p>
    <!-- C组件中能直接触发testC的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 (不含 .native 修饰器的) -->
    <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
    <componentC v-bind="$attrs" v-on="$listeners"></componentC>
  </div>
</template>

<script>
import componentC from './componentC'
export default {
  name: 'componentB',
  props:{
    ageB:{
      type:String,
      default:'默认23B'
    }
  },
  // inheritAttrs:false,
  data () {
    return {
      msg: 'This is componentB'
    }
  },
  // mounted(){
  //   this.$emit('testB','nameB');
  // },
  components:{
    componentC
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componentB-wrap{
  color: #f0F;
  font-size: 16px;
}
</style>
