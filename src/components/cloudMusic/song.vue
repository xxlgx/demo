<template>
    <div id="song">
        <div class="imgbox" ref="imgbox">
            <img :src="objImg.picUrl" class="record">
        </div>
        <span class="iconfont" @click="play" v-bind:class="[isPlay?'icon-weibiaoti1':'icon-bofang']"></span>
        <div class="song-head">
            <h2 class="title">{{list.name}}</h2>
            <p class="name">—— {{list.ar[0].name}} ——</p>
        </div>
        <audio :src="objVal.url" style="width: 100%;height: 40px" class="music" ref="audio" controls="controls" id="music"></audio>
        <div class="bg">
            <img :src="objImg.picUrl" width="100%" height="100%">
        </div>

        <!--<mt-progress :value="60" >-->
            <!--<div slot="start">{{countTime}}</div>-->
            <!--<div slot="end">{{totalTime}}</div>-->
        <!--</mt-progress>-->
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                id:null,//请求过来的id
                index:null,//请求过来的索引
                objVal:{//MP3

                },
                objImg:null,//图片
                list:null,//歌曲
                isPlay:false,//播放/暂停
                show:false,
                totalTime:null,
                countTime:'00:00',//当前播放时间
            }
        },
        methods:{
            getData(){
                //根据id获取imp3
                let url = 'https://api.imjad.cn/cloudmusic/?type=song&id='+this.id+'&br=128000';
                this.$http.get(url).then(res=>{
                    //保存mp3数据
                    this.objVal=res.body.data[0];
                })
            },
            play() {
                //获取音频标签
                let audio =this.$refs.audio;
                //获取旋转图片
                this.imgbox =this.$refs.imgbox;
                //默认暂停
                if(this.isPlay){
                    this.isPlay=!this.isPlay;
                    //停止旋转
                    this.$refs.imgbox.style.animationPlayState = "paused";
                    //暂停
                    audio.pause()
                }else {
                    this.isPlay=!this.isPlay;
                    //开始旋转
                    this.$refs.imgbox.style.animationPlayState = "running";
                    //播放
                    audio.play()
                }
            },
        },
        computed:{
          goTime() {
              //获取当前播放时间
              return this.countTime =this.$refs.audio.currentTime
          }
        },
        mounted() {
            //一开始不旋转
            this.$refs.imgbox.style.animationPlayState = "paused";
        },
        created(){
            //获取url id
            this.id=this.$route.params.songID;
            //获取点击的Index索引
            this.index=this.$route.params.index;
            //获取歌曲详情 通过传过来的索引获取本地存储
            this.list=JSON.parse(window.localStorage.getItem('song'))[this.index];
            //图片对象
            this.objImg=this.list.al;
            //歌曲请求
            this.getData();
        },
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
    #song
        width: 100%
        background-color: rgba(0,0,0,0.5)
        position: absolute
        top 40px
        bottom 50px
        .music
            position: fixed
            z-index 10
            bottom 50px
            width: 100%
        .imgbox
            width: 2.5rem
            height: 2.5rem
            position :fixed
            top:1.5rem
            left :50%
            margin-left :-1.25rem
            -webkit-animation: rotating 10s linear infinite;
            -moz-animation: rotating 10s linear infinite;
            -o-animation: rotating 10s linear infinite;
            animation: rotating 10s linear infinite
            .record
                position :absolute
                width: 100%
                height: 100%
                border-radius :50%
        .icon-bofang,.icon-weibiaoti1
            position :fixed
            color :rgba(255,255,255,.6)
            font-size :0.8rem
            top :2.65rem
            left :1.45rem
        .bg
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
            -webkit-filter: blur(10px);
            -moz-filter: blur(10px);
            -o-filter: blur(10px);
            -ms-filter: blur(10px);
            filter: blur(10px);
        .song-head
            text-align :center
            color :#fff
            margin-top :0.3rem
            .title
                font-size :0.22rem
                font-weight :300
                margin-bottom :.1rem
            .name
                color :#fff
        .time
            position :fixed
            width: 100%
            height: 0.2rem
            left :0px
            bottom :1.5rem
            background-color: pink
            .time-left
                float :left
                margin-left :0.3rem
            .time-right
                float :right
                margin-right :0.3rem
        .mt-progress
            top:3.85rem
            color :#fff
            padding :0rem .2rem
            .mt-progress-content
                margin :0rem 0.15rem
                .mt-progress-progress
                    background-color: #00b600




    @-webkit-keyframes rotating {
        from { -webkit-transform: rotate(0) }
        to { -webkit-transform: rotate(360deg) }
    }

    @keyframes rotating {
        from { transform: rotate(0) }
        to { transform: rotate(360deg) }
    }
    @-moz-keyframes rotating {
        from { -moz-transform: rotate(0) }
        to { -moz-transform: rotate(360deg) }
    }
</style>