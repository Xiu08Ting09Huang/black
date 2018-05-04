<template>
  <div class="">
      <h4>发表评论</h4>
      <hr>
      <textarea name="" id="" cols="30" rows="3"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="comment">
            <ul class="mui-table-view">

                <li v-for="(v, i ) in commentList" :key="i" class="mui-table-view-cell mui-media">
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
                        <p class="mui-ellipsis comment-content" v-text="v.content"></p>
                    </div>
                    </a>
                </li>
            </ul>
           
          
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            commentList:[]
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
