<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <x-header></x-header>
    </a-layout-header>
    <a-layout class="view-wrapper">
      <a-layout-sider class="nav">
        <slot name="nav">
          <x-menu></x-menu>
        </slot>
      </a-layout-sider>
      <a-layout class="page-wrapper">
        <a-row>
          <a-col :span="24">
            <slot name="title">
              <div v-if="showTitle" class="page-title">
                <span class="title">{{title}}</span>
              </div>
            </slot>
            <a-layout-content :style="{ background: '#fff',margin: 0, minHeight: '0' }">
              <slot name="content"></slot>
            </a-layout-content>
          </a-col>
        </a-row>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  name: "x-layout",
  components: {},
  props: {
    title: {
      type: String,
      default: "Title",
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
      collapsed: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: auto;
  line-height: inherit;
  padding: 0;
}

.view-wrapper {
  position: absolute;
  left: 0;
  top: 64px;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: #d9dee4;
  overflow: hidden;
}

.page-wrapper {
  position: absolute;
  width: auto;
  top: 0px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s ease;
  background: #fff;
}

.ant-breadcrumb {
  margin: 15px 0;
}

.ant-col-24 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
}
.page-title {
  margin-left: -15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #efefef;
  background: #fff;
  .title {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #73777a;
    padding: 16px 0 16px 20px;
  }
}
</style>
