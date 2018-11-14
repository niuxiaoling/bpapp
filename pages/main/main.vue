<template>
	<view>
		<view class="swiperbox">
			<swiper :indicator-dots="indicatorDots" indicator-active-color="#3AC198" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="true">
				<swiper-item v-for="item in itemList" :key="item">
					<image :src = "item"  mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="banner">
			<view class='seamlessscrolling' v-bind:style="{height:bh +'px',width:bw +'px'}">
				<view v-bind:style="{height:direction=='vertical'?bh*clonestr.length:bh+'px',width:direction=='horizontal'?bw*clonestr.length +'px':bw+'px',left:bl +'px',top:bt +'px'}">
				<view v-for="(item,index) in clonestr" :key="index" v-bind:style="{height:bh +'px',lineHeight:bh +'px',width:bw +'px',position:absolute,top: direction=='vertical'?index*bh +'px':0,left:direction=='horizontal'?index*bw +'px':0}">{{item}}</view>
				</view>
			</view> 
		</view>
		<view class="list">
			<view class="list_item" v-for="v in list" :key="v">
				<navigator  @tap='goURL(v.url)'>
					<image :src="v.imgage" mode="scaleToFill"></image>
					<text>{{v.text}}</text>
				</navigator >
			</view>
		</view>
	</view>
</template>
<script>
	import service from '../../common/service.js';
	export default{
		data:{
					
					itemList: [
						'../../static/img/banner1.jpg',
						'../../static/img/banner2.jpg'
					],
					list:[
						{
							imgage:'../../static/img/ruhezhuangqu.png',
							text:'赚钱方式',
							url:'/pages/main/MoneyWay'
						},
						{
							imgage:'../../static/img/tgewm.png',
							text:'勇士推广码',
							url:"/pages/main/SeoCode"
						},
						{
							imgage:'../../static/img/ggrw.png',
							text:'广告投放',
							url:"/pages/main/waiting"
		
						},
						{
							imgage:'../../static/img/huiyuanrenwu.png',
							text:'微品勇士',
							url:"/pages/main/bVip"
		
						},
						{
							imgage:'../../static/img/renwudating.png',
							text:'科企互化',
							url:"/pages/main/waiting"
		
						},
						{
							imgage:'../../static/img/wdgx.png',
							text:'科技孵化',
							url:"/pages/main/waiting"
		
						},
						{
							imgage:'../../static/img/shagnchengwulian.png',
							text:'微品众商',
							url:"/pages/main/waiting"
		
						},
						{
							imgage:'../../static/img/hb.png',
							text:'全球免费',
						  url:"/pages/main/waiting"
		
						},
						{
							imgage:'../../static/img/kefu.png',
							text:'客服中心',
							url:"/pages/MoneyWay/request-payment"
		
						},
						
					],
					bchange: 2,//变化值，可自定义设置
					bspeed: 100,//速度，可自定义设置
					direction: "horizontal", //  horizontal=水平 vertical=垂直  ，可设置
					horizontal_dire: "left",// direction: "horizontal" 有效，   left =左    right =右，可设置
					vertical_dire: "top",// direction: "vertical" 有效，   top =上    bottom =下，可设置
					strs: ["微品，引领新时代","微品，引领新时代"],//滚动内容，可自定义设置
					clonestr:[],//无缝衔接容器
					bw: 0,//容器宽度
					bh: 0,//容器高度
					bl: 0,//容器位置 left
					bt: 0//容器位置 top
		     
				},
				
		methods: {
			getUser:function(){
					try {
						const value = uni.getStorageSync('userInfo');
						if (value) {
					service.userInfo = value;
					
						}
				} catch (e) {
						// err
				}
			},
			 seamlessscrolling:function(){
				 var that = this;
				 //复制容器
				 var clonestr = [];
				 for (var i = 0; i < this.strs.length; i++) {
					clonestr.push(this.strs[i]);
				 };
			     for (var i = 0; i < this.strs.length; i++) {
						  clonestr.push(this.strs[i]);
				};
				 that.clonestr = clonestr;
				 //容器设置 获取设备宽度（可自定义处理）
				 wx.getSystemInfo({
					success: function (res) {
						that.bw = res.windowWidth;
						that.bh = 40;
					}
				})
				},
				goURL:function(url){
						if(service.userInfo =="" ||!service.userInfo){
							uni.showModal({
								title:'温馨提示',
								content:"当前没有登陆，请登陆",
								success:function(result){
									if(result.confirm){
										uni.navigateTo({
											url:'../index/index',
										})
									}
									if(result.cancel){
										console.log("取消")
									}
								}
							});;
						}else{
					uni.navigateTo({
						url:url
					})
						}
					
				},
		},
		mounted(){
			
		},
		onLoad:function(){
			this.getUser();
			this.seamlessscrolling();
			var that = this;
			//动画
			var anima = setInterval(function () {
				if (that.direction == "horizontal") {//水平
					if (that.bl - that.bchange <= -that.bw * that.strs.length) {
						that.bl = 0;
					} else {
						that.bl =  that.bl - that.bchange;
					};
				} else if (that.direction == "vertical") {//垂直
					if (that.bt - that.bchange <= -that.bh * that.strs.length) {
						that.bl = 0;
					} else {
						that.bt =  that.bt - that.bchange;
					};
				};
			}, that.bspeed);
			
		}
	}
</script>
<style>
	.swiperbox{
		width:100%;
		background:#fff;
	}
	.swiperbox image{
		width:100%;
		height: 100%;
	}
	.banner{
		width:100%;
		height:100upx;
		background:#EDEDED;
		line-height:100upx;
	}
	.marquee_box{
		position:relative;
	}
	.list{
		display:flex;
		flex-wrap:wrap;
		background:#fff;
	}
	.list .list_item{
		width:33%;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		padding-top:12upx;
	}
	.list .list_item navigator{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		margin:20upx 0;
	}
	.list_item image{
		width:80upx;
		height:80upx;
	}
	.list_item text{
		margin-top:20upx;
		font-size:30upx;
	}
	.seamlessscrolling{
		background-color: #cccccc;
		position: relative;
		overflow: hidden;
	}
	.seamlessscrolling view{
		position: absolute;
		white-space: nowrap;
		color: #333;
	}
</style>