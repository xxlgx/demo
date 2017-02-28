<template>
    <div class="moive">
        <div class="moive-v">
            <!--电影热映-->
            <slither :getdata="movie_showing" :name="name"></slither>
            <!--即将上映-->
            <slither :getdata="movie_free_stream" :name="name"></slither>
            <!--TOP250-->
            <slither :getdata="movie_latest" :name="name"></slither>
            <!--文本-->
            <textScroll :text="dataObj.movieText" :title="title"></textScroll>
            <!--分类-->
            <classify :classifyData="dataObj.movieClassify"></classify>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import slither from '../../common/components/slither/slither.vue'//滑动组件
    import textScroll from '../../common/components/slither/textscroll.vue'//文本滑动组件
    import classify from '../../common/components/classify/classify.vue'//分类组件
    export default {
        props:{
            dataObj:{//app传过来的本地
                type:Object
            }
        },
        data() {
            return {
                name:'movies',
                title:'发现电影:',//文件分类
                movie_showing:'/v2/subject_collection/movie_showing/items',//电影热映
                movie_free_stream:'/v2/subject_collection/movie_free_stream/items',//即将上映
                movie_latest:'/v2/subject_collection/movie_latest/items'//top250
            }
        },
        components:{
            slither,//可复用滑动组件  电影页面/图书页面
            textScroll,//文本滑动
            classify,//分类
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .moive
        width: 100%
        padding :0 10px
        margin :50px 0 60px 0
</style>
</style>