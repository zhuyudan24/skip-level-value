<template>
  <div>
    <p>fooNew：{{fooNew}}</p>
  </div>
</template>
<script>
export default {
  name: "childDom",
  inject: ["fooNew"],
  methods: {}
};
</script>