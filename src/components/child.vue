<template>
  <div class="child-wrap" >
    <p>我是子组件</p>
    <grandson></grandson>
  </div>
</template>

<script>
import grandson from './grandson'
export default {
  name: 'child',
  components:{
    grandson
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child-wrap{
  color: #f0f;
  font-size: 16px;
}
</style>
