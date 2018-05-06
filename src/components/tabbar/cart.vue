<template>
    <div class="page">
       <div class="goods-list">
            <div class="mui-card" >
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch ></mt-switch>
                        <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200059017695.jpg" class="thumb_img">
                        <div class="info">
                            <h4>苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h4>
                            <div class="box">
                                <span class="price">￥5780</span>
                                <numbox :min="0" :max="Infinity" :step="1" ></numbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="amount">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品
                            <span class="red">0</span> 件 总价：
                            <span class="red">￥0</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
  
</template>
<script>
import numbox from "../comment/numberbox.vue"
export default {
  components:{
      numbox
  }
}
</script>
<style scoped>
.goods-list .mui-card-content-inner .thumb_img {
  width: 60px;
  height: 60px;
}

.goods-list .mui-card-content-inner .info {
  flex: 1;
}

.goods-list .mui-card-content-inner .info h4 {
  font-size: 14px;
}

.goods-list .mui-card-content-inner .info .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-list .mui-card-content-inner .info .box .price {
  font-size: 16px;
  color: red;
}

.goods-list .mui-card-content-inner {
  display: flex;
}

.mui-card-content-inner .amount {
    flex: 1;
}


.mui-card-content-inner .red {
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
