<template>
  <div class="wrapper">
    <common-header></common-header>
    <common-sidebar></common-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <common-tags></common-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from "./common/commonHeader";
import commonSidebar from "./common/commonSidebar";
import commonTags from "./common/commonTags";
import bus from "../service/bus";

export default {
  components: {
    commonHeader,
    commonSidebar,
    commonTags,
  },
  data() {
    return {
      collapse: false,
    };
  },
  created() {
    // 控制折叠面板
    bus.$on("collapse-content", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>

<style scoped>
</style>
