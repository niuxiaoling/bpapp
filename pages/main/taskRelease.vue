<template>
	<view class="taskView">
		<view class="taskTitle">
			<text>标题：</text>
			<input class="title" v-model="taskData.taskTitle" type="text" placeholder="请输入标题(最多6字符)" maxlength="6" />
		</view>
		<view class="taskContent">
			<textarea class="contentText" v-model="taskData.copyWriting" placeholder="请输入广告内容(最多150字符)" maxlength="150"></textarea>
			<!-- 图片部分 -->
			<view class="contentImg">
				<view class="ts-uploader">
					<view class="ts-uploader-body">
						<view class="ts-uploader__files">
							<block v-for="(image,index) in imageList" :key="index">
								<view class="ts-uploader__file">
									<image class="ts-uploader__img" :src="image" @tap="previewImage" @longpress="removeImage(image)"></image>
								</view>
							</block>
							<view class="ts-uploader__input-box" v-if="imageList.length < count">
								<view class="ts-uploader-info ts-h5">{{imageList.length}}/{{count}}</view>
								<view class="ts-uploader__input" @tap="chooseImg"></view>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="taskTitles">
			<text>单笔广告费：</text>
		    <input type="number" maxlength="5" v-model="taskData.contributionNo"/>
		</view>
		<view class="taskTitles">
			<text>任务发布数量：</text>
			<input type="number" maxlength="5" v-model="taskData.releaseTaskNo"/>
		</view>
		<view class="taskTitles">
			<text>广告总价：</text>
			<text>{{taskData.allMoney}}</text>
		</view>
		<view class="submitPrice">
			<button class="taskGo" @click="publishTask">发布任务</button>

		</view>
	</view>
</template>

<script>
	export default {
// 		props: {
// 			count: {
// 				type: Number,
// 				default: 2
// 			}
// 		},
		data() {
			return {
				count:2,
				imageList: [],
				picId:[],
				taskData:{
					taskTitle:"",  //标题
					copyWriting:"", //文案
					contributionNo:'', //发布任务贡献值
					releaseTaskNo:"",  //发布任务数量
					allMoney:"",  //总数
					picId:"",   //图片1
					picId2:"",  //图片2
				},
				taskIdentifier:"", //任务编号
				vipLevel:"",
				userInfo:{}
			};
		},
		onUnload() {
			this.imageList = [];
		},
		onLoad() {
			this.vipLevel = uni.getStorageSync('vipLevel') ?uni.getStorageSync('vipLevel') :"";
			this.userInfo = uni.getStorageSync('userInfo');
		},
		methods:{
			publishTask(){
				var that = this;
				this.taskData.allMoney = Number(this.taskData.contributionNo)*Number(this.taskData.releaseTaskNo);
				this.taskData.picId = this.picId[0];
				this.taskData.picId2 = this.picId[1];
				console.log(this.taskData,this.picId);
				this.taskData.account = this.userInfo.account;
				const jsonString = {
					taskInfo:this.taskData,
					requestType:"creatTask",
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
							if(res.data.taskInfo.statusTask == '04'){
								console.log(res.data)
								that.taskIdentifier = res.data.taskInfo.taskIdentifier;
// 								uni.navigateTo({
// 									url:'bVip',
// 								})
								uni.showModal({
									content:'自由任务暂未开发！'
								})
							
							}else{
								uni.showModal({
								content: '勇士任务发布成功',
								success: function (res) {
								uni.reLaunch({
										url:'../main/main',
								});
								}
							});
							}
						}
					},
					fail:(res) =>{
						uni.showToast({
							icon:'none',
							title:'网络异常，请重试'
						})
						console.log(JSON.stringify(res));
					}
				})
			},
			totalPrice(){
				var  that = this;
				this.taskData.allMoney = Number(this.taskData.contributionNo)*Number(this.taskData.releaseTaskNo);
			},
			urlTobase64(url){
				var that = this;
				uni.request({
					url:url,
					method:'GET',
					responseType: 'arraybuffer',
					success: ress => {
						that.base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
						that.base64 = 'data:image/jpeg;base64,' + that.base64 //不加上这串字符，在页面无法显示的哦
					}
				})
			},
			chooseImg() {
				var that = this;
				//选择图片
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: 'compressed',
					count: that.count - that.imageList.length,
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
						
						// that.base64 = that.urlTobase64(res.tempFilePaths[0]);
					
						// self.imageList = self.imageList.concat(res.tempFilePaths);
						//只添加不重复的文件
						if (that.imageList.length > 0) {
							for (let img of res.tempFilePaths) {
								let index = that.imageList.findIndex(item => item === img);
								if (index === -1) {
									that.imageList.push(img);
								}
							}
						} else {
							that.imageList = res.tempFilePaths;
						}
						
						// console.log(JSON.stringify(self.imageList))
						//触发所选择文件更改事件，参数为文件列表
						that.$emit('change', that.imageList);
					}
				});
			},
			removeImage(img) {
				var that = this;
				uni.showModal({
					content: '确认删除选中的图片？',
					success: function() {
						const index = that.imageList.findIndex(item => item === img);
						that.imageList.splice(index, 1);
					}
				});
			},
			previewImage() {
				//预览图片
				uni.previewImage({
					urls: this.imageList
				});
			}
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
.taskView{
	width: 95%;
	margin: 0 auto;
}
.taskTitle{
	display: flex;
	padding: 30upx 0;
	justify-content: space-between;	
}
.taskTitles{
	display: flex;
	margin: 30upx 0;
	padding: 10upx 0;
	justify-content: space-between;
	border-bottom: 1px solid #DADADA;
}
.taskTitle input{
	text-align: right;	
	width: 80%;
}
.taskTitles input{
	text-align: right;
}
.taskContent{
	margin: 10upx 0;
	border: 1px solid #999999;
	height: 600upx;
	padding-top:15upx;
}
.taskContent .contentText{
	width: 96%;
	height: 400upx;
	margin: 0 auto;
}
.taskGo{
	background: #E86318;
	color: #FFFFFF;
	}
	.ts-uploader {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	}
	
	.ts-uploader-head {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
	
	.ts-uploader-info {
	    color: #b2b2b2;
			position: absolute;
			right:0;
			bottom: 0;
	}
	
	.ts-uploader-body {
	    margin-top: 16upx;
	    display: flex;
	    flex-direction: column;
	    flex: 1;
	}
	
	.ts-uploader__files {
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
			margin-left:18upx;
	}
	
	.ts-uploader__file {
	    display: flex;
	    flex-direction: row;
	    margin-right: 18upx;
	    margin-bottom: 18upx;
	}
	
	.ts-uploader__img {
	    display: flex;
	    flex-direction: row;
	    width: 158upx;
	    height: 158upx;
	}
	
	.ts-uploader__input-box {
	    float: left;
	    position: relative;
	    margin-right: 18upx;
	    margin-bottom: 18upx;
	    width: 154upx;
	    height: 154upx;
	    border: 2upx dashed #d9d9d9;
	}
	
	.ts-uploader__input-box:before,
	.ts-uploader__input-box:after {
	    content: ' ';
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
	    background-color: #d9d9d9;
	}
	
	.ts-uploader__input-box:before {
	    width: 4upx;
	    height: 79upx;
	}
	
	.ts-uploader__input-box:after {
	    width: 79upx;
	    height: 4upx;
	}
	
	.ts-uploader__input-box:active {
	    border-color: #999999;
	}
	
	.ts-uploader__input-box:active:before,
	.ts-uploader__input-box:active:after {
	    background-color: #999999;
	}
	
	.ts-uploader__input {
	    position: absolute;
	    z-index: 1;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    opacity: 0;
	}
</style>
