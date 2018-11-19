<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logoBanner.jpg" mode="widthFix"></image>
		</view>
		<view class="bevip">
			<view class="bevip-item" v-bind:class="active==1?'active':''"  @tap="change(1)">
				<text>普通VIP</text>
				<text  style="color:red">￥99</text>
			</view>
			<view class="bevip-item" v-bind:class="active==2?'active':''"  @tap="change(2)">
				<text>高级VIP</text>
				<text style="color:red">￥999</text>
			</view>
		</view>
		<view class="bevipbtn">
			<navigator url="../MoneyWay/request-payment?money=99">
				<button v-if="active==1"  >成为VIP</button>
			</navigator>
			<navigator url="../MoneyWay/request-payment?money=999">
				<button v-if="active==2" >成为高级VIP</button>
			</navigator>
			
		</view>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	export default {
		data() {
			return {
				active:1,
				money:'99',
				vipLevel:""
			};
		},
		methods:{
			change(index){
				if(this.vipLevel){
					if(this.vipLevel == 1){  
						this.active == 2;	
					}else if(this.vipLevel == 2){
						this.active != 2;	
					}	
				}else{
					this.active = index;
				}
				
				
			}
		},
		onLoad:function(){
			this.vipLevel = uni.getStorageSync('vipLevel');
			this.vipLevel = 1;
			//99元套餐
			if(this.vipLevel == 1){  
				this.active == 2;	
			}else if(this.vipLevel == 2){
				this.active == 1;	
			}
			
		}
	}
</script>
 
<style>
.logo image{
	 width: 100%;
 }
 .bevip{
	 margin:40upx auto 40upx;
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
 }
 .bevip .bevip-item{
     padding:0 15upx;
	height:70upx;
	line-height:70upx;
	font-size:40upx;
	border:1px solid #444;
	border-radius:5px;
 }
 .bevip .bevip-item.active{
	 border:1px solid red;
 }
 .bevipbtn{
	 width:60%;
	 margin:60upx auto 0;
	
 }
 .bevipbtn button{
	 background: red;
	 color:#fff;
	 border-radius: 5px;
 }
	
</style>
