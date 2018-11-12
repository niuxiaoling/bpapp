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
			<image src="../../static/img/yanzhengma.png"></image>
			<input type="text" v-model="account" placeholder="用户名" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/miam.png"></image>
			<input type="text" v-model="password" placeholder="密码"  placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/yaoqingma.png"></image>
			<input type="text" v-model="invitationCode" placeholder="邀请码" placeholder-style="color:#ffffff"/>
		</view>
		<view class="regBut">
			<button @tap="register">确认注册</button>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				phone:'',
				verificationCode:'',
				account:"",
				password:'',
				invitationCode:'',
				showTime:false,
				time:60
			}
		},
		methods:{
		// 获取手机验证码
			getPhone(){
				var that =  this;
				 if(this.phone == ''){
					 uni.showToast({
					 	icon:"none",
						title:"手机号码不能为空"
					 })
				 }
				//缺少接口
				this.showTime = true	
				var go = setInterval(function(){
					that.time --;
					if(that.time == 0){
					   that.showTime = false;
				       clearInterval(go);
					   that.time = 60;
					}
				},1000)
				//
			},
		// 注册
			register(){
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
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
				if(this.verificationCode ==''){
					uni.showToast({
						icon: 'none',
						title: '请输入短信验证码'
					});
					return;
				}
				const data ={
					phone:this.phone,
					verificationCode:this.verificationCode,
					account:this.account,
					password:this.password,
					invitationCode:this.invitationCode
				}
				uni.request({
					url:'http://10.138.93.113:2221/ScreenTheWord/MainController.do',
					method:'POST',
					header: {
						'Access-Control-Allow-Origin':'*' 
					},
					data:{
						controllerRequestType:'loginControllerService',
						jsonString:{
							'requestType':"registUserInfo",
							 userInfo:data
						}	
					},
					
					success: (res) => {
						// if();
						console.log(res)
						uni.showToast({
							title: '注册成功'
						});
					},
					fail:(response) =>{
						
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
	
</style>