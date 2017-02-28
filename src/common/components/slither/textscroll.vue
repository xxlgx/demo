<template>
    <div class="textbox">
        <h4 class="title">{{title}}</h4>
        <div class="text-v" ref="textv">
            <ul class="text-list">
                <li class="textLi" v-for="item in text" :style="{ border:'1px solid'+item.color }"><a href="#" class="text-a" :style="{ color: item.color }">{{item.title}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    export default {
        props:{
            text:{
                type:Array
            },
            title:{
                type:String
            }
        },
        methods:{
            initText() {
                new BScroll(this.$refs.textv,{
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
            }
        },
        mounted() {
            this.initText()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .textbox
        width: 100%
        margin-bottom: 10px
        .title
            font-size :17px
            font-weight :300
            margin-bottom :10px
        .text-v
            width: 100%
            overflow: hidden
            .text-list
                display :flex
                flex-wrap:wrap
                width :1130px
                .textLi
                    display: inline-block
                    margin :0px 6px 6px 0px
                    border-radius :5px
                .text-a
                    display :inline-block
                    height: 50px
                    line-height: 50px
                    padding :0px 20px

</style>