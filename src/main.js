
import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'//引入请求
import store from './store'

Vue.use(VueResource);//使用请求
import router from './router'

//ui组件包
import './common/mui/css/mui.css'
import './common/mui/css/icons-extra.css'

import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint);//使用
//初始化样式
import './common/css/stylus/public.styl'

new Vue({
    store,
    el: '#app',
    router,//路由
    render: create => create(App)
});
