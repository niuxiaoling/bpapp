<template>
	<view>
	<view class="logo">
		<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
	</view>
	<view class="erweima">
		<image :src="qrimg"></image>
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
			var aa = 'https://www.sixkeep.com:8080/ScreenTheWord/html/resgs/index.html?invitationCode=666666'
			 let imgsrc = QR.createQrCodeImg('http://www.baidu.com?aa=bb',{
					size:parseInt(250)
			})
			that.qrimg = imgsrc;
			that.plcodeArr = [...this.plcode];
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
		 margin-bottom: 50upx;
		 
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
