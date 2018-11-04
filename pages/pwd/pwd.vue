<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/shouji.png"></image>
			<input type="text" v-model="phoneNo" placeholder="手机号" maxlength="11" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/miam.png"></image>
			<input type="text" password="true" v-model="phoneNo" placeholder="请输入新密码"  placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/querenmima.png"></image>
			<input type="text" password="true" v-model="phoneNo" placeholder="请确认密码" placeholder-style="color:#ffffff"/>
		</view>
		<view class="reg-list">
			<image src="../../static/img/yanzhengma.png"></image>
			<input type="text" v-model="phoneNo" placeholder="短信验证码" placeholder-style="color:#ffffff"/>
			<button><text>|</text>获取</button>
		</view>
		
		<view class="regBut">
			<button> 确 定</button>
		</view>
	</view>
</template>
<script>
	
</script>
<style>
	@import '../../common/denglu.css';
	page{
		background:linear-gradient(bottom, #E61532,#EA5B17);
	}
	
</style>