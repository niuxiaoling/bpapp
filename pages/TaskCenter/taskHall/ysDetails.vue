<template>
	<view>
		<view class="detailsText">
			<view class="detailsTitle">{{tasksDetails.taskTitle}}</view>
			<view class="detailsTips">请将下面得文本图片复制发送朋友圈（点击图片保存到手机）</view>
			<view class="detailsContent">
				<text>
					{{tasksDetails.copyWriting}}
				</text>
			</view>
		<view><button class="pastbut" @click="copywriting">复制文案</button></view>
		</view>
		<view class="detailsImg">
			<view class="ImgTitle">图片信息</view>
			<view class="imgContent" v-for="img in copyImages" :key='img'>
				<image :src="img" mode="widthFix" @tap="saveImage(img)"></image>
			</view>
		</view>
		<view>
			<button class="getTasks"  @tap="getTask">立即领取</button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tasksDetails:{
					taskTitle:'',
					copyWriting:'',
					picId:'',
					picId2:'',
					taskIdentifier:"",//任务编号
					statusTask:''//任务状态
				},
				copyImages:[],
				orderInfo:{
					taskIdentifier:'',
					account:''
				}
			};
		},
		onLoad(){
			this.tasksDetails = uni.getStorageSync('tasksDetails');
			this.copyImages=[
				'https://www.sixkeep.com:8080/pics/'+this.tasksDetails.picId,
				'https://www.sixkeep.com:8080/pics/'+this.tasksDetails.picId2,
			];
			this.orderInfo.taskIdentifier = this.tasksDetails.taskIdentifier;
			this.orderInfo.account = uni.getStorageSync('userInfo').account;
		},
		methods:{
			getTask(){
				if(this.tasksDetails.statusTask !='01'){
					uni.showToast({
						icon:'none',
						title:'当前任务已领取，请勿重复领取'
					});
					return;
				}else{
				const jsonString = {
					orderInfo:this.orderInfo,
					requestType:"creatOrde",
				}
				const param ={
					controllerRequestType:"orderControllerService",
					jsonString:JSON.stringify(jsonString)
				}
				uni.request({
					url:this.websiteUrl,
					method:'POST',
					header: {
						"content-type":"application/x-www-form-urlencoded"
					},
					data:param,
					success(res) {
						console.log(res.data);
						if(res.data.errorCode =='0000'){
							uni.showToast({
								icon:'none',
								title:'领取任务成功！'
							})
							this.tasksDetails.statusTask = '08';
						}else{
							uni.showToast({
								icon:'none',
								title:res.data.errorMessage
							})
						}
					},
					fail(res) {
					uni.showToast({
						icon:'none',
						title:'网络异常！请稍后重试'
					})	
					}
				})	
				}
				
					
			},
			copywriting(){
				uni.setClipboardData({
					data: this.tasksDetails.copyWriting,
					success: function () {
						uni.showToast({
							title: '已复制到剪贴板',
							duration: 2000,
							icon:'none'
						});
					}
				});
			},
			
			saveImage(img){
				
				uni.showModal({
					title:'',
					content:"保存图片到相册吗？",
					success:function(result){
						if(result.confirm){		
							uni.downloadFile({
								url: img,
								success: (e) => {
									uni.saveImageToPhotosAlbum({
										filePath: e.tempFilePath,
										success: () => {
											uni.showToast({
												icon: "none",
												title: "已保存到手机相册"
											})
										},
										fail: () => {
											uni.showToast({
												icon: "none",
												title: "保存到手机相册失败"
											})
										}
									});
								},
								fail: (e) => {
									uni.showModal({
										content: "下载失败，" + e.errMsg,
										showCancel: false
									})
								}
							})
						}
						if(result.cancel){
							console.log("取消")
						}
					}
				});
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
	margin: 15upx auto;
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
	width: 96%;
	margin: 0 auto;
	border: 1px solid #DADADA;
	box-shadow: 5upx 5upx 5upx #999999;
	
}
.getTasks{
	background: #E61532;
	width: 80%;
	color: #FFFFFF;
	margin: 30upx auto;
}
</style>
