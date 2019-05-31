
import Header from './Header';
import Menu from './Menu'


const components=[
    Header,
    Menu
];


const install = function(Vue) {
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
  Menu
};

export default {
  install,
};
