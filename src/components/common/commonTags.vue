<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :key="index"
        :class="{'active': isActive(item.path)}"
      >
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary" style="border-radius: 2px !important">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import bus from "../../service/bus";
export default {
  name: "commonTags",
  data() {
    return {
      tagsList: [],
    };
  },
  created() {
    this.setTags(this.$route);
  },
  methods: {
    // 判断当前路由是否匹配当前tag
    isActive(path) {
      return path === this.$route.fullPath;
    },

    // 关闭标签
    closeTags(index) {
      let currentItem = this.tagsList.splice(index, 1)[0];
      let item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        currentItem.path === this.$route.fullPath &&
          this.$router.push(item.path);
      } else {
        this.$router.push("/dashboard");
      }
    },

    // 设置标签
    setTags(route) {
      let isExist = this.tagsList.find((item) => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
        });
      }
      bus.$emit("tags", this.tagsList);
    },

    // 关闭其他选项
    handleCloseOther() {
      let currentItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = currentItem;
    },

    // 关闭所有选项
    handleCloseAll() {
      this.tagsList = [];
      this.$router.push("/dashboard");
    },

    // 标签选项
    handleTags(val) {
      val === "other" ? this.handleCloseOther() : this.handleCloseAll();
    },
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    },
  },
  computed: {
    showTags() {
      return this.tagsList && this.tagsList.length > 0;
    },
  },
};
</script>

<style scoped>
.tags {
  position: relative;
  height: 38px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 5px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 26px;
  line-height: 28px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  border-radius: 2px;
}

.tags-li .active .tags-li-icon {
  background-color: red;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 5px;
  top: 0;
  box-sizing: border-box;
  padding-top: 5px;
  text-align: center;
  height: 30px;
  z-index: 10;
}

.tags-li.active {
  border: 1px solid #6190e8;
  background-color: #6190e8;
}
</style>
