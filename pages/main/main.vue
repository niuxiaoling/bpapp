<template>
	<view>
		<view class="swiperbox">
			<swiper :indicator-dots="indicatorDots" indicator-active-color="#3AC198" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in itemList" :key="item">
					<text>{{item}}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="banner">
			<swiper :indicator-dots="false" :autoplay="autoplay" :interval="interval" :duration="duration" :vertical="true">
				<swiper-item v-for="item in itemList2" :key="item">
					<text>{{item}}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="list_item">
				<image src="../../static/img/book.png" mode="scaleToFill"></image>
				<text>如何赚佣</text>
			</view>
			<view class="list_item">
				<image src="../../static/img/book.png" mode="scaleToFill"></image>
				<text>如何赚佣</text>
			</view>
			<view class="list_item">
				<image src="../../static/img/book.png" mode="scaleToFill"></image>
				<text>如何赚佣</text>
			</view>
			<view class="list_item">
				<image src="../../static/img/book.png" mode="scaleToFill"></image>
				<text>如何赚佣</text>
			</view>
			<view></view>
			<view></view>
		</view>
	</view>
</template>
<script>
	export default{
		data:{
			itemList: [
				'item1',
				'item2',
				'item3'
			],
			itemList2: [
				'item1',
				'item2',
				'item3'
			],
			indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 1000
		},
		methods: {
		}
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
	.list_item image{
		width:80upx;
		height:80upx;
	}
	.list_item text{
		margin-top:18upx;
	}
</style>