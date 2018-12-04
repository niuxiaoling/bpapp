<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	page {
	    min-height: 100%;
			width:100%;
			background:#EDEDED;
			overflow-x: hidden;
	    }
	
	    .content {
	        display: flex;
	        flex: 1;
	        flex-direction: column;
	        padding: 20px;
	    }
		.placeholder{
			color: #f6f6f6;
		}
	   
</style>
