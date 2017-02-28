<template>
    <div class="book">
        <div class="book-v">
            <!--虚构类-->
            <slither :getdata="book_fiction" :name="name"></slither>
            <!--非虚构类-->
            <slither :getdata="book_nonfiction" :name="name"></slither>
            <!--文本滑动-->
            <textScroll :text="dataObj.bookText" :title="title"></textScroll>
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
                name:'books',
                title:'发现图书：',
                book_fiction:'/v2/subject_collection/book_fiction/items',//虚构类
                book_nonfiction:'/v2/subject_collection/book_nonfiction/items'//非虚构类
            }
        },
        components:{
            slither,//滑动组件
            textScroll,//文本滑动组件
            classify,//分类组件
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .book
        width: 100%
        padding :0 10px
        margin :50px 0 60px 0
</style>