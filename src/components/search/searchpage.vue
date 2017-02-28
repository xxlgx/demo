<template>
    <transition name="move">
        <div class="searchpage">
            <div class="header">
                <input type="text" placeholder="影视 图书 唱片 小组 舞台剧等" @keyup.enter="gosacshow" ref="getvalue">
                <span class="sosuo iconfont icon-sousuo"></span>
                <span class="close" @click="show">关闭</span>
            </div>
            <div class="seacrchmenu">
                <ul class="seacrchmenu-ul">
                    <li class="seacrchmenu-li" v-for="item in dataObj.menu">
                        <a href="#" class="text">
                            <p :style="{ color: item.color }">{{item.title}}</p>
                            <span>{{item.text}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="seacrchbtm">
                <a href="#" class="goto">
                    <span>注册账号</span>
                </a>
                <a href="#" class="goto">
                    <span>登陆豆瓣</span>
                </a>
                <a href="#" class="goto">
                    <span>使用桌面版</span>
                </a>
                <a href="#" class="goto">
                    <span>使用豆瓣App</span>
                </a>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            dataObj:{//本地过来的数据
                type:Object
            }
        },
        data() {
            return {
                showsearch:false,
            }
        },
        methods:{
            show() {//关闭 返回上次的位置
                this.$router.go(-1);
            },
            gosacshow() {
                //获取搜索框里面的内容
                let value =this.$refs.getvalue.value;
                //跳转路由 搜索内容
                this.$router.push({ path: 'searchshow', query: { val: value }});
                //清空输入框
                this.$refs.getvalue.value =''
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .searchpage
        position :fixed
        top :0
        left :0
        right :0
        bottom :0
        z-index :50
        width: 100%
        background-color: #fff
        .header
            position :relative
            padding :15px 18px 15px 60px
            border-bottom:1px solid #f3f3f3
            input
                width:100%
                height:31px
                padding :0px 0px 0px 35px
                margin :0
                border:0
                border-radius:3px
                font-size :16px
                background-color: #f3f3f3
            .sosuo
                position :absolute
                top:20px
                left :68px
                font-size :22px
                color :#bbb
            .close
                position :absolute
                top:20px
                left :15px
                font-size 16px
                color :#00b600
        .seacrchmenu
            .seacrchmenu-ul
                display :flex
                flex-wrap :wrap
                border-bottom :1px solid #eee
                .seacrchmenu-li
                    width: 33.3333%
                    .text
                        display: block
                        text-align :center
                        padding :20px
                        p
                            font-size:24px
                        span
                            font-size:12px
                            color:#999
        .seacrchbtm
            display :flex
            flex-wrap :wrap
            .goto
                display :inline-block
                width: 50%
                height: 40px
                padding :10px 0px
                text-align :center
                border-bottom :1px solid #eee
                font-size :15px
                color:#00b600
                span
                    display :block
                    border-right :1px solid #eee
            .goto:nth-child(2n) span
                border-right :none
    .move-enter-active,.move-leave-active {
        transition:all 0.2s linear
        transform:translate3d(0,0,0)
    }
    .move-enter, .move-leave-active {
        transform:translate3d(-100%,0,0)
    }
</style>