<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.username" class="input-wrapper"></el-input>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-select v-model="form.school" class="input-wrapper">
          <el-option label="南京航空航天大学" value="nuaa"></el-option>
          <el-option label="南京理工大学" value="nust"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="在校时间">
        <div>
          <el-date-picker
            v-model="form.startDate"
            type="datetime"
            placeholder="入学日期"
            class="input-wrapper"
          />
          <span style="margin: 0 10px;color: #DCDFE6">-</span>
          <el-date-picker
            v-model="form.startDate"
            type="datetime"
            placeholder="离校日期"
            class="input-wrapper"
          />
        </div>
      </el-form-item>
      <el-form-item label="所学专业">
        <el-cascader :options="options" class="input-wrapper">
          <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf">({{ data.children.length }})</span>
          </template>
        </el-cascader>
      </el-form-item>
      <el-form-item label="必修专业">
        <el-radio-group v-model="form.resource">
          <el-radio label="数据结构"></el-radio>
          <el-radio label="算法"></el-radio>
          <el-radio label="计算机操作系统"></el-radio>
          <el-radio label="数据库系统"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选修课">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="计算机组装与维修" name="type"></el-checkbox>
          <el-checkbox label="企业网安全高级技术" name="type"></el-checkbox>
          <el-checkbox label="计算机网络技术" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否在校">
        <el-switch v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-input type="textarea" v-model="form.desc" rows="4" style="width: 600px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "basicForm",
  data() {
    return {
      form: {
        name: "",
        school: "",
        startDate: "",
        endDate: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        status: true,
      },
      options: [
        {
          value: "hk",
          label: "航空学院",
          children: [
            {
              value: "fxqsj",
              label: "飞行棋设计与工程",
            },
            {
              value: "fxqhj",
              label: "飞行器环境与生命保障工程",
            },
          ],
        },
        {
          value: "ny",
          label: "能源与动力学院",
          children: [
            {
              value: "fxqdl",
              label: "飞行器动力工程",
            },
            {
              value: "ny",
              label: "能源与动力工程",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
</style>