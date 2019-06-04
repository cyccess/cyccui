import Header from './Header';
import Menu from './Menu';
import Layout from './Layout'
import Dashboard from './Dashboard'

const components = [
  Header,
  Menu,
  Layout,
  Dashboard,
];

const install = function (Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export {
  install,
  Header,
  Menu,
  Layout,
  Dashboard,
};

export default {
  install,
};