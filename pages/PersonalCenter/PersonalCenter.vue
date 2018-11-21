<template>
	<view class="avatars">
		<view class="avatar_box">
			<view class="avatar">
				<image src="../../static/img/tx_rbt.jpg" mode="aspectFit"></image>
				<view class="sign">
					<image src="../../static/img/viptest.jpg" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<text class="phoneNo">页面功能开发中···</text>
		<view class="income">
			<view class="income-list">
				<text class="list-No">12</text>
				<rich-text class="list-text">总贡献值</rich-text>
				
			</view>
			<view class="income-list">
				<text class="list-No">12</text>
				<rich-text class="list-text">今日贡献</rich-text>
				
			</view>
			<view class="income-list">
				<text class="list-No">12</text>
				<rich-text class="list-text">已兑贡献</rich-text>
			</view>
		</view>
		<view class="lists">
			<view class="listli">
				 <image src="../../static/img/GRZL.png" mode="aspectFit"></image><text>个人资料</text>
			</view>
			
			<view class="listli">
				<image src="../../static/img/VIP.png" mode="aspectFit"></image><text>账号会员</text>
				</view>
			<view class="listli">
				<image src="../../static/img/TD.png" mode="aspectFit"></image><text>我得战队</text>
			</view>
			
			<view class="listli">
				<image src="../../static/img/QB.png" mode="aspectFit"></image><text>我的钱包</text>
			</view>
			<view class="listli">
				<image src="../../static/img/YHK.png" mode="aspectFit"></image><text>绑定银行卡</text>
			</view>
			<view class="listli">
				<image src="../../static/img/TX.png" mode="aspectFit"></image><text>提现</text>
			</view>
			<view class="listli">
				<image src="../../static/img/JCGX.png" mode="aspectFit"></image><text>检查更新</text>
			</view>
			<view class="listli"  @tap="changeAccont">
				<image src="../../static/img/QHZH.png" mode="aspectFit"></image><text>切换账号</text>
			</view>
	
		</view>
		<view style="width:100%;"><button class="getOut" @tap="layOutApp()">退出APP</button>
		</view>
		</view>
		
</template>

<script>
	export default {
		data:{
			
		},
		methods:{
			changeAccont(){
				uni.showLoading({
					mask:true,
					title:'Loading'
				})
				uni.clearStorageSync('userInfo');
				uni.clearStorageSync('vipLevel');
				uni.reLaunch({
						url:'../main/main',
						success() {
							uni.hideLoading()
						}
				});
			},
			layOutApp(){
				plus.runtime.quit();
			}
		}
		
	}
</script>

<style>
	.avatars{
		width:100%;
		background:linear-gradient(bottom, #E61532,#E86318);
		backgorund-size:100% 100%;
		padding-top:50upx;
		
	}
	.avatar_box{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding:10upx 0;
	}
	.avatar{
		position:relative;
		width: 120upx;
		height: 120upx;
		border-redius:50%;
		
	}
	.avatar image{
		width: 120upx;
		height: 120upx;
		border-radius:50%;
	}
	.avatar-msg{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40upx;
	}
	.avatar-msg view{
		
		margin: 0 10upx;
	}
	.sign{
		position:absolute;
		bottom:0upx;
		left:50upx;
		width: 130upx;
	}
	.sign image{
		width: 130upx;
		height: 30upx;
	}
	.phoneNo{
		color:#fff;
		display: flex;
		justify-content: center;
		margin-top:10upx;
		padding-bottom:20upx;
	}
	.income{
		display: flex;
		flex-wrap:nowrap;
		border-top:1px solid #FFD39C;	
		
	}
	.income-list{
		width:33.3%;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		padding-top:20upx;
		color:#FFF;
	}
	.list-text{
		margin-bottom:20upx;
		font-size: 30upx;
	}
	.lists{
		background-color: #F4F0F1;
	}
	
	.lists .listli{
		width: 100%;
		height: 100upx;
		align-items:center;
		display: flex;
		margin: 10upx 0;
		font-size:30upx;
		border-bottom:1px solid #dadada;
		
	}
	.lists .listli image{
		width: 60upx;
		height: 60upx;
		margin-left:20upx;
		
	}
	.lists .listli text{
		margin-left:20upx;
	}
	.getOut{
		background:linear-gradient(bottom, #E61532,#E86318);
		backgorund-size:100% 100%;
		color:#FFF;
	}
</style>
