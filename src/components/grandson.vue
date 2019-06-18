<template>
  <div class="grandson-wrap">
    我是孙组件：{{parentVal}}
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
export default {
  name: 'grandson',
  mixins:[Emitter],
  data(){
    return{
      parentVal:''
    }
  },
  created(){
    this.$on("grandson-message", this.showMessage);
    this.dispatch("parent", "grandson-to-p", "这是孙组件的值");
  },
  methods:{
    showMessage(text){
      this.parentVal = text;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grandson-wrap{
  color: #000;
  font-size: 16px;
}
</style>
