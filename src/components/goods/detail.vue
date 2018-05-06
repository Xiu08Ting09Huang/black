<template>
    <div class="page">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(v, i) in lunbos" :key="i">
                            <img :src="v.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodInfo.title}}</div>
            <div class="mui-card-content">
                
                <div class="mui-card-content-inner">
                    <div  class="price">
                        <span >市场价：
                            <del >￥{{goodInfo.market_price}}</del>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span >销售价：
                            <span  class="sale_price">￥{{goodInfo.sell_price}}</span>
                            </span>
                    </div>
                    <div class="count">
                        <!-- v-model 组件之间双向绑定 v-bind:value="count" v-on:input="count=$event" -->
                        <numberbox :min=0 :max="goodInfo.stock_quantity" :step="1" v-bind:value="count" v-on:input="count=$event"></numberbox>
                    
				    </div>
                    <div class="btns">
                        <mt-button type="primary">立即购买</mt-button> 
                        <mt-button type="danger" @click="addCart">加入购物车</mt-button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodInfo.goods_no}}</p>
                    <p>库存情况：{{goodInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodInfo.add_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" :plain="true" @click="$router.push('/goods/desc/'+goodInfo.id)" >商品描述</mt-button>
                <br>
                <mt-button type="danger" size="large" :plain="true" @click="$router.push('/goods/comment/'+goodInfo.id)" >商品评论</mt-button>
            </div>
        </div>
        <transition  v-on:before-enter="beforeEnter" v-on:enter="enter">
             <div class="redball" v-show="isShowBall"></div>
        </transition>
    </div>
  
</template>
<script>
import axios from "axios";
import dateformat from "../../filters/dateformat"
import numberbox from "../comment/numberbox.vue"
export default {
  data() {
    return {
      lunbos: [],
      goodInfo:{},
      count:0,
      isShowBall:false
    };
  },
  methods:{
      addCart(){
          this.isShowBall = true;
          this.$store.commit('addToCart',{
              id:this.$route.params.id,
              count:this.count
          })
      },
      beforeEnter:function(el){
          el.style.top='445px';
          el.style.left="175px";
          
      },
      enter:function(el){
          el.style.transition="all .4s linear"
          el.offsetWidth
          el.style.top= 620+ window.pageYOffset+'px';
          el.style.left="240px";
          this.isShowBall = false
      }
  },
  created() {
    //   获取商品页面的轮播图
    axios({
      url:
        "http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id
    }).then(res => {
      if (res.data.status == 0) {
        this.lunbos = res.data.message;
      }
    });
// 获取商品页面的参数
    axios({
        url:'http://www.escook.cn:3000/api/goods/getinfo/' + this.$route.params.id
    }).then(res=>{
        if(res.data.status ==0){
            this.goodInfo = res.data.message[0]
        }
    })
  },
  filters:{
      dateformat
  },
  components:{
      numberbox
  }
};
</script>
<style scoped>
.redball {
  z-index: 999;
  top: 445px;
  left: 175px;
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
}
.mint-swipe {
  height: 180px;
}
.mint-swipe img {
  height: 100%;
}

.mint-swipe-item {
  text-align: center;
}

.mui-card-content-inner > div {
  margin: 10px 0;
}

.sale_price {
  color: red;
  font-size: 18px;
}

.mui-card-footer {
  display: block;
}
.mui-card-content-inner {
    position: relative;
    padding: 15px;
}
</style>
