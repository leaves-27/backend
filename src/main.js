import Vue from 'vue'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
