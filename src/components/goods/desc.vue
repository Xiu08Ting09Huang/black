<template>
    <detail :article="info"></detail>
</template>
<script>
import detail from "../comment/detail.vue"
import axios from "axios"
export default {
    data(){
        return{
            info:{}
        }
    },
    created(){
        axios({
            url:'http://www.escook.cn:3000/api/goods/getdesc/' + this.$route.params.id
        }).then(res=>{
            if(res.data.status==0){
                this.info = res.data.message[0]
            }
        })
    },
  components:{
      detail
  }
}
</script>
<style>

</style>
