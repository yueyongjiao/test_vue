<template>
    <div class="my-outbox">
        <div class="my-inbox" ref='box'>
            <div class="my-list" v-for="(item,index) in sendVal" :key='index'>
                {{item.place}}<span class="my-uname">{{item.name}}</span>
            </div>
            <br>
            <div class="my-list2" v-for="(item,index) in sendVal" :key='(index+1)*100'>
                {{item.place}}<span class="my-uname">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'texteffect',
        data() {
            return {
                sendVal:[{place: "科技与产品管理：", name: "软件开发一部出品"},
                    {place: "\<br />"+ "版本:", name: "v1.1.0 "}]
            }
        },
        mounted:function(){
            let that = this;
            let target = this.$refs.box;
            let initLeft = 0;
            setInterval(function(){
                initLeft ++;
                if(initLeft >= target.offsetWidth / 2 ){
                    initLeft = 0;
                }
                target.style = 'transform: translateX(-'+ initLeft +'px)';
            },50)
        }
    }
</script>

<style lang="scss" scoped>
    .my-outbox{
        color: #D7BC8D;
        overflow: hidden;
        height: 105px;
        background: transparent;
        position: relative;
        .my-inbox{
            white-space: nowrap;
            position: absolute;
            font-size: 80;
            .my-list{
                margin-right: 25px;
                display: inline-block;
                font-size: 53px;
                height: 35px;
                line-height: 85px;
                .my-uname{
                    color: #FF8900;
                }
            }
            .my-list2{
                margin-right: 45px;
                display: inline-block;
                font-size: 10px;
                height: 45px;
                line-height: 35px;
                .my-uname{
                    color: #FF8900;
                }
            }
        }
    }
</style>