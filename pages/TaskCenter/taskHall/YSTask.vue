<template>
	<view>
		<view class="tpis">
			<text style="color: #D32241;">*</text>
			勇士任务每天只可领取2条，自由任务可领取多条
		</view>
		<view class="ystaskList" v-for=" ys in ystaskList" :key='ys' @tap="gotaskDetail(ys)">
			<image src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
			<view class="ysText">
				<view class="textTop">
					<text>{{ys.title}}</text>
					<text>（{{ys.describe}}）</text>
				</view>
				<view class="textTop">
					<text>{{ys.stauts}}</text>
					<text style="color: #D32241;padding-left: 10upx;font-weight: 500;">{{ys.stauts1}}</text>
				</view>
			</view>
			<view class="price">
				<text style="color: #D32241;">￥{{ys.price}}</text>
				<text>【{{ys.leve}}】</text>
			</view>
			<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
		</view>
		<view class="Taskhint">
			<image src="../../../static/img/Taskhint.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ystaskList:[
					{
						title:'勇士任务2',
						describe:"丰胸2",
						stauts:"未领取",
						stauts1:"已领完",
						price:30,
						leve:"高级"
					},
					{
						title:'勇士任务2',
						describe:"商城",
						stauts:"未领取",
						stauts1:"",
						price:10,
						leve:"中级"
					},
					{
						title:'勇士任务8',
						describe:"丰胸2",
						stauts:"未领取",
						stauts1:"已领完",
						price:30,
						leve:"高级"
					},
					{
						title:'勇士任务10',
						describe:"丰胸2",
						stauts:"未领取",
						stauts1:"已领完",
						price:30,
						leve:"高级"
					}
				],
				
			};
		},
		methods:{
			gotaskDetail(item){
				uni.navigateTo({
					url:'/pages/TaskCenter/taskHall/ysDetails'
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
.tpis{
	padding: 20upx 20upx 0 20upx;
	font-size: 30upx;
}
.ystaskList{
	width: 100%;
	padding:20upx 0;
	margin: 20upx auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80upx;
	margin-bottom: 30upx;
	border-bottom:1px solid #f5f5f5;
	border-top: 1px solid #f5f5f5;
}
.ystaskList image{
		width: 80upx;
		height: 80upx;
		margin-left: 10upx;
		}
.ystaskList .you{
	height: 32upx !important;
}
.ysText{
	display: flex;
	flex-direction: column;
	font-size: 32upx;
	}
.price{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.Taskhint{
	width: 96%;
	padding: 0 2%;
}
.Taskhint image{
	width: 100%;
}
</style>
