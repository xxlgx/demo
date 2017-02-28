<template>
    <div class="particulars">
        <div class="header">
            <h3 class="title">{{detailsdata.title}}</h3>
            <div class="ptl-comt">
                <div class="text">
                    <div class="point">
                        <star :size="size" :score="score"></star>
                        &nbsp;&nbsp;<b>{{detailsdata.ratings_count}}评价</b>
                    </div>
                    <p class="performer">
                        <span v-for="genres in detailsdata.genres"> {{genres}} / </span>
                        <span v-for="directors in detailsdata.directors"> {{directors.name}}（导演）/ </span>
                        <span v-for="(casts,index) in detailsdata.casts"> {{casts.name}} {{ending(index)}} </span>
                    </p>
                    <a class="more" href="#">用App查看更多影人资料</a>
                </div>
                <img :src="image" class="cover">
            </div>
        </div>
        <div class="ptl-view">
            <a href="#" class="left">想看</a>
            <a href="#" class="right">看过</a>
        </div>
        <div class="introduce">
            <h3 class="title">{{detailsdata.title}}的信息介绍</h3>
            <p class="text">
                {{detailsdata.summary}}
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import urlObj from '../../common/js/fn'//全局方法
    import star from '../../common/components/slither/star/star.vue'//星星组件
    export default {
        data() {
            return {
                detailsdata:{},
                image:'',
                size:36,//星星大小
                score:0,
                name:''
            }
        },
        methods: {
            getData() {
                //根据传过来的名字请求详细页
                //判断是什么类型 进行渲染
                if(this.name=='movies'){
                    this.$http.jsonp(urlObj.url+'/v2/movie/subject/'+this.$route.params.id)
                        .then(res =>{
                            this.detailsdata =res.body;//详细数据
                            this.image =res.body.images.large;//图片
                            this.score =res.body.rating.average;//评分
                        })
                }else if(this.name=='books'){
                    this.$http.jsonp(urlObj.url+'/v2/book/'+this.$route.params.id)
                        .then(res =>{
                            this.detailsdata =res.body;
                            this.numRaters =res.body.rating.numRaters;
                            this.image =res.body.images.large;
                            this.score =res.body.rating.average;
                        })
                }

            },
            ending(index) {
                //导演名字 如果是最后一个就不加/
                return index===(this.detailsdata.casts.length-1)?'':'/'
            }
        },
        created() {
            this.name = this.$route.params.name;//获取当前是什么名字
            this.getData();
        },
        components:{
            star//星星组件
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .particulars
        padding :0 10px
        margin :50px 0 55px 0
        .header
            margin-bottom :30px
            .title
                margin-bottom :10px
            .ptl-comt
                display :flex
                .cover
                    width :100px
                    height: 140px
                    flex :0,0,100px
                .text
                    flex :1
                    padding-right :20px
                    .point
                        display :flex
                        flex-wrap :wrap
                        margin-bottom :10px
                        span
                            font-size :17px
                        b
                            font-size :15px
                            font-weight :300
                            color :#aaa
                    .performer
                        margin-bottom :10px
                    .more
                        font-size :14px
                        color :#42bd56
        .ptl-view
            display :flex
            flex-wrap :wrap
            margin-bottom :30px
            .left,.right
                flex :1
                display :block
                height: 30px
                border-radius:3px
                border :1px solid #ffb712
                color: #ffb712
                line-height: 30px
                font-size :15px
                text-align :center
            .left
                margin-right :10px
        .introduce
            .title
                margin-bottom :10px
                font-size :15px
                color :#aaa
                font-weight :300
</style>