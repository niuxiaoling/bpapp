<template>
	<view class="content">
	<view class="logo">
		<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
	</view>
	<view class="erweima">
		<image :src="qrimg" class="erweimaimg"></image>
		<image src="../../static/img/logo.jpg" mode="" class="erweimalogo"></image>
	</view>
	<view class="tjCode">
		<view class="plText">我的邀请码</view>
		<view class="plCode" >
			<block v-for="v in plcodeArr" :key="v">
					<text>{{v}}</text>
			</block>
		</view>
	</view>
	</view>
</template>

<script>
	import QR from '../../common/wxqrcode.js'
	export default {
		data() {
			return {
				  qrimg:'',
					plcode:'',
					plcodeArr:[]
			};
		},
		onLoad: function() {
			this.plcode = uni.getStorageSync('userInfo').invitationCode;
			var that = this;
			var urlReg = 'https://www.sixkeep.com:8080/html/resgs/?invitationCode=' + that.plcode;
			 let imgsrc = QR.createQrCodeImg(urlReg,{
					size:parseInt(200)
			})
			that.qrimg = imgsrc;
			that.plcodeArr = [...this.plcode];;
		}
	}
</script>
 
<style>
	.content{
		background: #fff;
	}
.logo image{
	 width: 100%;
 }
 .twobuttons{
	 display: flex;
	 flex-direction: row;
	 
	 }
	 .erweima{
		 height: auto;
		 padding:30upx;
		 display: flex;
		 margin:0 auto;
		 justify-content: center;
		 background: #EA5B17;
		 position: relative;
	 }
	 .erweimalogo{
		 width:120upx;
		 height: 80upx;
		 position: absolute;
		 left:0;
		 right:0;
		 top:0;
		 bottom:0;
		 margin:auto;
	 }
	 .erweima .erweimaimg{
		 width: 450upx;
		 height: 450upx;
	 }
	 .tjCode{
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 margin-bottom:100upx;
		 
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
