
import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
Vue.use(VueRouter);//使用路由

//电影组件
import movie from './components/movie/movie.vue'
//图书组件
import book from  './components/book/book.vue'
//个人组件
import individual from './components/individual/individual .vue'
//音乐组件
import cloudMusic from './components/cloudMusic/cloudMusic.vue'
import cloudDetial from './components/cloudMusic/detial.vue';//人物歌曲
import cloundSong from './components/cloudMusic/song.vue';//歌曲

//搜索组件
import searchshow from './components/search/searchshow.vue'
import searchpage from './components/search/searchpage.vue'//搜索详情
//详情
import particulars from './components/particulars/particulars.vue'
//更多
import moreshow from './components/more/more.vue';

const routes=[
        //默认跳转
        {path:'/',component:movie,meta:{keepAlive:true}},
        //电影
        {path:'/movie',component:movie,meta:{keepAlive:true}},
        //图书
        {path:'/book',component:book,meta:{keepAlive:true}},
        //个人
        {path:'/individual',component:individual,meta:{keepAlive:true}},
        //音乐
        {path:'/cloudMusic',component:cloudMusic,meta:{keepAlive:true}},
        {name:'cloudDetial',path:'/cloudDetial/:name/:cloudID',component:cloudDetial,}, //人物歌曲列表
        {name:'cloudSong',path:'/cloudSong/:songID/:index',component:cloundSong},//歌曲播放
        //搜索
        {path:'/searchpage',component:searchpage},
        {name:'searchshow',path:'/searchshow',component:searchshow},//搜索详情
        //详情页
        {path:'/particulars/:name/:id',component:particulars},
        //更多
        {path:'/:name/moreshow/:id',component:moreshow},
    ];

export default new VueRouter({
    linkActiveClass :'mui-active',//跳转默认
    routes
})