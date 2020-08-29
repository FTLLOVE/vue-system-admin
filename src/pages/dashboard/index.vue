<template>
  <div class="container">
    <el-row :gutter="15">
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-notebook-2" style="color: #FE8823; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">基本表格</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-reading" style="color: #EA6646; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">基本表单</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-s-help" style="color: #7687F1; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">表单详情</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-s-grid" style="color: #4FD3BE; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">markdown</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-upload" style="color: #E6A23C; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">文件上传</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-discover" style="color: #F56C6C; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">自定义图标</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-pie-chart" style="color: #FF7361; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">charts图标</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div class="card-item">
            <div>
              <i class="el-icon-aim" style="color: #65CCED; font-size: 30px"></i>
            </div>
            <div style="color: #515a6e;font-size: 14px;margin-top: 10px">国际化</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>用户总数</span>
              <el-tooltip style="float:right" content="用户总数" placement="top-start">
                <i class="el-icon-user" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">66666人</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>总订单数</span>
              <el-tooltip style="float:right" content="总订单数" placement="top-start">
                <i class="el-icon-document" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="font-size: 30px;color: #515a6e">2231单</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日完成订单数</span>
              <el-tooltip style="float:right" content="总订单数" placement="top-start">
                <i class="el-icon-view" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="margin-top: 20px">
              <el-progress :stroke-width="20" :percentage="32"></el-progress>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日销售额</span>
              <el-tooltip style="float:right" content="总订单数" placement="top-start">
                <i class="el-icon-s-promotion" style="color: #6190e8"></i>
              </el-tooltip>
            </div>
            <div style="color: #6190e8;font-size: 30px">￥88291.92</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-card>
            <ve-line :data="chartData1" :settings="chartSettings"></ve-line>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <ve-histogram :data="chartData2"></ve-histogram>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    this.chartSettings = {
      metrics: ["总订单数", "完成订单数"],
      dimension: ["日期"],
    };
    return {
      chartData1: {
        columns: ["日期", "总订单数", "完成订单数"],
        rows: [
          { 日期: "1/1", 总订单数: 2530, 完成订单数: 230 },
          { 日期: "1/2", 总订单数: 3530, 完成订单数: 530 },
          { 日期: "1/3", 总订单数: 2923, 完成订单数: 923 },
          { 日期: "1/4", 总订单数: 1723, 完成订单数: 723 },
          { 日期: "1/5", 总订单数: 3792, 完成订单数: 792 },
          { 日期: "1/6", 总订单数: 4593, 完成订单数: 493 },
          { 日期: "1/7", 总订单数: 4593, 完成订单数: 193 },
          { 日期: "1/8", 总订单数: 4593, 完成订单数: 293 },
          { 日期: "1/9", 总订单数: 593, 完成订单数: 593 },
          { 日期: "1/10", 总订单数: 493, 完成订单数: 293 },
          { 日期: "1/11", 总订单数: 1593, 完成订单数: 593 },
          { 日期: "1/12", 总订单数: 4593, 完成订单数: 593 },
        ],
      },
      chartData2: {
        columns: ["日期", "下载量", "点击量"],
        rows: [
          { 日期: "1/1", 下载量: 1393, 点击量: 1093 },
          { 日期: "1/2", 下载量: 3530, 点击量: 3230 },
          { 日期: "1/3", 下载量: 2923, 点击量: 2623 },
          { 日期: "1/4", 下载量: 1723, 点击量: 1423 },
          { 日期: "1/5", 下载量: 3792, 点击量: 3492 },
          { 日期: "1/6", 下载量: 4593, 点击量: 4293 },
        ],
      },
    };
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>