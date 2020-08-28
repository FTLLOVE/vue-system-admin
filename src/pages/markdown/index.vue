<template>
  <div class="container">
    <div style="margin-bottom: 20px">
      <span style="color: #515a6e;font-weight: bold">使用mavonEditor的插件，可以使用 v-model 绑定数据。</span>
    </div>
    <mavon-editor v-model="doc"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "markdown",
  components: { mavonEditor },
  data() {
    return {
      doc: "",
    };
  },
};
</script>

<style scoped>
</style>