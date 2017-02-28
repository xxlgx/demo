<template>
    <div class="moreshow">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in listsData">
                <router-link href="" class="godetails" v-bind="{to:'/particulars/'+name+'/'+item.id}">
                    <slither :item="item"></slither>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import urlObj from '../../common/js/fn'//全局方法
    import slither from '../../common/components/slither/thumbNailImage.vue'//滑动组件
    export default {
        data(){
            return{
                listsData:[],
                name:''
            }
        },
        methods:{
            getmoreshow(){
                //获取url传过来的名字
                let dataName =this.$route.params.id;
                //调用jsonp请求
                this.$http.jsonp(urlObj.murl+'/v2/subject_collection/'+dataName+'/items').then(res=>{
                    //获取数据
                    this.listsData=res.body.subject_collection_items;
                });
                //根据传过来的截取不同来确定跳转详情页
                if(dataName.slice(0,1)==='m'){
                    this.name='movies'
                }else if(dataName.slice(0,1)==='b'){
                    this.name='books'
                }else if(dataName.slice(0,8)==='filter_m'){
                    this.name='movies'
                }else if(dataName.slice(0,8)==='filter_b'){
                    this.name='books'
                }

            }
        },
        created(){
            this.getmoreshow()
        },
        components:{
            slither//滑动组件
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .moreshow
        width: 100%
        padding :0px 0.1rem
        margin :50px 0px 60px 0px
        .mui-table-view:before,.mui-table-view:after
            background-color:#fff
</style>