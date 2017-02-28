<template>
    <div id="group">
        <div class="portrait">
            <a href="javascript:void (0)" class="mui-navigate-right">
                <div class="one">
                    <img src="http://dcloud.io/hellomui/images/yuantiao.jpg">
                </div>
                <div class="two">
                    <p>hello xx</p>
                    <p>账号：xxlgxiang@163.com</p>
                </div>
            </a>
        </div>
        <div class="other">
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">账号与安全</p>
            </a>
        </div>
        <div class="other">
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">新消息通知</p>
            </a>
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">隐私</p>
            </a>
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">通用</p>
            </a>
        </div>
        <div class="other">
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">关于xx</p>
            </a>
        </div>
        <div class="other">
            <a href="javascript:void (0)" >
                <p class="mui-navigate-right">退出</p>
            </a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                msg: '这是group'
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #group
        width: 100%
        padding :40px 0 50px 0
        position: absolute
        height: 100%
        background-color: #efeff4
        .portrait
            width: 100%
            height: 64px
            background-color: #fff;
            margin-top 20px
            position: relative
            &>a
                display block
                width: 100%
                height: 100%
                .one
                    float left
                    padding 12px
                    &>img
                        width: 40px
                        height: 40px
                .two
                    overflow hidden
                    padding 12px
                    &>p:nth-child(1)
                        font-size 18px
        .other
            width: 100%
            background-color: #fff;
            margin-top 20px
            &>a
                display block
                height: 100%
                width: 100%
                color #000000
                border: 1px solid #eee
                &>p
                    position: relative
                    height: 43px
                    padding 12px 0 0 15px
</style>