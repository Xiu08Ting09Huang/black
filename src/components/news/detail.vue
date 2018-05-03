<template>
    <div class="page news">
        <div class="detail-title">
            <h4>{{newsDetail.title}}</h4>
            <p>
                <span>发表时间：{{newsDetail.add_time | dateformat("YYYY年MM月DD日 HH:mm:ss")}}</span> 
                <span class="mui-pull-right">点击：{{newsDetail.click}}次</span>
            </p>
        </div>
        <hr>
        <div class="detail-content" v-html="newsDetail.content">
            
        </div>
        <div class="detail-comment"></div>
    </div>
  
</template>
<script>
import axios from "axios"
import dateformat from "@/filters/dateformat"
export default {
  data(){
      return{
          newsDetail:{}
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
