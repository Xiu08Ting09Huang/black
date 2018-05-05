<template>
    <div class="page news">
        <detail :article = "newsDetail"> </detail>
        <div class="detail-comment">
            <comment :id="$route.params.id"/>
        </div>
    </div>
  
</template>
<script>
import axios from "axios"
import dateformat from "@/filters/dateformat"
import comment from "../comment/comment"
import detail from "../comment/detail"
export default {
  data(){
      return{
          newsDetail:{},
      }
  },
  created(){
      axios({
          url:'http://www.escook.cn:3000/api/getnew/' + this.$route.params.id
      }).then(res=>{
          if(res.data.status == 0){
              this.newsDetail = res.data.message[0]
          }
      })
  },
  filters:{
      dateformat
  },
  components:{
      comment,
      detail
  }
}
</script>
<style >
.news{
    padding: 40px 5px 50px;
}
.detail-content{
    padding-top: 5px;
}
.detail-content img{
    width: 100%;
}
</style>
