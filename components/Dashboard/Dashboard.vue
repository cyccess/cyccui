<template>
    <x-layout>
        <div slot="nav" class="module-wrapper">
            <div v-for="(group,index) in modules" :key="index" class="module-group">
                <div class="module-title">{{group.groupName}}</div>
                <ul>
                    <li v-for="(item,idx) in group.list" :key="idx" class="m-item">
                        <a-icon class="m-icon" :type="item.icon"/>
                        <p class="m-name">{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div slot="content" class="dashboard">
            <a-row :gutter="30" class="card-row">
                <a-col :span="12">
                    <a-card title="待办" :loading="loading">
                        <a href="#" slot="更多">more</a>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :span="12">
                    <a-card title="工作提醒" :loading="loading">
                        <a href="#" slot="更多">more</a>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
            </a-row>
            <a-row :gutter="30" class="card-row">
                <a-col :span="12">
                    <a-card title="保前项目跟踪" :loading="loading">
                        <a href="#" slot="更多">more</a>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :span="12">
                    <a-card title="上会项目" :loading="loading">
                        <a href="#" slot="更多">more</a>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
            </a-row>
            <a-row :gutter="30" class="card-row">
                <a-col>
                    <a-card title="项目跟踪" :loading="loading">
                        <a href="#" slot="更多">more</a>
                        <p>card content</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </x-layout>
</template>

<script>
import Vue from "vue";
import { Card, Row, Col } from "ant-design-vue";

Vue.use(Card);
Vue.use(Row);
Vue.use(Col);

export default {
  name: "x-dashboard",
  components: {},
  data() {
    return {
      loading: true,
      modules: [
        {
          groupName: "业务",
          list: [
            { name: "客户管理", icon: "bar-chart" },
            { name: "担保项目", icon: "project" },
            { name: "风险管理", icon: "area-chart" },
            { name: "合规管理", icon: "switcher" },
            { name: "委贷管理", icon: "usergroup-add" },
            { name: "查询统计", icon: "usergroup-add" },
            { name: "查询统计", icon: "area-chart" }
          ]
        },
        {
          groupName: "办公",
          list: [
            { name: "审批", icon: "audit" },
            { name: "投票", icon: "solution" }
          ]
        },
        {
          groupName: "财务",
          list: [
            { name: "财务管理", icon: "money-collect" },
            { name: "项目绩效", icon: "stock" }
          ]
        },
        {
          groupName: "系统",
          list: [{ name: "设置", icon: "setting" }]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dashboard {
  padding: 25px 30px;
  margin: 0 -15px;
  background: #f1f2f7;
}
.card-row {
  margin: 10px 0;
}

.module-wrapper {
  display: inline-block;
  height: 100%;
  width: 220px;
  overflow-y: auto;
  overflow-x: hidden;
}

.module-group {
    max-width: 200px;
  .module-title {
    position: relative;
    width: 170px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .module-title::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgb(196, 196, 196);
  }

  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .m-item {
    list-style: none;
    float: left;
    width: 100px;
    padding-bottom: 5px;
    text-align: center;
    .m-icon {
      font-size: 24px;
      color: #c6281f;
    }
    .m-name {
      font-size: 13px;
    }
  }
}
</style>
