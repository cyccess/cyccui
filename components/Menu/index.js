
import Menu from './Menu'


Menu.install = Vue => {
  Vue.component(Menu.name, Menu);
};//注册组件

export default Menu;