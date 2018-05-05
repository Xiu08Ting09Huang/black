<template>
    <div class="page">
        <detail :article="picInfo">
            <div slot="pics">
                 <vue-preview :slides="thumbs" ></vue-preview>
                 <!-- <img :src="v.src" alt="" v-for="(v,i) in thumbs" :key="i"> -->
            </div>

        </detail>
        <comment :id="$route.params.id"></comment>
    </div>
  
</template>
<script>
import detail from "../comment/detail"
import axios from "axios"
import comment from "../comment/comment"
export default {
    data(){
        return{
            picInfo:{},
            thumbs:[]

        }
    },
    created(){
        // 图片详情
        axios({
            url:'http://www.escook.cn:3000/api/getimageInfo/'+this.$route.params.id
        }).then(res=>{
            if(res.data.status==0){
                this.picInfo=res.data.message[0]  
            }
        });
        // 获取缩略图
        axios({
            url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id
        }).then(res=>{
            if(res.data.status==0){
                
                res.data.message.forEach(v => {
                   v.msrc=v.src;
                   v.alt = "缩略图";
                   v.title = "缩略图";
                   v.w= 600;
                   v.h= 400
                });

                this.thumbs = res.data.message
            }
        })

    },
    components:{
        detail,
        comment
    }
}
</script>
<style>
.pic-detail{
    padding-left: 5px;
    padding-right: 5px;
}

.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>
