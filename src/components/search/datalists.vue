<template>
    <div class="datalists" v-if="Lists.total !== 0">
        <h4 class="title">{{name}}</h4>
        <ul class="listcomt">
            <li class="comtli" v-for="item in minlistsdata">
                <router-link href="#" class="comtv" v-bind="{to:'/particulars/'+mbname+'/'+item.id}">
                    <div class="comttop">
                        <img :src="item.images.large" alt="" width="40">
                    </div>
                    <div class="comtbmt">
                        <p>{{item.title}}</p>
                        <div class="comtsize">
                            <star :size="size" :score="item.rating.average"></star>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="loading" v-show="minlistsdata == false">
            <img src="../../common/img/loading.gif" class="loadingimg">
        </div>
        <a href="#" class="tomore">更多{{name}}结果（{{Lists.total || "loading..."}}）</a>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from '../../common/components/slither/star/star.vue'//星星组件
    export default {
        props:{
            Lists:{//返回的数据
                type:Object
            },
            mbname:{//名字 '电影'or'图书'
                type:String
            }
        },
        data() {
            return{
                size:24,
                minlistsdata:[],//保存的数据
                name:''
            }
        },
        components:{
            star//星星子组件
        },
        watch:{//监听传过来的搜索结果
            'Lists':function (newVal,oldVal) {
                console.log(newVal);
                //如果搜索有值
                if(newVal){
                    //如果是搜索电影的内容
                    if(newVal.subjects){
                        //类名
                        this.name =newVal.name;
                        //截取数组 显示4个
                        this.minlistsdata =newVal.subjects.slice(0,4);

                        //如果是搜索图书的内容
                    }else if(newVal.books){
                        this.name =newVal.name;
                        this.minlistsdata =newVal.books.slice(0,4);
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .datalists
        margin-bottom :20px
        .title
            margin-bottom :5px
            font-size :15px
            color: #aaa
        .listcomt
            .comtli
                border-bottom :1px solid #F2F2F2
            .comtv
                display :flex
                padding :5px 0
                .comttop
                    width :40px
                    flex :0,0,40px
                .comtbmt
                    flex :1
                    padding-left :10px
                    p
                        font-size:17px
                    .comtsize
                        color :#aaa
        .loading
            width: 100%
            height: 297px
            text-align :center
            .loadingimg
                width: 372px
                height: 187px
                objec-fit: cover
        .tomore
            display :block
            padding :10px 0 10px 50px
            font-size:15px
            color:#42bd56
            border-bottom :1px solid #F2F2F2


</style>