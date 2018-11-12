<template>
	<view>
	<view class="logo">
		<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
	</view>
	<view class="waitfor">
		<text class="willline"> 即将上线</text>
		<text class="paeasewaiting"> 敬请期待</text>
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
 .waitfor{
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 margin-top: 50upx;
	 }
	 .waitfor .willline{
		 font-size: 60upx;
	 }
	 .waitfor .paeasewaiting{
		 font-size: 40upx;
		 margin-top: 20upx;

	 }

</style>
