<template>
	<view class="hall">
		<view class="task">
			<image src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
			<text>勇士任务</text>
			<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
		</view>
		
		<view class="task" v-for="tasks in submitLists" :key='tasks'>
				<view class="subcontent">
					<image  src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
					<text>{{tasks.title}}</text>
					<text style="color: #999999;">（{{tasks.dips}}）</text>
				</view>
				<view>
					<text style="color: #666666;">{{tasks.stauts}}</text>
					<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
				</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitLists:[
					{
						title:"勇士任务001",
						dips:"喜讯",
						stauts:"待提交"
					},
					{
						title:"勇士任务002",
						dips:"喜讯3",
						stauts:"待提交"
					},
				]
			};
		},
		methods:{
			
		}
	}
</script>

<style>
	.hall{
		padding-top: 30upx;
	}
	.task{
		width: 100%;
		padding:20upx 0 ;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		width: 100%;
		height: 80upx;
		
		margin-bottom: 30upx;
	}
	.task image{
		margin-left: 10upx;
		width: 80upx;
		height: 80upx;
		}
	.task .you{
		height: 32upx !important;
		}
		
	.subcontent{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}	
</style>
