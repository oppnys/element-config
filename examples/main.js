import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui';
Vue.use(element)

import 'element-ui/lib/theme-chalk/index.css';

import elementConfig from '../packages/index';

console.log(elementConfig)

Vue.use(elementConfig);
Vue.prototype.FormType = elementConfig.FormType;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
