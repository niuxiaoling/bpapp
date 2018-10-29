<template>
	<view>
		<view class="swiperbox">
			<swiper :indicator-dots="indicatorDots" indicator-active-color="#3AC198" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in itemList" :key="item">
					<image :src = "item"  mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="banner marquee_box">
			<text class="marquee_text" >
				床前明月光，疑是地上霜。	
			</text>
			  
		</view>
		<view class="list">
			<view class="list_item" v-for="v in list" :key="v">
				<navigator  :url="v.url">
					<image :src="v.imgage" mode="scaleToFill"></image>
					<text>{{v.text}}</text>
				</navigator >
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data:{
			itemList: [
				'../../static/img/banner1.jpg',
				'../../static/img/banner2.jpg'
			],
			list:[
				{
					imgage:'../../static/img/book.png',
					text:'如何赚佣',
					url:'/pages/pwd/pwd'
				},
				{
					imgage:'../../static/img/book.png',
					text:'推广二维码',
					url:"/pages/pwd/pwd"
				},
				{
					imgage:'../../static/img/book.png',
					text:'广告投放',
					url:'/pages/pwd/pwd'
				},
				{
					imgage:'../../static/img/book.png',
					text:'会员',
					url:'/pages/pwd/pwd'
				}
			],
			indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 1000,
			orientation:'left',
			text:'这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
			marqueePace: 1,//滚动速度
		    marqueeDistance: 0,//初始滚动距离
		    marqueeDistance2: 0,
		    marquee2copy_status: false,
		    marquee2_margin: 60,
		    size: 14,

		},
		methods: {
			 
		},
		mounted(){
		},
// 		onShow() {
// 			var vm = this;
// 			var length = vm.data.text.length * vm.data.size;//文字长度
// 			var windowWidth = uni.getSystemInfoSync().windowWidth;// 屏幕宽度
// 			 vm.setData({
// 				length: length,
// 				windowWidth: windowWidth,
// 				marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
// 
//     		});
// 		}
	}
</script>
<style>
	.swiperbox{
		width:100%;
		background:#fff;
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
		width:33.3%;
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
	}
	.list_item image{
		width:80upx;
		height:80upx;
	}
	.list_item text{
		margin-top:18upx;
	}
</style>