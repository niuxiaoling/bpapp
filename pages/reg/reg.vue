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
			<input type="text" v-model="verificationCode" placeholder="验证码/注意大小写" placeholder-style="color:#ffffff"/>
			<button @tap="getPhone"><text>|</text>获取</button>
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
				superInvitationCode:'',
			}
		},
		methods:{
		// 获取手机验证码
			getPhone(){
				 if(!(/^1[34578]\d{9}$/.test(this.phone))){
				 	uni.showToast({
				 		icon: 'none',
				 		title: '请输入正确的11位手机号'
				 	});
				 	return;
				 };
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
				//缺少接口
				uni.request({
					// 192.168.43.229
					url:'http://192.168.43.229:8080/ScreenTheWord/MainController.do?',
					// url:'http://39.106.215.215:8080/ScreenTheWord/MainController.do?',
					method:'POST',
					header: {
		
						"content-type":"application/x-www-form-urlencoded"
					},
					data:param,
					success: (res) => {
						console.log(res)
						
					},
					fail: (res) => {
						uni.showToast({
							icon:'none',
							title:'获取失败'
						})
						
					}
				})
		
				//
			},
		// 注册
			register(){
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
				
				
				const data ={
					phone:this.phone,
					verificationCode:this.verificationCode,
					account:this.phone,
					password:this.password,
					superInvitationCode:this.superInvitationCode
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
					url:'http://192.168.43.229:8080/ScreenTheWord/MainController.do?',
					method:'POST',
					header: {
						"content-type":"application/x-www-form-urlencoded"
					},
					data:param,
					success: (res) => {
						console.log(res)
						if(res.data.errorCode == '0000'){
							uni.showToast({
								icon:'none',
								title:'注册成功'
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
	
</style>