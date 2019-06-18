<template>
  <div class="parent-wrap">
    我是父组件：{{grandsonVal}}
    <br>
    <button @click="handleClick">传值给孙组件</button>
    <child></child>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import child from './child'
export default {
  name: 'parent',
  mixins:[Emitter],
  data(){
    return{
      grandsonVal:''
    }
  },
  created () {
    this.$on("grandson-to-p", this.handleChild);
  },
  methods:{
    handleClick(){
      this.broadcast('grandson','grandson-message','我是父组件的值')
    },
    handleChild(val) {
      console.log(val);
      this.grandsonVal = val
    }
  },
  components:{
    child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent-wrap{
  color: #f00;
  font-size: 16px;
  cursor: pointer;
}
</style>
