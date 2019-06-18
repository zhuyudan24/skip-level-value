<template>
  <div  class="componentC-wrap">
    <p>{{msg}}</p>
    <p>ageC:{{ageC}}</p>
    <p>$attrs:{{$attrs}}</p>
  </div>
</template>

<script>
export default {
  name: 'componentC',
  props:["ageC"],
  data () {
    return {
      msg: 'This is componentC'
    }
  },
  mounted(){
    this.$emit('testC','nameC');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componentC-wrap{
  color: #000;
  font-size: 16px;
}
</style>
