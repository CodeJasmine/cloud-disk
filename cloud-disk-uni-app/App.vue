<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//初始化用户信息
			this.$store.dispatch('initUser')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	/* 引用自定义的iconfont样式 */
	@import url("./common/icon.css");
	/* 动画库 */
	/* @import url("./common/animate.css"); */
	/* 自定义样式库 */
	@import url("./common/free.css");
	/* 全局样式 */
	@import url("./common/common.css");
</style>
