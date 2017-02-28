<template>
    <div class="MDshow">
        <img :src="item.cover.url" alt="" width="100" height="140">
        <p class="text">{{item.title}}</p>
        <star :size="size" :score="isvalue(item.rating)"></star>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from './star/star.vue'
    export default {
        props:{
            item:{
                type:Object
            }
        },
        data() {
            return{
                size:24,
                score:0
            }
        },
        methods:{
            isvalue(value) {
                return value?value.value:0
            },
        },
        components:{
            star
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .MDshow
        display :block
        text-align :center
        color :#aaa
        .text
            margin-top :-5px
            font-size: 12px
            overflow :hidden
            text-overflow:ellipsis
            white-space: nowrap


</style>