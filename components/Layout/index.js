
import Layout from './Layout'


Layout.install = Vue => {
  Vue.component(Layout.name, Layout);
};//注册组件

export default Layout;