<template>
  <div class="container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-select v-model="formInline.region" placeholder clearable>
          <el-option label="南京航空航天大学" value="nuaa"></el-option>
          <el-option label="南京理工大学" value="nust"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" icon="el-icon-refresh">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <el-image
            lazy
            style="width: 50px; height: 50px;border-radius: 5px"
            :src="scope.row.img"
            :preview-src-list="scope.row.srcList"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="school" label="学校"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" type="danger">异常</el-tag>
          <el-tag v-else type="success">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="入学时间"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini" plain type="primary">编辑</el-button>
          <el-button size="mini" plain type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="100"
        layout="total,  prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "btable",
  data() {
    return {
      tableData: [
        {
          name: "启回收",
          age: 18,
          school: "南京航空航天大学",
          date: "2020-10-01",
          img: "https://www.qihuishou.club/images/logo.png",
          srcList: ["https://www.qihuishou.club/images/logo.png"],
          status: 1,
        },
        {
          name: "启回收",
          age: 18,
          school: "南京航空航天大学",
          date: "2020-10-01",
          img: "https://www.qihuishou.club/images/logo.png",
          srcList: ["https://www.qihuishou.club/images/logo.png"],
          status: 0,
        },
        {
          name: "启回收",
          age: 18,
          school: "南京理工大学",
          date: "2020-10-01",
          img: "https://www.qihuishou.club/images/logo.png",
          srcList: ["https://www.qihuishou.club/images/logo.png"],
          status: 1,
        },
        {
          name: "启回收",
          age: 18,
          school: "南京航空航天大学",
          date: "2020-10-01",
          img: "https://www.qihuishou.club/images/logo.png",
          srcList: ["https://www.qihuishou.club/images/logo.png"],
          status: 0,
        },
        {
          name: "启回收",
          age: 18,
          school: "南京理工大学",
          date: "2020-10-01",
          img: "https://www.qihuishou.club/images/logo.png",
          srcList: ["https://www.qihuishou.club/images/logo.png"],
          status: 1,
        },
      ],
      total: 1000,
      currentPage4: 0,
      formInline: {
        username: "",
        region: "",
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style scoped>
</style>