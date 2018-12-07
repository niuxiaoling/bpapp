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
			<image :src="uploadimg" mode="aspectFit"  class="imgbox-img"></image>
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
					account:''
				},
				order:{}
				
			};
		},
		onLoad(options){
			 let order = JSON.parse(options.task);
			 console.log(order.taskInfo);
			 this.tasksDetails.taskTitle = order.taskInfo.taskTitle;
			 this.orderInfo.taskIdentifier = order.taskInfo.taskIdentifier; //编号
			 this.orderInfo.account = uni.getStorageSync('userInfo').account;
		},
		methods:{
			
			chooseImg(){
				var that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						uni.showLoading({
							mask:true,
							title:'loading'
						})
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
								success: (dat) => {
									if(dat.data.errorCode == '0000'){
							
										console.log(dat.data)
										uni.getImageInfo({
											src: res.tempFilePaths[0],
											success: function (image) {
												uni.hideLoading();
												// console.log(image);
												that.uploadimg = image.path;
											}
										});
									}
								},
								fail:(dat) =>{
									uni.hideLoading();
									console.log(JSON.stringify(res));
								}
							})
							
						}
						})
						
                       
                         
					}
				});
			},
// 			removeImage(img) {
// 				uni.showModal({
// 					content: '确认删除选中的图片？',
// 					success: function() {
// 						 if (res.confirm) {
// 									that.uploadimg = '';
// 								} else if (res.cancel) {
// 									
// 								}
// 						// const index = this.copyImages.findIndex(item => item === img);
// 						// this.copyImages.splice(0, 1);
// 						// console.log(t0his.copyImages)
// 						
// 					}
// 				});
// 			},
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
						    // 您已经提交任务,请等待管理员审核
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
