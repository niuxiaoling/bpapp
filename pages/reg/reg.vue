<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="手机号" />
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="短信验证码" />
			<button><text>|</text>获取</button>
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="密码" />
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="确认密码" />
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="邀请码" />
		</view>
		<view class="regBut">
			<button>确认注册</button>
		</view>
	</view>
</template>
<script>
	
</script>
<style>
	page{
		background:linear-gradient(bottom, #E61532,#EA5B17);
	}
	.logo{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 120upx;
		margin: 10% 0;
		
	}
	.logo image{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.reg-list{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin-top: 50upx;
	}
	.reg-list image{
		position: absolute;
		top: 15upx;
		left: 20%;
		width: 50upx;
		height: 50upx;
	}
	.reg-list input{
		color: #FFFFFF;
		width: 40%;
		height: 80upx;
		font-size: 30upx;
		border: 1upx solid #FFFFFF;
		border-radius: 40px;
		padding:0 15%;
		
	}
	.reg-list button{
		width: 100upx;
		height: 80upx;
		padding: 0 5upx;
		font-size: 30upx;
		line-height: 80upx;
		position: absolute;
		background: none;
		border: none;
		color: #FFFFFF;
		top: 0;
		right:15% ;
	}
	.reg-list button text{
		padding-right: 10upx;
	}
	.regBut{
		width: 100%;
		height: 100upx;
		margin-top: 60upx;
		}
	.regBut button{
		width: 70%;
		height: 100upx;
		line-height: 100upx;
		font-size: 40upx;
		background: #FFFFFF;
		border: none;
		border-radius:50upx; 
		color: #D32241;
	}	
</style>