<template>
    <div class="classify">
        <h4 class="title">分类浏览</h4>
        <div class="classify-v">
            <ul class="classify-list">
                <li class="classifyLi" v-for="item in classifyData">
                    <router-link v-bind="{to:'/'+item.genre+'/moreshow/'+item.name}" class="classif-a">{{item.title}}
                        <span class="iconfont icon-jiantou"></span>
                    </router-link>
                </li>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            classifyData:{//分类...本地数据
                type:Array
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .classify
        width: 100%
        margin-bottom: 10px
        .title
            font-size :17px
            font-weight :300
            margin-bottom :10px
        .classify-v
            border-top :1px solid #eee
            .classify-list
                display :flex
                flex-wrap:wrap
                .classifyLi
                    width: 50%
                    height: 40px
                    border-right :1px solid #eee
                    border-bottom :1px solid #eee
                    .classif-a
                        display :block
                        padding :0 15px
                        line-height: 40px
                        color :#42bd56
                        .icon-jiantou
                            float :right
                            color :#ccc
                .classifyLi:nth-child(2n)
                    border-right :none


</style>