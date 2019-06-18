<template>
  <div>
    <child-dom></child-dom>
  </div>
</template>
<script>
import childDom from "./childDom.vue";
export default {
  name: "father-dom",
  components: { childDom }
};
</script>