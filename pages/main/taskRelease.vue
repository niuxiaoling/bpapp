<template>
	<view class="taskView">
		<view class="taskTitle">
			<text>标题：</text>
			<input class="title" type="text" placeholder="请输入标题(最多12字符)" maxlength="12"/>
		</view>
		<view class="taskContent">
			<textarea class="contentText" placeholder="请输入广告内容(最多150字符)"></textarea>
			<view class="contentImg">
				
			</view>
		</view>
		<view class="taskTitles">
			<text>单笔广告费：</text>
		    <input type="number" maxlength="5" v-model="singleMoney" @input="totalPrice()"/>
		</view>
		<view class="taskTitles">
			<text>任务发布数量：</text>
			<input type="number" maxlength="5" v-model="taskNumber" @input="totalPrice()"/>
		</view>
		<view class="taskTitles">
			<text>广告总价：</text>
			<text>{{totalPrices}}</text>
		</view>
		<view class="submitPrice">
			<button class="taskGo">发布任务</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				singleMoney:'',
				taskNumber:'',
				totalPrices:''
			};
		},
		methods:{
			totalPrice(){
				var  that = this;
				that.totalPrices = that.singleMoney*that.taskNumber;
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
</style>
