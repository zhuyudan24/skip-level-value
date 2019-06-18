<template>
  <div class="componentA-wrap">
    <h2>$attrs与$listeners</h2>
    <p >{{msg}}</p>
    <componentB :ageB="ageB"  @testB="testB" :ageC="ageC" @testC="testC" ></componentB>
    <router-link :to="'two'">dispatch与broadcast跨级传值方式</router-link>
    <br>
    <router-link :to="'three'">provide与inject跨级传值方式</router-link>
  </div>
</template>

<script>
import componentB from './componentB'
export default {
  name: 'componentA',
  data () {
    return {
      msg: 'This is componentA',
      ageB:'23B',
      ageC:'23C',
    }
  },
  methods:{
    testC(msg){
      console.log('testC...',msg)
    },
    testB(msg){
      console.log('testB...',msg)
    }
  },
  components:{
    componentB
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componentA-wrap{
  color: #f00;
  font-size: 16px;
}
</style>
