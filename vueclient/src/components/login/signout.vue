<template>
  <div></div>
</template>
<script>
  import tool from "./utils/utils";
  export default {
    mounted() {
      tool.clearSSO(this.$router);
    }
  }
</script>
