<template>
	<view class="content">
	<view class="logo">
		<image src="../../static/img/tg_logo.png" mode="widthFix"></image>
	</view>
	<view class="logo_title">
		<image src="../../static/img/tg_title.png" mode=""></image>
	</view>
	<view class="erweima">
		<image class="erweima-bg" src="../../static/img/tg_bg_1.png" mode="aspectFit"></image>
		<view class="erweimaimg">
			<view class="erweima-content">
				<image :src="qrimg" ></image>
			</view>
			<image src="../../static/img/logo.jpg" mode="" class="erweimalogo"></image>
		</view>
		
		<view class="tjCode">
			<view class="plCode" >
				<block v-for="v in plcodeArr" :key="v">
						<text>{{v}}</text>
				</block>
			</view>
		</view>
	</view>
	<!-- 二维码背景 -->
	<image class="erweima-bg2" src="../../static/img/tg_bg.png" mode=""></image>
	
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
	page{
		height: 100%;
		background: #fff;
		position: relative;
	}
	.content{
		background: #fff;
	}
	.logo{
		width:249upx;
		height: 244upx;
		margin:0 auto;
	}
	.logo_title{
		width:631upx;
		height: 60upx;
		margin:45upx auto 0;
	}
	.logo image,.logo_title image{
		width: 100%;
		height: 100%;
	}
 .twobuttons{
	 display: flex;
	 flex-direction: row;
	 
	 }
	 .erweima-bg2{
		 width:400upx;
		 height:431upx;
		 position:absolute;
		 right:0;
		 bottom:0;
		 z-index: 0;
	 }
	 .erweima{
		 width:541upx;
		 height: 703upx;
		 display: flex;
		 margin:40upx auto 0;
		 justify-content: center;
		 position: relative;
	 }
	 .erweima-bg{
		 width:100%;
		 height: 100%;
		 position:absolute;
		 left:0;
		 right:0;
		 top:0;
		 bottom:0;margin:auto;
		 z-index:1;
		 
	 }
	 .erweima .erweimaimg{
	 	position:absolute;
	 	z-index: 200;
	 	left:0;
	 	right:0;
	 	top:0;
		bottom: 0;
	 	margin:0 auto;
	 	width: 302upx;
	 	height: 302upx;
	 }
	 .erweima .erweimaimg .erweima-content{
			width: 100%;
			height: 100%;
			position:absolute;
			z-index: 200;
			left:0;
			right:0;
			top:50%;
			transform: translate(0,-25%);
			margin:auto;
	 }
	 .erweima .erweimaimg .erweima-content image{
		 width:100%;
		 height: 100%;
	 }
	 .erweimalogo{
	 	width:120upx;
	 	height: 80upx;
	 	position: absolute;
	 	left:0;
	 	right:0;
	 	top:60%;
	 	margin:auto;
	 	z-index:200;
	 }
	 .tjCode{
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 margin-bottom:100upx;
		 position: absolute;
		 bottom: 58upx;
		 left:0;
		 right:0;
		 margin:auto;
		 z-index: 200;
		 
	 }
	 .tjCode .plCode{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 align-content: center;
	 }
	 .tjCode .plCode text{
		 width: 60upx;
		 height: 60upx;
		 line-height: 50upx;
		 color: #FFFFFF;
		 background: #D32241;
		 text-align: center;
	 }
</style>
