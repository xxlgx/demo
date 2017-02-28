<template>
    <div class="searchshow" ref="showscroll">
        <div>
            <dataLists :Lists="moveLists" :mbname="moveName"></dataLists>
            <dataLists :Lists="bookLists" :mbname="bookName"></dataLists>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'//回弹插件
    import dataLists from './datalists.vue'//搜索结果组件
    import urlObj from '../../common/js/fn'//全局方法
    export default {
        data() {
            return{
                moveLists:{},//搜索电影结果
                bookLists:{},//搜索图书结果
                moveName:'movies',//链接类型
                bookName:'books'//链接类型
            }
        },
        methods:{
            getData() {
                //搜索的内容
                this.$http.jsonp(urlObj.url+'/v2/movie/search?q='+this.$route.query.val).then(res=>{
                    //添加自定义属性
                    res.body.name ='电影';
                    //获取对象
                    this.moveLists =res.body;
                });
                this.$http.jsonp(urlObj.url+'/v2/book/search?q='+this.$route.query.val).then(res=>{
                    res.body.name ='图书';
                    this.bookLists =res.body;
                });
            },
            showBScroll(){
                new BScroll(this.$refs.showscroll,{
                    //允许点击事件
                    click:true
                })
            }
        },
        components:{
            dataLists//搜索结果子组件
        },
        created() {
            this.getData()
        },
        updated(){
            //允许点击事件
            this.showBScroll()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .searchshow
        width: 100%
        padding :0px 10px
        position: absolute
        top: 50px
        bottom: 55px
        overflow :hidden
</style>