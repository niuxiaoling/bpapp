<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="page-body">
			<view class="page-section">
				<view>支付金额</view>
				<view class="price"><text class="rmbLogo">￥</text>{{money}}</view>
				
			</view>
		</view>
		<view>
			<view class="desc">支付方式</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="pay-item">
				<button type="primary" @tap="weixinPay" :loading="loading">微信支付</button>
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="uni-list">
				<radio-group >
					<label class="uni-list-cell uni-list-cell-pd pay-item" v-for="(item,index) in providerList" :key="index" @tap="requestPayment(item,index)">
						<view>
							<radio :value="item.value" checked="true" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
				<!-- <button v-for="(item,index) in providerList" :key="index" @tap="requestPayment(item,index)" :loading="item.loading">{{item.name}}支付</button> -->
			</view>
			
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				providerList: [],
				money:''
			}
		},
		onLoad: function(options) {
			this.money = options.money;
			// #ifdef APP-PLUS
			uni.getProvider({
				service: "payment",
				success: (e) => {
					console.log("payment success", e);
					this.providerList = e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								return {
									name: '支付宝',
									id: value,
									loading: false,
									requesttype:'aLiPay'
								}
							case 'wxpay':
								return {
									name: '微信',
									id: value,
									loading: false,
									requesttype:'wxPay'
								}
						}
					})
				},
				fail: (e) => {
					console.log("获取登录通道失败：", e);
				}
			});
			// #endif
		},
		methods: {
			weixinPay() {
				console.log("发起支付");
				this.loading = true;
				uni.login({
					success: (e) => {
						console.log("login success", e);
						uni.request({
							url: `https://unidemo.dcloud.net.cn/payment/wx/mp?code=${e.code}&amount=0.01`,
							success: (res) => {
								console.log("pay request success", res);
								if (res.statusCode !== 200) {
									uni.showModal({
										content: "支付失败，请重试！",
										showCancel: false
									});
									return;
								}
								if (res.data.ret === 0) {
									console.log("得到接口prepay_id", res.data.payment);
									let paymentData = res.data.payment;
									uni.requestPayment({
										timeStamp: paymentData.timeStamp,
										nonceStr: paymentData.nonceStr,
										package: paymentData.package,
										signType: 'MD5',
										paySign: paymentData.paySign,
										success: (res) => {
											uni.showToast({
												title: "感谢您的赞助!"
											})
										},
										fail: (res) => {
											uni.showModal({
												content: "支付失败,原因为: " + res.errMsg,
												showCancel: false
											})
										},
										complete: () => {
											this.loading = false;
										}
									})
								} else {
									uni.showModal({
										content: res.data.desc,
										showCancel: false
									})
								}
							},
							fail: (e) => {
								console.log("fail", e);
								this.loading = false;
								uni.showModal({
									content: "支付失败,原因为: " + e.errMsg,
									showCancel: false
								})
							}
						})
					},
					fail: (e) => {
						console.log("fail", e);
						this.loading = false;
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					}
				})
			},
			async requestPayment(e, index) {
				this.providerList[index].loading = true;
				let orderInfo = await this.getOrderInfo(e.id,index);
				console.log(JSON.stringify(orderInfo) );
				if (orderInfo.data.errorCode !== "0000") {
					uni.showModal({
						content: "支付失败",
						showCancel: false
					})
					return;
				}
				uni.requestPayment({
					provider: e.id,
					orderInfo: orderInfo.data.payInfo.payString,
					success: (e) => {
						uni.showToast({
							title: "支付成功"
						})
					},
					fail: (e) => {
						console.log(e.errMsg);
						console.log(JSON.stringify(orderInfo.data.payInfo));
						console.log("fail", e);uni.showModal({
							content: "支付失败",
							showCancel: false
						})
					},
					complete: () => {
						this.providerList[index].loading = false;
					}
				})
			},
			getOrderInfo(e,index) {
				var that = this;
				let appid = "wx726318aa9a4e7971";
				// #ifdef APP-PLUS
				appid = plus.runtime.appid;
					// #endif
				const userInfo ={
						totalFee:that.money,
						body:'商品价格',
				}
				const jsonString ={
					payInfo:userInfo,
					requestType:this.providerList[index].requesttype
				}
				const param ={
					controllerRequestType:"payControllerService",
					jsonString:JSON.stringify(jsonString)
				}
				// let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=0.01';
				return new Promise((res) => {
					uni.request({
						url:that.websiteUrl,
						method:'POST',
						header: {
							// 'Access-Control-Allow-Origin':'*' ,
							"content-type":"application/x-www-form-urlencoded"
						},
						data:param,
						success: (result) => {
							res(result);
						},
						fail: (e) => {
							res(e);
						}
					})
				})
			}
		}
	}
</script>

<style>
	.page-section {
		width: auto;
		margin: 30upx;
		padding: 64upx 30upx;
		background-color: #fff;
		text-align: center;
		font-size: 28upx;
	}
	.uni-list-cell {
		justify-content: flex-start
	}
	.desc {
		color: #B2B2B2;
		font-size:40upx;
		margin:0 30upx;
	}

	.price {
		margin-top: 30upx;
		margin-bottom: 25upx;
		position: relative;
		display: inline-block;
		font-size: 78upx;
		line-height: 1;
	}

	.rmbLogo {
		position: absolute;
		font-size: 40upx;
		top: 8upx;
		left: -40upx;
	}

	/* button {
		background-color: #007aff;
		color: #ffffff;
	} */
	.pay-item{
		margin-top:10upx;
		height: 60upx;
		background: #fff;
	}
</style>
