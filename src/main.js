// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
import index from './components/index';
import Ranking from './components/Ranking'
import 'mint-ui/lib/style.css';




Vue.component(index.name,index);
Vue.component(Ranking.name,Ranking);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
