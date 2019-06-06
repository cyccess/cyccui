<template>
  <div class="nav-menu-wrapper">
    <a-menu mode="inline" class="nav-menu">
      <a-sub-menu v-for="(sub,index) in menus" :key="'sub'+index">
        <span slot="title">
          <span>{{sub.name}}</span>
        </span>
        <a-menu-item v-for="item in sub.list" :key="item.id">
          <a-icon :type="item.icon"/>
          <span>{{item.name}}</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: "x-menu",
  data() {
    return {
      collapsed: false,
      menus: [
        {
          name: "用户管理",
          list: [
            { id: 1, name: "内部人员", icon: "file" },
            { id: 2, name: "外部人员", icon: "file" }
          ]
        },
        {
          name: "权限管理",
          list: [
            { id: 3, name: "授权", icon: "file" },
            { id: 4, name: "策略", icon: "file" },
            { id: 5, name: "角色", icon: "file" }
          ]
        },
        {
          name: "财务管理",
          list: [
            { id: 6, name: "统一结算", icon: "file" },
            { id: 7, name: "资金往来", icon: "file" },
            { id: 8, name: "消费总览", icon: "file" },
            { id: 9, name: "消费明细", icon: "file" },
            { id: 10, name: "账单", icon: "file" }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.nav-menu-wrapper .ant-menu {
  background-color: transparent;
}

.nav-menu-wrapper .ant-menu-item {
  transition: 0s;
}

.nav-menu-wrapper .ant-menu-sub.ant-menu-inline > .ant-menu-item:hover {
  background-color: #fff3f0;
}
</style>

<style lang="less" scoped>
.nav-menu-wrapper {
  display: inline-block;
  height: 100%;
  width: 220px;
  overflow-y: auto;
  overflow-x: hidden;
}

.nav-menu {
  max-width: 200px;
  min-width: 200px;
}
</style>
