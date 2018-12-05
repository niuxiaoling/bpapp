<template>
	<view>
		<view class="detailsText">
			<view class="detailsTitle">普通任务一</view>
			<view class="detailsTips">请将下面得文本图片复制发送朋友圈（点击图片保存到手机）</view>
			<view class="detailsContent">关于霸屏威赫手机购买双向奖励公告

		尊敬的霸屏天下&amp;BOSS Wallet用户：
		您好！

		自霸屏威赫手机在霸屏天下与霸屏钱包（BOSS Wallet）上线销售以来，得到了广大用户的拥护。

		前段时间，霸屏钱包（BOSS Wallet）公布了购买霸屏威赫手机促销奖励政策，即通过霸屏钱包（BOSS Wallet）购买霸屏威赫手机后，将同步订单至霸屏天下，同步在霸屏天下拨发推广佣金，该奖励政策将于12月5日（周三）24:00结束。

		在促销政策即将结束之前，经霸屏天下与霸屏钱包（BOSS Wallet）运营团队沟通，决定将霸屏威赫手机购买促销奖励政策升级为双向奖励，即保留原霸屏钱包（BOSS Wallet）促销奖励政策的基础上，自11月30日通过霸屏天下购买霸屏威赫手机的用户，同步会在霸屏钱包（BOSS Wallet）获得购买金额60%的积分奖励。

		双向促销政策，将于12月5日24:00结束，双向同步订单与积分奖励自购买之日起72小时内完成系统拨发，请全体用户悉知。

		特别提醒：通过霸屏钱包（BOSS Wallet）购买霸屏威赫手机时务必填写正确的霸屏天下账号；通过霸屏天下购买霸屏威赫手机的用户，请务必确保在霸屏钱包（BOSS Wallet）中有使用相同手机号注册的霸屏钱包（BOSS Wallet）账号。
		如霸屏钱包（BOSS Wallet）与霸屏天下无对应账号，请及时同步注册。
		请大家务必确认霸屏天下与霸屏钱包（BOSS Wallet）使用同一手机号注册。由于数据量过大，客服将不受理因账户不一致导致的积分、订单不能及时同步对的情况，所以请大家务必第一时间完成同步注册。

		促销奖励再升级，手机存量有限，欲购从速！

		霸屏天下&amp;BOSS Wallet
		2018年12月2日
		</view>
		<view><button class="pastbut">复制文案</button></view>
		</view>
		<view class="detailsImg">
			<view class="ImgTitle">图片信息</view>
			<view class="imgContent" v-for="img in Images" :key='img' @tap="downloadThis">
				<image :src="img" mode="widthFix"></image>
			</view>
		</view>
		<view>
			<button class="getTasks">立即领取</button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Images:[
					'https://www.sixkeep.com:8080/pics/aaa.png',
					'../../../static/img/banner2.jpg',
					'../../../static/img/banner1.jpg'
				]
			};
		},
		methods:{
			downloadThis(){
				console.log(this.Images.length)
			}
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
.detailsText,.detailsImg{
	width: 96%;
	height: auto;
	margin: 2% auto;
	font-size: 30upx;
	border: 1px solid #DADADA;
	box-shadow: 5upx 5upx 5upx #999999;
}
.detailsTitle,.ImgTitle{
	width: 96%;
	height: 75upx;
	line-height: 75upx;
	font-size: 35upx;
	color: #000;
	margin: 0 auto;
	border-bottom:1px solid #DADADA;
	
}
.detailsTips{
	width: 96%;
	line-height: 50upx;
	margin: 10upx auto;
	color: #333333;
	border-bottom:1px solid #DADADA;
}
.detailsContent{
	width: 96%;
	line-height: 50upx;
	margin: 10upx auto;
	color: #333333;
	text-indent: 20upx;
}
.pastbut{
	width: 30%;
	height: 80upx;
	border:1px solid #007AFF;
	border-radius: 5upx;
	color: #007AFF;
	margin: 20upx auto;
	}
.imgContent{
	width: 96%;
	margin: 10upx auto;
}
.imgContent image{
	width: 100%;
	margin: 10upx auto;
}
.getTasks{
	background: #E61532;
	width: 80%;
	color: #FFFFFF;
	margin-bottom: 10upx;
}
</style>
