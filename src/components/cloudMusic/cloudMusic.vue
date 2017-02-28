<template>
    <div id="box">
        <div class="mui-content" style="background-color:#fff">
            <h5 style="background-color:#efeff4">为你推荐</h5>
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(val,index,key) in listData">
                    <router-link v-bind="{to:'/cloudDetial/'+val.name+'/'+val.id}">
                        <img class="mui-media-object" :src="val.picUrl">
                        <div class="mui-media-body">{{val.name}}</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4">
            </ul>
        </div>

        <div class="loading" v-show="listData == false">
            <img src="../../common/img/loading.gif" class="loadingimg">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                listID:['8325','6452','2116','3684','8327','8328','6453','6652','9548','8926','10204','2849','7652','3702','4592','5538','12437','8326'],//歌手id
                listData:[]//请求回来的数据
            }
        },
        methods:{
            getData(){
                let url;
                //循环遍历请求id
                this.listID.forEach(val=>{
                    //请求数据
                    url = 'https://api.imjad.cn/cloudmusic/?type=artist&id='+val;
                    this.$http.get(url).then(res=>{
                        //循环添加进数组
                        this.listData.push(res.body.artist);
                    })
                });
            },
            sendData(id){
                //点击事件跳转路由
                this.$router.push({name:'cloudDetial',params:{cloudID:id}})
            }
        },
        created(){
            this.getData();
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #box
        width: 100%
        padding 40px 0 60px 0
        .mui-table-view:after
            background-color: #fff
        .mui-content
            &>ul
                padding 0
                &>li
                    padding 10px 0 0 12px
            &>h5
                height: 36px
                line-height: 36px
                padding-left 14px
</style>