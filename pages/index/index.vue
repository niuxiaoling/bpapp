<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/shouji.png"></image>
			<input type="text" v-model="account" placeholder="手机号" maxlength="11" placeholder-class="placeholder"/>
		</view>
		<view class="reg-list">
			 <!-- password="false" -->
			<image src="../../static/img/miam.png"></image>
			<input type="password"  v-model="password" placeholder="密码" maxlength="11" placeholder-class="placeholder"/>
		</view>
		<view class="regBut">
			<button @tap="bindLogin"> 登 录 </button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<navigator url="../main/waiting">忘记密码</navigator>
		</view>
		
		
	</view>
</template>

<script>
	// import service from '../../common/service.js';
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
		// computed: mapState(['forcedLogin']),
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
					uni.showLoading({
						title:'Loading',
						mask:true
					})
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
					const userInfo ={
							account:that.account,
							password:that.password,
					       }
					const jsonString ={
						userInfo:userInfo,
						requestType:"login",
					}
					const param ={
						controllerRequestType:"loginControllerService",
						jsonString:JSON.stringify(jsonString)
					}
					uni.request({
						url:that.websiteUrl,
						method:'POST',
						header: {
							"content-type":"application/x-www-form-urlencoded"
						},
						data:param,
						success: (res) => {
							
							// console.log('登录中',JSON.stringify(res));
							if(res.data.errorCode == '0000'){		
								uni.setStorageSync("userInfo",res.data.userInfo);
								uni.setStorageSync("vipLevel",res.data.userInfo.vipLevel);
								// console.log(JSON.stringify(res.data.userInfo))
								uni.hideLoading();
								uni.reLaunch({
							      url:'../main/main',
						    });
							 
							}else{
								uni.showToast({
									icon:'none',
									title:res.data.errorMessage
								})
							}
						
						
						},
						fail:(res) =>{
							console.log(JSON.stringify(res));
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
// 				toMain(userName) {
// 					this.login(userName);
// 					/**
// 					 * 强制登录时使用reLaunch方式跳转过来
// 					 * 返回首页也使用reLaunch方式
// 					 */
// 					if (this.forcedLogin) {
// 						uni.reLaunch({
// 							url: '../main/main',
// 						});
// 					} else {
// 						uni.navigateBack();
// 					}
// 	
// 				}
			},
		onLoad() {
			this.initPosition();
		}
	}
</script>

<style>
	@import '../../common/denglu.css';
	page{
		background:linear-gradient(bottom, #E61532,#EA5B17);
	}
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-wrap:wrap;	
	}
</style>
