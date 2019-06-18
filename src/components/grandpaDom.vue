<template>
  <div>
    <father-dom>
    </father-dom>
  </div>
</template>
<script>
import fatherDom from "./fatherDom.vue";
export default {
  provide: {
    fooNew: "bar"
  },
  data() {
    return {};
  },
  components: { fatherDom },
  methods: {}
};
</script>