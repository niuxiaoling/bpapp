<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/shouji.png"></image>
			<input type="text" v-model="phone" placeholder="手机号" maxlength="11" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/yanzhengma.png"></image>
			<input type="text" v-model="verificationCode" placeholder="手机验证码" placeholder-style="color:#ffffff"/>
			<text class="yanzhentime" v-if="showTime">{{time}}s</text>
			<button v-else  @tap="getPhone"><text>|</text>获取</button>
		</view>
		<view class="reg-list">
			<image src="../../static/img/miam.png"></image>
			<input type="password" v-model="password" placeholder="密码"  placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/querenmima.png"></image>
			<input type="password" v-model="okPassword" placeholder="请确认密码" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/yaoqingma.png"></image>
			<input type="text" v-model="superInvitationCode" placeholder="邀请码" placeholder-style="color:#ffffff"/>
		</view>
		<view class="checkbox">
			<switch :checked="checked" @change="switch1Change" type="checkbox"/><navigator url="Agreement">我已阅读并同意《微品众信用户注册协议》</navigator>
		</view>
		<view class="regBut">
			<button @tap="register">确认注册</button>
		</view>
	</view>
</template>
<script>
	// import commons from '../../common/commons.js';
	export default{
		data(){
			return{
				phone:'',
				verificationCode:'',
				account:"",
				password:'',
				invitationCode:'',
				superInvitationCode:'',
				showTime:false,
				time:60,
				checked:false,
				
			}
		},
		methods:{
			switch1Change: function (e){
				this.checked = e.detail.value;
			},
		// 获取手机验证码
			getPhone(){
				uni.showLoading({
					title:'Loading',
					mask:true
				})
				var that =  this;
				 if(!(/^1[34578]\d{9}$/.test(this.phone))){
				 	uni.showToast({
				 		icon: 'none',
				 		title: '请输入正确的11位手机号'
				 	});
				 	return;
				 }else{
					const data ={
						phone:this.phone,
					
					}
					const jsonString = {
						requestType:"getInvitation",
						userInfo:data,
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
						success(res) {
							uni.hideLoading();
							if(res.data.errorCode == '0000'){
								  that.retunverificationCode = res.data.userInfo.retunverificationCode;
							}else{
								uni.showToast({
									icon:'none',
									title:res.data.errorMessage
								})
							}
						},
						fail(res) {
							uni.showToast({
							icon:'none',
							title:res.data.errorMessage
						})
						}
					})
					//倒计时
					this.showTime = true	
					var go = setInterval(function(){
						that.time --;
						if(that.time == 0){
							that.showTime = false;
								clearInterval(go);
							that.time = 60;
						}
					},1000) 
	
				 }
				 

			},
		// 注册
			register(){
				uni.showLoading({
					title:'Loading',
					mask:true
				})
				var that = this;
				 if(!(/^1[34578]\d{9}$/.test(this.phone))){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的11位手机号'
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
				if (this.okPassword !=this.password){
					uni.showToast({
						icon: 'none',
						title: '密码不一致'
					});
					return;
				}
				if(this.verificationCode ==''){
					uni.showToast({
						icon: 'none',
						title: '请输入短信验证码'
					});
					return;
				}
				if(this.superInvitationCode ==''){
					uni.showToast({
						icon: 'none',
						title: '请输入邀请码'
					});
					return;
				}
			
				if(this.checked == false ){
					uni.showToast({
						icon: 'none',
						title: '注册需先同意用户注册协议'
					});
					return;	
				}
				
				const data ={
					phone:this.phone,
					verificationCode:this.verificationCode,
					account:this.phone,
					password:this.password,
					superInvitationCode:this.superInvitationCode,
					retunverificationCode:this.retunverificationCode
					
					
				}
				const jsonString = {
					requestType:"registUserInfo",
					userInfo:data,
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
						uni.hideLoading();
						if(res.data.errorCode == '0000'){
							uni.showToast({
								icon:'none',
								title:'注册成功,请登陆！',
								success() {
									uni.navigateTo({
										url:'../index/index',
									})
								}
							})
						}else{
							uni.showToast({
								icon:'none',
								title:res.data.errorMessage
							})
						}
					},
					fail:(response) =>{
						uni.showToast({
							icon:'none',
							title:'注册失败'
						})
					}
				})
			}
		}
	}
</script>
<style>
	@import '../../common/denglu.css';
	page{
		background:linear-gradient(bottom, #E61532,#EA5B17);
	}
	.checkbox{
		display: flex;
		width: 80%;
		padding: 0 10%;
		line-height: 40upx;
		align-items: center;
		justify-content: flex-end;
		margin: 20upx 0;
		margin-top: 30upx;
	}	
	
	.checkbox navigator{
	
		color: #FFFFFF;
	}
</style>