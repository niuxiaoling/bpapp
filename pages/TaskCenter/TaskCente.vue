<template>
	<view>
		<swiper class="swpier-box" :autoplay="autoplay" :circular="circular" :duration="duration" 
		 :indicator-dots="indicator" indicator-active-color="#3AC198">
			<swiper-item v-for=" ite in items" :key = "ite">
				<image :src="ite" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
		<view class="taskListBOX">
			<view class="taskList" v-for="task in tasksList" :key = "task">
				<view class="taskUrl" @tap="goURL(task.url)">
					<image :src="task.imgage" mode="scaleToFill"></image>
					<text>{{task.text}}</text>
				</view >
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data:{
			items:[
				'../../static/img/banner1.jpg',
				'../../static/img/banner2.jpg',
				'../../static/img/banner3.jpg',
				'../../static/img/banner4.jpg',
			],
			userInfo:'',
			autoplay:true,
			circular:true,
			indicator:true,
			duration:500,
			tasksList:[
				{
					imgage:'../../static/img/renwudating.png',
					text:'任务大厅',
					url:'/pages/TaskCenter/taskHall/YSTask',
				},
				{
				imgage:'../../static/img/tijiaorenwu.png',
				text:'提交任务',
				url:'/pages/TaskCenter/submitTask/submitTasksList'	
				},
				{
				imgage:'../../static/img/renwujilu.png',
				text:'任务记录',
				url:'/pages/TaskCenter/taskRecord/taskRecord'		
				},
				
			]
			
		},
		onLoad() {
			const values = uni.getStorageSync('userInfo');
			this.userInfo = values;
			
		},
		methods:{
			goURL:function(url){
				let that = this;
					if(that.userInfo =="" ||!that.userInfo){
						uni.showModal({
							title:'温馨提示',
							content:"当前没有登陆，请登陆",
							success:function(result){
								if(result.confirm){
									uni.navigateTo({
										url:'../index/index',
									})
								}
								if(result.cancel){
									console.log("取消")
								}
							}
						});;
					}else{
						uni.navigateTo({
							url:url
						})
					}
				
			},
		}
	}
</script>

<style>
.swpier-box{
	width: 100%;
	height: 350upx;
}
.swpier-box swiper{
	width: 100%;
	height: 100%;
}
.swpier-box image{
	width: 100%;
	height: 100%;
}

.taskListBOX{
	display: flex;
	flex-wrap:wrap;
	background-color: #ffffff;
	margin-top:30upx;
	padding: 20upx 0;
}

.taskList{
	width:33%;
	display: flex;
	justify-content:center;
	align-items:center;
	flex-warp:warp;
	padding: 20upx 0;
	border-right:1px solid #ddd;
}
.taskList .taskUrl{
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;	
}
.taskList:last-child{
	border-right:none;
}
.taskList .taskUrl image{
	width: 80upx;
	height: 80upx;
	margin: 10upx 0;
}
.taskList .taskUrl text{
	margin-top:30upx;
	font-size:30upx;
}
</style>
