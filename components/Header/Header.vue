<template>
  <div class="topbar">
    <div @mouseover="showDrawer" class="topbar-menu">
      <a-icon type="bars" class="menu-icon"/>
    </div>
    <div class="logo">
      <LogoSvg alt="logo"/>
      <h1 v-if="showTitle">{{ title }}</h1>
    </div>
    <div class="info-wrapper">
      <a-popover
        v-model="popVisible"
        trigger="click"
        placement="bottomRight"
        overlayClassName="header-notice-wrapper"
        :autoAdjustOverflow="true"
        :arrowPointAtCenter="true"
        :overlayStyle="{ width: '300px'}"
      >
        <template slot="content">
          <a-spin :spinning="loadding">
            <a-tabs>
              <a-tab-pane tab="通知" key="1">321</a-tab-pane>
              <a-tab-pane tab="消息" key="2">123</a-tab-pane>
              <a-tab-pane tab="待办" key="3">123</a-tab-pane>
            </a-tabs>
          </a-spin>
        </template>
        <span class="header-notice action" @click="fetchNotice">
          <a-badge count="5">
            <a-icon type="bell" style="font-size:16px;padding:4px;"/>
          </a-badge>
        </span>
      </a-popover>
      <a-dropdown>
        <span class="action user-dropdown-menu">
          <a-avatar icon="user" :size="24" class="avatar"/>
          <span>业务经理</span>
        </span>action
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="1">
            <a-icon type="user"/>个人中心
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="setting"/>账户设置
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="3">
            <a-icon type="logout"/>退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-drawer
      title="所有功能"
      :wrapStyle="{top:'64px'}"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <a-menu style="margin:-24px">
        <a-menu-item-group v-for="(group,index) in modules" :key="'g'+index">
          <template slot="title">
            <span>{{group.groupName}}</span>
          </template>
          <a-menu-item v-for="item in group.list" :key="item.key">
            <a-icon :type="item.icon"/>
            <span>{{item.name}}</span>
          </a-menu-item>
        </a-menu-item-group>
      </a-menu>
    </a-drawer>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Drawer,
  Menu,
  Icon,
  Badge,
  Dropdown,
  Avatar,
  Popover,
  Spin,
  Tabs
} from "ant-design-vue";

Vue.use(Drawer);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Popover);
Vue.use(Spin);
Vue.use(Tabs);

import LogoSvg from "@/assets/logo.svg";
import { setTimeout } from "timers";
export default {
  name: "x-header",
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: "兴农融资担保",
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      loadding: false,
      visible: false,
      popVisible: false,
      modules: [
        {
          groupName: "业务",
          list: [
            { key: 1, name: "客户管理", icon: "bar-chart" },
            { key: 2, name: "担保项目", icon: "project" },
            { key: 3, name: "风险管理", icon: "area-chart" },
            { key: 4, name: "合规管理", icon: "switcher" },
            { key: 5, name: "委贷管理", icon: "usergroup-add" },
            { key: 6, name: "查询统计", icon: "usergroup-add" },
            { key: 7, name: "查询统计", icon: "area-chart" }
          ]
        },
        {
          groupName: "办公",
          list: [
            { key: 8, name: "审批", icon: "audit" },
            { key: 9, name: "投票", icon: "solution" }
          ]
        },
        {
          groupName: "财务",
          list: [
            { key: 10, name: "财务管理", icon: "money-collect" },
            { key: 11, name: "项目绩效", icon: "stock" }
          ]
        },
        {
          groupName: "系统",
          list: [{ key: 12, name: "设置", icon: "setting" }]
        }
      ]
    };
  },
  methods: {
    showDrawer() {
      setTimeout(() => {
        this.visible = true;
      }, 300);
    },
    onClose() {
      this.visible = false;
    },
    fetchNotice() {
      if (!this.popVisible) {
        this.loadding = true;
        setTimeout(() => {
          this.loadding = false;
        }, 500);
      } else {
        this.loadding = false;
      }
      this.popVisible = !this.popVisible;
    }
  }
};
</script>
<style>
.header-notice-wrapper {
  top: 50px !important;
}
</style>

<style scoped lang="less">
.topbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  padding-right: 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  z-index: 999 !important;

  &-menu {
    float: left;
    height: 64px;
    width: 64px;
    padding: 18px;
    background: #c6281f;
    .menu-icon {
      font-size: 28px;
      color: #fff;
    }
  }

  .logo {
    float: left;
    line-height: 64px;
    padding-left: 15px;
    transition: all 0.3s;
    .icon {
      display: inline-block;
      width: 36px;
      height: 35px;
      vertical-align: middle;
    }
    h1 {
      display: inline-block;
      margin: 0;
      padding-left: 10px;
      vertical-align: middle;
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }
  }

  .info-wrapper {
    float: right;
    height: 100%;
    line-height: 64px;
    .action {
      cursor: pointer;
      padding: 0 12px;
      display: inline-block;
      transition: all 0.3s;
      height: 100%;
      color: rgba(0, 0, 0, 0.65);
    }
    .avatar {
      margin-right: 8px;
      display: inline-block;
      vertical-align: middle;
      width: 24px;
      height: 24px;
      line-height: 24px;
    }
  }
}

.sidebar {
  top: 64px;
}
.user-dropdown-menu-wrapper.ant-dropdown-menu .ant-dropdown-menu-item {
  width: 160px;
}
</style>
