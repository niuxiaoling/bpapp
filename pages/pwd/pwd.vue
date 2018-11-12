<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/shouji.png"></image>
			<input type="text" v-model="account" placeholder="手机号" maxlength="11" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/miam.png"></image>
			<input type="text" password="true" v-model="password" placeholder="请输入新密码"  placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/querenmima.png"></image>
			<input type="text" password="true" v-model="newPassword" placeholder="请确认密码" placeholder-style="color:#ffffff"/>
		</view>
		<!-- <view class="reg-list">
			<image src="../../static/img/yanzhengma.png"></image>
			<input type="text" v-model="phoneNo" placeholder="短信验证码" placeholder-style="color:#ffffff"/>
			<button><text>|</text>获取</button>
		</view> -->
		
		<view class="regBut">
			<button @tap="submit"> 确 定</button>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				account:'',
				password:'',
				newPassword:""
			}
		},
		methods:{
		// 提交
			submit(){
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
				if(this.password != this.newPassword){
					uni.showToast({
						icon: 'none',
						title: '两次密码不一致'
					});
					return;
				}
				const data ={
					password:this.phone,
					account:this.account,
					newPassword:this.newPassword,
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
							'requestType':"updateUserInfo",
							userInfo:data
						}	
					},
					
					success: (res) => {
						// if();
						uni.showToast({
							title: '修改成功'
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