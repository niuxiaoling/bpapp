<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
		</view>
		<!-- <view class="bevip"> -->
			<!-- <view class="bevip-item" v-bind:class="active==1?'active':''"  @tap="getChange(1)">
				<text>普通VIP</text>
				<text  style="color:red">￥99</text>
			</view>
			<view class="bevip-item" v-bind:class="active==2?'active':''"  @tap="getChange(2)">
				<text>高级VIP</text>
				<text style="color:red">￥999</text>
			</view> -->
		<!-- </view> -->
		<view class="bevipbtn">
			<!-- <navigator url="../MoneyWay/request-payment?money=0.01"> -->
				<button  @tap="bevip1" >99成为VIP</button>
			<!-- </navigator> -->
			<!-- <navigator url="../MoneyWay/request-payment?money=0.02"> -->
				<button  @tap="bevip2"  >999成为高级VIP</button>
			<!-- </navigator> -->
		</view>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	export default {
		data() {
			return {
				active:1,
				money:'99',
				vipLevel:""
			};
		},
		
		methods:{
			bevip1(){
				if(this.vipLevel == 'VIP1'){
					uni.showToast({
						icon:'none',
						title: '您已经是VIP，请点击高级',
					});
					return;
				}
				if(this.vipLevel == 'VIP2'){
					uni.showToast({
						icon:'none',
						title: '您已经是高级Vip，无须再次购买',
					});
					return;
				}
				uni.showModal({
					title:'微品提示',
					content:'确定支付99成为普通vip',
					success:function(res){
						if (res.confirm) {
							uni.navigateTo({
								url:'../MoneyWay/request-payment?money=0.01',
							})
						} else if (res.cancel) {
						}
						
					}
				})
			},
			bevip2(){
				if(this.vipLevel == 'VIP2'){
					uni.showToast({
						icon:'none',
						title: '您已经是高级Vip，无须再次购买',
					});
					return;
				}
				uni.showModal({
					title:'微品提示',
					content:'确定支付999成为高级vip',
					success:function(res){
						if (res.confirm) {
							uni.navigateTo({
								url:'../MoneyWay/request-payment?money=0.02',
							})
						} else if (res.cancel) {
						}
					}
				})
			},
		},
		onLoad:function(){
			this.vipLevel = uni.getStorageSync('vipLevel') ?uni.getStorageSync('vipLevel') :"";
		}
	}
</script>
 
<style>
.logo image{
	 width: 100%;
 }
 .bevip{
	 margin:40upx auto 40upx;
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
 }
 .bevip .bevip-item{
     padding:0 15upx;
	height:70upx;
	line-height:70upx;
	font-size:40upx;
	border:1px solid #444;
	border-radius:5px;
 }
 .bevip .bevip-item.active{
	 border:1px solid red;
 }
 .bevipbtn{
	 margin:60upx auto 0;
	 display: flex;
	
 }
 .bevipbtn button{
	 background: red;
	 color:#fff;
	 border-radius: 5px;
 }
	
</style>
