<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo.jpg"></image>
		</view>
		<view class="reg-list">
			<image src="../../static/img/logo.jpg"></image>
			<input type="text" v-model="phoneNo" placeholder="电话号码" />
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
		margin-top: 10%;
		
	}
	.logo image{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.reg-list{
		width: 100%;
		height: 50upx;
		line-height: 50upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.reg-list image{
		position: absolute;
		top: 0;
		left: 22%;
		width: 50upx;
		height: 50upx;
	}
	.reg-list input{
		color: #FFFFFF;
		width: 50%;
		height: 50upx;
		font-size: 30upx;
		border: 1upx solid #FFFFFF;
		border-radius: 15px;
		padding-left: 20%;
	}
	
	


</style>