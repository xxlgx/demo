<template>
    <div id="box">
        <div class="mui-content" style="background-color:#fff">
            <h5 style="background-color:#efeff4">为你推荐</h5>
            <ul class="mui-table-view mui-grid-view" v-show="fn">
                <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(val,index,key) in listData">
                    <router-link v-bind="{to:'/cloudDetial/'+val.name+'/'+val.id}">
                        <div style="height: .9rem;background-size: contain"  class="mui-media-object" v-img="val.picUrl"></div>
                        <div class="mui-media-body">{{val.name}}</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4"></li>
            </ul>
        </div>
        <div class="loading" v-show="fn == false">
            <mt-spinner type="triple-bounce" color="rgb(100, 100, 100)" class="loa" :size="60"></mt-spinner>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                listID:['8325','6452','2116','3684','8327','8328','6453','6652','9548','8926','10204','2849','7652','3702','4592','5538','12437','8326'],//歌手id
                listData:[],//请求回来的数据
                fn:false
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
            },
            flag(){//延迟2秒加载数据
                let left=this;
                setTimeout(function () {
                    left.fn=true;
                },2000);
            }

        },
        directives:{//自定义指令
            img:{
                inserted:function (el, val) {
                    el.style.backgroundImage='url(./src/common/img/lozy.gif)';//当前元素加载
                    let img = new Image();//创建Img标签
                    img.src=val.value;//获取当前的val值
                    img.onload=function () {//当加载完成之后
                       el.style.backgroundImage='url('+val.value+')';//改变图片地址路径
                    }
                }
            }
        },
        created(){
            this.getData();//初始数据
            this.flag();//延迟2秒
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #box
        width: 100%
        padding 40px 0 50px 0
        position: absolute
        height: 100%
        .mui-table-view:after
            background-color: #fff
        .mui-content
            padding-bottom 50px
            &>ul
                padding 0
                &>li
                    padding 10px 0 0 12px
            &>h5
                height: 36px
                line-height: 36px
                padding-left 14px
        .loading
            position: relative
            width: 100%
            height: 100%
            .loa
                position: absolute
                top 40%
                left 50%
                margin-left -.35rem
                margin-top -.12rem
</style>