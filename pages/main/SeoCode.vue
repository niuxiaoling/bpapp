<template>
	<view>
	<view class="logo">
		<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
	</view>
	<view class="erweima">
		
		<image src="../../static/img/erweimaTEXT.jpg"></image>
	</view>
	<view class="tjCode">
		<view class="plText">我的邀请码</view>
		<view class="plCode" >
			<text>0</text>
			<text>3</text>
			<text>e</text>
			<text>g</text>
			<text>j</text>
			<text>k</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
	 
	 }
	 .erweima{
		 width: 100%;
		 height: auto;
		 padding-top: 50upx;
		 display: flex;
		 justify-content: center;
	 }
	 .erweima image{
		 width: 500upx;
		 height: 500upx;
	 }
	 .tjCode{
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 
	 }
	 .tjCode .plText{
		 text-align: center;
		 font-size: 30upx;
		 margin: 10upx auto;
	 }
	 .tjCode .plCode{
		 display: flex;
		 flex-direction: row;
		 justify-content: center;
		 align-content: center;
	 }
	 .tjCode .plCode text{
		 width: 50upx;
		 height: 50upx;
		 line-height: 50upx;
		 color: #FFFFFF;
		 background: #D32241;
		 margin-left: 10upx;
		 text-align: center;
	 }
</style>
