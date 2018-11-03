<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/img/logo.jpg" mode="scaleToFill"></image>
		</view>
		<view class="login">
			<view class="input-row border">
				<text class="title">账号：</text>
				<input type="text" v-model="account" placeholder="请输入账号" placeholder-style="color:#ffffff">
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<input type="text" password="true" v-model="password" placeholder="请输入密码" placeholder-style="color:#ffffff">
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import service from '../../common/service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data: {
			account: '',
			password: '',
			positionTop: 0
		},
		computed: mapState(['forcedLogin']),
		methods: {
				...mapMutations(['login']),
				initPosition() {
					/**
					 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
					 * 反向使用 top 进行定位，可以避免此问题。
					 */
					this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
				},
				bindLogin() {
					var that = this;
					if (this.account.length == '') {
						uni.showToast({
							icon: 'none',
							title: '账号不能为空'
						});
						return;
					}
					if (this.password.length < 6) {
						uni.showToast({
							icon: 'none',
							title: '密码最短为 6 个字符'
						});
						return;
					}
					uni.request({
						url:'http://10.138.93.113:2221/ScreenTheWord/MainController.do?controllerRequestType=loginControllerService',
						method:'POST',
						header: {
							'Access-Control-Allow-Origin':'*' 
						},
						data:{
							jsonString:{
								'requestType':"login",
								userInfo:{
									'account':that.account,
									'password':that.password,
								}
							}
							
						},
						
						success: (res) => {
							console.log(res.data);
						}
					})
					/**
					 * 下面简单模拟下服务端的处理
					 * 检测用户账号密码是否在已注册的用户列表中
					 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
					 */
// 					const data = {
// 						account: this.account,
// 						password: this.password
// 					};
// 					const validUser = service.getUsers().some(function (user) {
// 						return data.account === user.account && data.password === user.password;
// 					});
// 					if (validUser) {
// 						this.toMain(this.account);
// 					} else {
// 						uni.showToast({
// 							icon: 'none',
// 							title: '用户账号或密码不正确',
// 						});
// 					}
				},
				toMain(userName) {
					this.login(userName);
					/**
					 * 强制登录时使用reLaunch方式跳转过来
					 * 返回首页也使用reLaunch方式
					 */
					if (this.forcedLogin) {
						uni.reLaunch({
							url: '../main/main',
						});
					} else {
						uni.navigateBack();
					}
	
				}
			},
		onLoad() {
			this.initPosition();
		}
	}
</script>

<style>
	
	page{
		min-height: 100%;
		width:100%;
		background:linear-gradient(bottom, #E61532,#EA5B17);
	}
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-wrap:wrap;	
	}
	.logo{
		flex: 1;
		justify-content: center;
		align-items: center;
		width:120upx;
		height: 120upx;
		padding-top: 10%;
		border-radius: 50%;
	}
	.logo image{
		width:100%;
		height: 100%;
		border-radius: 50%;
	}
	.login{
		display:flex;
		flex-wrap:wrap;
		color: #FFFFFF;
	}
	.action-row {
		    margin-top: 50upx;
	        display: flex;
	        flex-direction: row;
	        justify-content: center;
			color: #FFFFFF;
	    }
	
	.action-row navigator {
		color: #007aff;
		padding: 0 30px;
		color: #FFFFFF;
		font-size: 30upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100px;
		height: 100px;
		border: 1px solid #dddddd;
		border-radius: 100px;
		margin: 0 40px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60px;
		height: 60px;
		margin: 20px;
	}
	.input-row{
		font-size: 40upx;
	}
	
</style>
