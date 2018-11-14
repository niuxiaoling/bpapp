<template>
	<view>
	<view class="logo">
		<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
	</view>
	<view class="twobuttons">
		<button>99VIP</button>
		<button>999成为高级VIP</button>
	</view>
	<view class="bVip">
		<button>99成为VI1P</button>
	</view>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	export default {
		data() {
			return {
			
			
				
			};
		},
		onLoad:function(){
			// const  valueUser= uni.getStorageSync('userInfo');
			console.log(service.userInfo)
		}
	}
</script>
 
<style>
.logo image{
	 width: 100%;
 }
 .twobuttons{
	 display: flex;
	 flex-direction: row;
	 margin-top: 50upx;
	 }
	 
</style>
