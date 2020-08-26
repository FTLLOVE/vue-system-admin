<template>
  <div class="wrapper">
    <v-Header></v-Header>
    <div class="content-box">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./common/Header";
export default {
  components: {
    vHeader,
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>