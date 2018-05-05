<template>
    <div class="page">
       <div id="slider" class="mui-slider mui-fullscreen">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<router-link class="mui-control-item-cms" to="/pictures/0" data-wid="tab-top-subpage-1.html">
						全部
					</router-link>
					<router-link v-for="(v,i) in categoryList" :key='i'  class="mui-control-item-cms" :to="'/pictures/'+v.id" data-wid="tab-top-subpage-1.html">
						{{v.title}}
					</router-link>
				</div>
			</div>
		</div>
		<ul>
			<li v-for="(v,i) in picsList" :key="i">
				<img v-lazy="v.img_url" alt="">
				<div class="info">
					<h4>{{v.title}}</h4>
					
                    {{v.zhaiyao}}
                
				</div>
			</li>
		</ul>
    </div>
  
</template>
<script>
import mui from "../../assets/mui/js/mui(1)";
import axios from "axios";
export default {
  data() {
    return {
	  categoryList: [],
	  picsList:[]
    };
  },
  created() {
	  // 获取图片列表数据
	this.getPicsList();
	//   获取图片分类数据
    axios({
      url: "http://www.escook.cn:3000/api/getimgcategory"
    }).then(res => {
      if (res.data.status == 0) {
        this.categoryList = res.data.message;
      }
	});
	
  },
  methods: {
	  getPicsList(){
		axios({
				url:'http://www.escook.cn:3000/api/getimages/'+ this.$route.params.id
			}).then(res=>{
				if(res.data.status==0){
					this.picsList = res.data.message
					
				}
			})
	  }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
//   点击分类是，路由发生变化，需要监听路由的变化，路由一旦发生变化，就重新根据路由地址的id再调用一次getPicsList
  watch:{
	  '$route': function(nv,ov){
		   // 只要路由一变化就执行了
          // 路由一变化，重新根据路由中的分类id获取一次图片列表即可
		  this.getPicsList();
	  }
  }
};
</script>
<style scoped>
#slider {
  padding-top: 40px;
}
ul {
  list-style: none;
  margin-top: 30px;
  padding: 10px;
}

ul li {
  margin: 10px 0;
  box-shadow: 0 0 15px #999;
  position: relative;
  background-color: #ccc;
}

ul li img {
  width: 100%;
  display: block;
}

ul li .info {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
}

ul li .info h4 {
  font-size: 13px;
}

.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-cms {
  color: inherit;
  border: 0;
}

.mui-segmented-control.mui-scroll-wrapper .mui-control-item-cms {
  display: inline-block;
  width: auto;
  padding: 0 20px;
  border: 0;
}

.mui-segmented-control .mui-control-item-cms {
  line-height: 38px;
  display: table-cell;
  overflow: hidden;
  width: 1%;
  -webkit-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #007aff;
  border-color: #007aff;
  border-left: 1px solid #007aff;
}

.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item-cms.mui-active {
  color: #007aff;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
