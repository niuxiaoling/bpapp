<template>
	<view>
		<view class="tpis" v-if="ysText">
			<text style="color: #D32241;">*</text>
			勇士任务每天只可领取2条，自由任务可领取多条
			</view>
	<view class="ystaskList" v-for=" ys in ystaskList" :key='ys' @tap="goReceive(ys)">
		<image src="../../../static/img/logoicon1.png" mode="aspectFit"></image>
		<view class="ysText">
			<view class="textTop">
				<text>{{ys.taskTitle}}</text>
				<!-- <text>（{{ys.describe}}）</text> -->
			</view>
			<view class="textTop">
				<text>{{ys.statusTask =='01'?"未领取":'已领取' }}</text>
				<text style="color: #D32241;padding-left: 10upx;font-weight: 500;">{{ys.stauts1}}</text>
			</view>
		</view>
		<view class="price">
			<text style="color: #D32241;">￥{{ys.contributionNo}}</text>
			<text>{{ys.taskType =='01'?"【勇士】":'【自由】' }}</text>
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
				ysText:false,
				ystaskList:[],
				taskData:{
					taskType:'',
					account:''
				},
				
			};
		},
		onShow() {
			uni.showLoading({
				mask:'true',
				title:'加载中'
			})
			let that =this;
			this.taskData.taskType = uni.getStorageSync('taskType');
			
			// console.log(this.taskData.taskType)
			that.taskData.account = uni.getStorageSync('userInfo').account;
				const jsonString = {
					taskInfo:this.taskData,
					requestType:"selectTask",
				}
				const param ={
					controllerRequestType:"taskControllerService",
					jsonString:JSON.stringify(jsonString)
				}
				
				uni.request({
					url:that.websiteUrl,
					method:'POST',
					header: {
						"content-type":"application/x-www-form-urlencoded"
					},
					data:param,
					success(res) {
						if(res.data.errorCode == '0000'){
							 that.ystaskList = res.data.taskInfo.taskInfoList;
							 // console.log(JSON.stringify(that.ystaskList))
							 uni.hideLoading()
						}else{
							uni.showToast({
								icon:'none',
								title:res.data.errorMessage
							})
						}
						
					},
					fail(res) {
						// console.log(JSON.stringify(res))
						uni.hideLoading()
					},
					
				})
			uni.hideLoading()
		},
		methods:{
			goReceive(vl){
				// console.log(JSON.stringify(vl));
					uni.setStorageSync('tasksDetails',vl);
					uni.navigateTo({
						url:'ysDetails'
					})
				}
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
