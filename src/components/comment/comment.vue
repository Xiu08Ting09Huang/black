<template>
  <div class="">
      <h4>发表评论</h4>
      <hr>
      <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
      <div class="comment">
            <ul class="mui-table-view">
                <li v-for="(v,i) in commentList" :key="i" class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                    <p class="comment-tilte">
                        <span>第{{i+1}}楼</span>
                        <span>发表时间：{{v.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                        <span class="mui-pull-right">
                            {{v.user_name}}
                        </span>
                    </p>
                    <img src="../../assets/images/menu1.png" class="mui-media-object mui-pull-right">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis comment-content" v-text="v.content" ></p>
                    </div>
                    </a>
                </li>
            </ul>  
      </div>
      <mt-button type="danger" size="large" plain @click='more' v-show="moreBtn">加载更多</mt-button>
  </div>
</template>

<script>
import dateformat from '@/filters/dateformat'
import axios from 'axios'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            commentList:[],
            countIndex:1,
            moreBtn:true,
            content:''
        }
    },
    filters:{
        dateformat
    },
    props:['id'],
    created(){
       this.getData();
    },
    methods:{
        postComment(){
            //获取text中的文本
            if(this.content.trim()){
                axios({
                    url:'http://www.escook.cn:3000/api/postcomment/'+this.id,
                    method:'post',
                    data:'content='+ this.content
                }).then(res=>{
                   this.commentList.unshift({
                       add_time:new Date(),
                       content:this.content,
                       user_name:'匿名用户'
                   });
                    this.content=""
                })
            };
           

        },
        getData(){
             axios({
            url:'http://www.escook.cn:3000/api/getcomments/' + this.id + '?pageindex=' + this.countIndex
        }).then(res=>{
            if(res.data.status == 0){
                this.commentList.push(...res.data.message) ;
                if(res.data.message.length == 0){
                    this.moreBtn = false;
                    Toast('没有更多评论了');
                }
            }
            
        })
        },
        more(){
            this.countIndex++;
            this.getData();

        }
    }

    
};
</script>


<style>
textarea {
  margin-top: 10px;
  margin-bottom: 0;
}
.comment li {
  padding: 10px;
}
</style>
