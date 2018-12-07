<template>
	<view class="hall">
		<view class="task" v-for="tasks in submitLists" :key='tasks' @tap="goSubmitContent(tasks)">
			<view class="subcontent">
				<image  src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
				<text>{{tasks.taskTitle}}</text>
				<text style="color: #999999;">（{{tasks.taskType == '01'?'勇士':'自由'}}）</text>
			</view>
			<view>
				<text style="color: #666666;">{{tasks.statusTask == '02'?'待提交':'已提交'}}</text>
				<image class="you" src="../../../static/img/youjiantou.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitLists:[],
				orderInfo:{
					account:''
				}
			};
		},
		onLoad() {
			var that = this;
			this.orderInfo.account = uni.getStorageSync('userInfo').account;
			const jsonString = {
				orderInfo:this.orderInfo,
				requestType:"getOrdeFromAccount",
			}
			const param ={
				controllerRequestType:"orderControllerService",
				jsonString:JSON.stringify(jsonString)
			}
			uni.request({
				url:this.websiteUrl,
				method:'POST',
				header:{
					"content-type":"application/x-www-form-urlencoded"
				},
				data:param,
				success(res) {
					// console.log(res);
					// if(res.data.errorCode == '0000'){
						that.submitLists = res.data.orderInfo.ordeList;		
					// }else{
// 						uni.showToast({
// 							icon:'none',
// 							title:res.data.errorMessage
// 						})
					// }
				},
				fail(res) {
					uni.showToast({
						icon:'none',
						title:'网络异常，请稍后重试'
					})
				}
			})
		},
		methods:{
			goSubmitContent(task){
				uni.navigateTo({
					url:'./submitContent?task='+JSON.stringify(task)
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
		padding:10upx 0 ;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		width: 100%;
		min-height: 70upx;
		margin-bottom: 20upx;
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
