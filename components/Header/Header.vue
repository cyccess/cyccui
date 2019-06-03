<template>
  <div class="topbar">
    <div @mouseover="showDrawer" class="topbar-menu">
      <a-icon type="bars" class="menu-icon"/>
    </div>
    <div class="logo">
      <LogoSvg alt="logo"/>
      <h1 v-if="showTitle">{{ title }}</h1>
    </div>
    <a-drawer :wrapStyle="{top:'64px'}"
      title="Basic Drawer"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
import Vue from "vue";
import { Drawer } from "ant-design-vue";

Vue.use(Drawer);

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
      visible: false
    };
  },
  methods: {
    showDrawer() {
      setTimeout(() => {
        this.visible = true;
      }, 200);
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style scoped lang="less">
.topbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  z-index: 999 !important;

  &-menu {
    float: left;
    height: 64px;
    width: 64px;
    padding: 16px;
    background: #c6281f;
    .menu-icon {
      font-size: 32px;
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
}

.sidebar{
  top:64px;
}
</style>
