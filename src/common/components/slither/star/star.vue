<template>
    <div class="star" :class="starType">
        <span v-for="item in items" :class="item" class="star-item" track-by="$index"></span>
        <!--把字符串类型强制转换成数字类型并保留一位小数-->
        <span v-text="Number(score).toFixed(1)" class="text"></span>
    </div>
</template>
<script type="text/ecmascript-6">
    // 星星的长度
    const LENGTH = 5;
    // 把需要用到的星星保存在常量中
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props: {
            size: {
                type: Number
            },
            score: {
                type: [Number, String]
            }
        },
        computed: {
            starType() {
                return 'star-' + this.size;
                //把传入的数据只保留一位小数
            },
            items() {
                // 定义个新数组，给v-for去循环出来
                let result = [];
                // 先把score字符串类型强制转换成数字类型并保留一位小数，并对分数进行转换，转换成0.5的倍数的值
                let score = Math.floor(Number(this.score).toFixed(1) / 2);
                // 把判断是否是小数的布尔值保存在一个常量里面，也就是判断是否是半颗星
                let hasDecimal = score % 1 !== 0;
                // 获取整星的数量
                let integer = Math.floor(score);
                // 把是整星的循环push到result数组里面
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                // 把半颗星的push到result数组里面
                if (hasDecimal) {
                    result.push(CLS_HALF);
                }
                // 如果整星的和半星的已经添加完成，剩余不满足LENGTH长度的就全部push空星，直到LENGTH长度满足位置
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                // 返回result这个数组出去
                return result;
            },
        },
        methods:{
            newScore(){
                return this.score.toFixed(1)
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../css/stylus/mixin.styl"

    .star
        font-size: 0
        .star-item
            display: inline-block
            background-repeat: no-repeat
        &.star-48
            .star-item
                width: 20px
                height: 20px
                margin-right: 22px
                background-size: 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('star48_on')
                &.half
                    bg-image('star48_half')
                &.off
                    bg-image('star48_off')
            .text
                font-size: 22px
        &.star-36
            .star-item
                width: 15px
                height: 15px
                margin-right: 6px
                background-size: 15px 15px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('star36_on')
                &.half
                    bg-image('star36_half')
                &.off
                    bg-image('star36_off')
            .text
                font-size: 17px

    &.star-24
        .star-item
            width: 10px
            height: 10px
            margin-right: 3px
            background-size: 10px 10px
            &:last-child
                margin-right: 0
            &.on
                bg-image('star24_on')
            &.half
                bg-image('star24_half')
            &.off
                bg-image('star24_off')

    .text
        font-size: 12px
</style>
