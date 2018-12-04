<template>
	<view>
		<view class="logo">
			<image src="../../static/img/BvipImg.jpg" mode="widthFix"></image>
		</view>
	
		<view class="bevipbtn">
				<view  @tap="bevip1"><image src="../../static/img/bvip1.png" mode="widthFix"></image></view>
				<view  @tap="bevip2"><image src="../../static/img/bvip2.png" mode="widthFix"></image></view>
				<view  @tap="bevip3"><image src="../../static/img/bvip3.png" mode="widthFix"></image></view>		
		</view>
		<view class="textcontents">	
		<text class="wptext">微品众信向所有勇士签署单边协议，协议内容是3个月能成为精英者，均会在6年内通过微品众信平台赚取的收益买的起100万以上的房子，20万以上的车子。若是购买金额不足由微品众信补足剩余部分。本单边协议具有法律效力。</text>
		</view>
		<view class="textcontents" style="margin-top: 30px;">
			<text class="wptextgr">注：满人员高级勇士才可升级精英，这是唯一途径，没有任何其他途径。</text>
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
						title: '您已经是初级勇士，请选择中级或高级',
					});
					return;
				}
				if(this.vipLevel == 'VIP2'){
					uni.showToast({
						icon:'none',
						title: '您已经是中级勇士，请选择高级',
					});
					return;
				}
				if(this.vipLevel == 'VIP3'){
					uni.showToast({
						icon:'none',
						title: '您已经是高级勇士，无需再次购买',
					});
					return;
				}
				uni.showModal({
					title:'微品提示',
					content:'确定支付99成为初级勇士',
					success:function(res){
						if (res.confirm) {
							uni.navigateTo({
								url:'../MoneyWay/request-payment?money=99&payTradeType=VIP1',
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
						title: '您已经是中级勇士，请选择高级',
					});
					return;
				}
				if(this.vipLevel == 'VIP3'){
					uni.showToast({
						icon:'none',
						title: '您已经是高级勇士，无需再次购买',
					});
					return;
				}
				uni.showModal({
					title:'微品提示',
					content:'确定支付999成为中级勇士',
					success:function(res){
						if (res.confirm) {
							uni.navigateTo({
								url:'../MoneyWay/request-payment?money=999&payTradeType=VIP2',
							})
						} else if (res.cancel) {
						}
					}
				})
			},
			bevip3(){
				if(this.vipLevel == 'VIP3'){
					uni.showToast({
						icon:'none',
						title: '您已经是高级勇士，无需再次购买',
					});
					return;
				}
				uni.showModal({
					title:'微品提示',
					content:'确定支付9999成为高级勇士',
					success:function(res){
						if (res.confirm) {
							uni.navigateTo({
								url:'../MoneyWay/request-payment?money=9999&payTradeType=VIP3',
							})
						} else if (res.cancel) {
						}
					}
				})
			}
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
	 margin:40upx auto ;
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
 }

 .bevipbtn{
	 margin:60upx auto 0;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	
 }
 .bevipbtn view{
	 margin-bottom: 50upx;
	 width: 50%;
	 height: 75upx;
	 background: none;
 }
 .bevipbtn view image{
	 width: 100%;
	 height: 75upx;
 }
 .textcontents{
	 width: 85%;
	 margin: 0 auto;
 }
 .wptext{
	 font-size: 25upx;
	 color: #333333;
 }
 .wptextgr{
	 font-size: 25upx;
	 color: #999999;
 }
	
</style>
