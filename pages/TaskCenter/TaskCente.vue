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
				<navigator  :url="task.url">
					<image :src="task.imgage" mode="scaleToFill"></image>
					<text>{{task.text}}</text>
				</navigator >
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
				'../../static/img/banner2.jpg',
				'../../static/img/banner2.jpg',
			],
			autoplay:true,
			circular:true,
			indicator:true,
			duration:500,
			tasksList:[
				{
				imgage:'../../static/img/renwudating.png',
				text:'任务大厅',
				url:'/pages/pwd/pwd'	
				},
				{
				imgage:'../../static/img/tijiaorenwu.png',
				text:'提交任务',
				url:'/pages/pwd/pwd'	
				},
				{
				imgage:'../../static/img/renwujilu.png',
				text:'任务记录',
				url:'/pages/pwd/pwd'	
				},
				
			]
			
		}
	}
</script>

<style>
.swpier-box{
	width: 100%;
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
.taskList navigator{
	
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;	
}
.taskList navigator image{
	width: 80upx;
	height: 80upx;
	margin: 10upx 0;
}
.taskList navigator text{
	margin-top:30upx;
	font-size:30upx;
}
</style>
