<template>
    <div class="box">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(val,index,key) in dataList">
                <router-link class="mui-navigate-right" v-bind="{to:'/cloudSong/'+val.id+'/'+index}">
                    <img class="mui-media-object mui-pull-left" :src="val.al.picUrl" >
                    <div class="mui-media-body">
                        歌名:{{val.name}}
                        <p class='mui-ellipsis'>专辑名:{{val.al.name}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                dataList:[],//数据数组
                name:''//请求名字
            }
        },
        methods:{
            getData(){
                //重置本地存储
                window.localStorage.setItem('song','');
                //获取请求人的名字
                this.name=this.$route.params.name;
                //请求歌单表url
                let url = 'https://api.imjad.cn/cloudmusic/?type=search&search_type=100 &s='+this.name;
                this.$http.get(url).then(res=>{
                    //保存获取的数据数组
                    this.dataList=res.body.result.songs;
                    //转译成字符串
                    let song = JSON.stringify(this.dataList);
                    //保存到本地
                    window.localStorage.setItem('song',song);
            })
            }
        },
        created(){
            //初始调用
            this.getData();
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .box
        width: 100%
        padding 40px 0 60px 0
        background-color: #efeff4

</style>