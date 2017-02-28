<template>
    <div class="box">
        <!--顶部栏-->
        <mt-header :title="name" class="app-header">
            <a slot="left" class="xxback" v-if="flag" @click="comeBack">
                <mt-button icon="back"></mt-button>
            </a>
            <router-link class="iconfont icon-sousuo" to="/searchpage"></router-link>
            <router-link class="iconfont icon-sousuo" to="/searchpage" slot="right"></router-link>
        </mt-header>
        <!--视图-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :dataObj="dataObj"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :dataObj="dataObj"></router-view>
        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/movie">
                <span class="mui-icon iconfont icon-dianying"></span>
                <span class="mui-tab-label">电影</span>
            </router-link>
            <router-link class="mui-tab-item" to="/book">
                <span class="mui-icon iconfont icon-icon-copy"></span>
                <span class="mui-tab-label">图书</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cloudMusic">
                <span class="mui-icon iconfont icon-guangbo"></span>
                <span class="mui-tab-label">音乐</span>
            </router-link>
            <router-link class="mui-tab-item" to="/individual">
                <span class="mui-icon iconfont icon-xiaozuguanli"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                name: '豆瓣电影',//标题
                dataObj:{},//传给电影组件调用
                flag:false//返回按钮
            }
        },
        watch:{//监听路由 更改标题变化
            '$route':function (newVal,oldVal) {
                switch (newVal.fullPath){
                    case '/':
                        this.name ='豆瓣电影';
                        this.flag=false;
                        break;
                    case '/movie':
                        this.name ='豆瓣电影';
                        this.flag=false;
                        break;
                    case '/book':
                        this.name ="豆瓣图书";
                        this.flag=false;
                        break;
                    case '/cloudMusic':
                        this.name ="豆瓣音乐";
                        this.flag=false;
                        break;
                    case '/individual':
                        this.name ="个人中心";
                        this.flag=false;
                        break;
                    default:
                        this.flag=true
                }

            }
        },
        methods: {
            getData() {//本地数据。。。。全局用  传到子组件
                this.$http.get('../data.json')
                    .then(res=>{
                        //本地数据
                        this.dataObj =res.body
                    })
            },
            comeBack(){
                this.$router.go(-1);
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .box
        width: 100%
        overflow hidden
        .app-header
            position :fixed
            top :0
            left :0
            width: 100%
            height: 40px
            border-bottom:1px solid #eee
            text-align :center
            line-height: 40px
            background-color: #fff
            z-index :30
            color :#00b600
            font-weight :700
            font-size :20px
            .mint-button
                height 38px
            .icon-sousuo
                position :fixed
                top :0
                right :18px
                width: 40px
                height: 40px
                font-size :20px
        .mui-bar-tab
            .mui-tab-item.mui-active
                color: #00b600
                background-color: #fff
</style>