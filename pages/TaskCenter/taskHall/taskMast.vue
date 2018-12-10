<template>
	<view>
		<view class="hall">
			<view class="task" @tap="ysTask">
				<image src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
				<text>勇士任务大厅</text>
				<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
			</view>
			<view class="task" @tap="freeTask">
				<image src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
				<text>自由任务大厅</text>
				<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			taskType:'';
		},
		methods:{
			ysTask(){
				this.taskType ='01';
				uni.setStorageSync('taskType',this.taskType);
				uni.navigateTo({
					url:'/pages/TaskCenter/taskHall/ysTask'
				})
			},
			freeTask(){
				this.taskType ='02';
				uni.setStorageSync('taskType',this.taskType);
				uni.navigateTo({
					url:'/pages/TaskCenter/taskHall/ysTask'
				})
			}
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
</style>