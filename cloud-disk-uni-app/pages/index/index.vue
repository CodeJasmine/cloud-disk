<template>
	<view>
		<!-- 自定义导航栏 -->
		<nav-bar>
			<text slot="left" class="font-md ml-3">首页</text>
			<template slot="right">
				<view style="width: 60rpx;height: 60rpx;"
				class="flex align-center justify-center bg-icon rounded-circle mr-3">
					<text class="iconfont icon-zengjia"></text>
				</view>
				<view style="width: 60rpx;height: 60rpx;"
				class="flex align-center justify-center bg-icon rounded-circle mr-3">
					<text class="iconfont icon-gengduo"></text>
				</view>
			</template>
		</nav-bar>
		<!-- 搜索框 -->
		<view class="px-3 py-2">
			<view class="position-relative">
				<view style="height: 70rpx;width: 70rpx;position: absolute;top: 0;left: 0;"
				class="flex align-center justify-center text-light-muted">
				<text class="iconfont icon-sousuo"></text>
				</view>
			</view>
			<input type="text" style="height: 70rpx; padding-left: 70rpx;" class="bg-light font-md rounded-circle" placeholder="搜索网盘文件" />
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/common/nav-bar.vue'
	import uniSearchBar from '@/components/uni-ui/uni-search-bar/uni-search-bar.vue'
	export default {
		components:{
			navBar,
			uniSearchBar
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
