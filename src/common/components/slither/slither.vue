<template>
    <div class="pics">
        <div class="title">
            <span v-text="title"></span>
            <router-link v-bind="{to:'/'+name+'/moreshow/'+dataId}">更多</router-link>
        </div>
        <div class="pics-v" ref="picv">
            <ul class="pics-list" ref="piclist">
                <li class="picLi" v-for="item in list">
                    <router-link href="" class="godetails" v-bind="{to:'/particulars/'+name+'/'+item.id}">
                        <thumb :item="item"></thumb>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="loading" v-show="list == false">
            <img src="../../img/loading.gif" class="loadingimg">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'//回弹插件
    import urlObj from '../../js/fn'//获取公共请求域名
    import thumb from './thumbNailImage.vue'//略缩图组件
    export default {
        props:{
            getdata:{
                type:String//父组件获取请求地址
            },
            name:{
                type:String//电影类 movies
            }
        },
        data() {
            return {
                title:'',//标题
                list: [],//返回数据数组
                size:24,
                dataId:''//类别id
            }
        },
        methods: {
            getData(){
                //调用请求
                this.$http.jsonp(urlObj.murl+this.getdata).then(res=>{
                    //获取标题
                    this.title=res.body.subject_collection.name;
                    //内容数组
                    this.list =res.body.subject_collection_items;
                    //类别id
                    this.dataId=res.body.subject_collection.id;
                })
            },
            initPics() {//计算盒子宽度 做自适应
                let picWidth = 100;//单个略缩图宽度
                let margin = 6;//边距
                let width = (picWidth + margin) * this.list.length - margin;
                //获取盒子设置宽度
                this.$refs.piclist.style.width = width+'px';
                new BScroll(this.$refs.picv, {
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
            }
        },
        created() {
            this.getData();
        },
        beforeUpdate(){
            this.initPics()
        },
        components:{
            thumb//略缩图组件
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .pics
        width: 100%
        margin-bottom: 10px
        .title
            margin-bottom: 10px
            a
                float: right
                margin-right: 10px
                color: #42bd56
        .pics-v
            width: 100%
            overflow: hidden
            white-space: nowrap
            .pics-list
                font-size: 0
                .picLi
                    display: inline-block
                    margin-right: 6px
                    width: 100px
                    .godetails
                        display :block
        .loading
            width: 100%
            height: 187px
            text-align :center
            .loadingimg
                width: 234px
                height: 187px
                objec-fit: cover
</style>