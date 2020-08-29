<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-form :inline="true" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户名 :">
                <span>启回收</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年龄 :">
                <span>18</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别 :">
                <span>男</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="所学专业 :">
                <span>计算机科学与技术</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="籍贯 :">
                <span>安徽省蚌埠市</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="毕业学校 :">
                <span>南京航空航天大学</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>其他信息</span>
      </div>
      <div>
        <el-form :inline="true" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="曾用名 :">
                <span>无</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="家庭人数 :">
                <span>4人</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="寄宿方式 :">
                <span>住校</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="学生来源 :">
                <span>正常入学</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="家庭住址 :">
                <span>安徽省蚌埠市马栏山村大庄组100号</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>教育经历</span>
      </div>
      <div>
        <el-table :data="eduList">
          <el-table-column label="入校时间" prop="startDate"></el-table-column>
          <el-table-column label="离校时间" prop="endDate"></el-table-column>
          <el-table-column label="毕业学校" prop="school"></el-table-column>
          <el-table-column label="学历" prop="edu"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "form-detail",
  data() {
    return {
      eduList: [
        {
          startDate: "2014-10-01",
          endDate: "2018-10-01",
          school: "南京航空航天大学",
          edu: "本科",
        },
        {
          startDate: "2014-10-01",
          endDate: "2011-10-01",
          school: "怀远一中",
          edu: "高中",
        },
        {
          startDate: "2011-10-01",
          endDate: "2008-10-01",
          school: "实验中学",
          edu: "初中",
        },
        {
          startDate: "2008-10-01",
          endDate: "2003-10-01",
          school: "马栏山第一小学",
          edu: "小学",
        },
      ],
    };
  },
};
</script>

<style scoped>
.line-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
}
</style>