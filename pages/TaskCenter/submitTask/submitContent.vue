<template>
	<view>
		<view class="item-list">
			<text>1.提交的任务:</text>
			<text>{{tasksDetails.taskTitle}}</text>
		</view>
		<view class="item-list">
			<text>2.截取朋友圈图片并上传:</text>
		</view>
		<view class="item-list">
			<view class="btn-upload" @tap="chooseImg">请选择图片</view>
		</view>
		<view class="imgbox">
			<image :src="uploadimg" mode="aspectFit"  class="imgbox-img" @tap="previewImage" @longpress="removeImage(image)"></image>
		</view>
		<view v-if="uploadimg !=''">
			<button class="getTasks"  @tap="getTask">提交</button>
		</view>
		<view class="Taskhint" >
			<image src="../../../static/img/Taskhint.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uploadimg:'',

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
					account:'',
					orderNo:''
				},
				order:{}
				
			};
		},
		onLoad(options){
			 let order = JSON.parse(options.task);
			 this.tasksDetails.taskTitle = order.taskInfo.taskTitle;
			 this.orderInfo.taskIdentifier = order.taskInfo.taskIdentifier; //编号
			 this.orderInfo.orderNo = order.orderNo;
			 this.orderInfo.account = uni.getStorageSync('userInfo').account;
		},
		methods:{
			
			chooseImg() {
				var that = this;
				//选择图片
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: 'compressed',
					count: 1,
					success: function(res) { 
						uni.request({
							url:res.tempFilePaths[0],
							method:'GET',
							responseType: 'arraybuffer',
							success: ress => {
								var base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
								// base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
								// that.base64 = base64;
								const jsonString = {
									taskInfo:{
										picBast64:base64,
										upType:'pic',
									},
									requestType:"upFile",
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
									success: (res) => {
										if(res.data.errorCode == '0000'){
											that.picId.push(res.data.taskInfo.picId);
										}
									},
									fail:(res) =>{
										console.log(JSON.stringify(res));
									}
								})
								
							}
						})
							that.uploadimg = res.tempFilePaths[0];
							//触发所选择文件更改事件，参数为文件列表
							that.$emit('change', that.uploadimg);
					}
				});
				},
			previewImage(){
				//预览图片
				uni.previewImage({
					urls: [this.uploadimg]
				});
			},
			removeImage(img) {
				var that = this;
				uni.showModal({
					content: '确认删除选中的图片？',
					success: function() {
						 that.uploadimg = '';
					}
				});
			},
			getTask(){
				const jsonString = {
					orderInfo:this.orderInfo,
					requestType:"finishOrde",
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
							uni.showModal({
								content:'您已经提交任务,请等待管理员审核',
								
								success(res) {
									if(res.confirm){
										
									}
										
									if(res.cancel){
									}
								}
							})
							
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
			
		}		
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
	.item-list{
		margin:20upx 0 20upx 20upx;
		font-size:30upx;
		display: flex;
		justify-content: flex-start;
	}
	.btn-upload{
		display: inline-block;
		padding: 0 20upx;
		border-radius: 10upx;
		height:60upx;
		line-height: 60upx;
		color:#fff;
		background:#E61532;
		font-size:30upx;
	}
	.imgbox{
		margin:0 auto;
		padding:0 20upx;
	}
	.imgbox-img{
		width:100%;
	}
	.getTasks{
		background: #E61532;
		width: 80%;
		color: #FFFFFF;
		margin: 30upx auto;
	}
	.Taskhint{
		width: 96%;
		padding: 0 2%;
	}
	.Taskhint image{
		width: 100%;
	}
</style>
