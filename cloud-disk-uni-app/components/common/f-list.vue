<template>
	<view class="p-3 flex align-center border-bottom border-light-secondary">
		<text class="iconfont" :class="iconClass" style="font-size: 60rpx;"></text>
		<view class="flex flex-column ml-3" style="line-height: 1.2;">
			<text class="font-md">{{item.name}}</text>
			<text class="font-sm text-muted">{{item.create_time}}</text>
		</view>
		<view class="ml-auto flex align-center justify-center" style="width: 70rpx;height: rpx;" @click.stop="select">
			<text v-if="!item.checked" style="height: 40rpx;width: 40rpx;" class="rounded-circle border border-dark"></text>
			<text v-else class="iconfont icon-xuanze-yixuan text-primary" style="font-size: 40rpx;"></text>
		</view>
	</view>
</template>

<script>
	const icons = {
	  dir: {
	    icon: 'icon-file-b-2',
	    color: 'text-warning'
	  },
	  image: {
	    icon: 'icon-file-b-6',
	    color: 'text-success'
	  },
	  video: {
	    icon: 'icon-file-b-9',
	    color: 'text-primary'
	  },
	  text: {
	    icon: 'icon-file-s-7',
	    color: 'text-info'
	  },
	  none: {
	    icon: 'icon-file-b-8',
	    color: 'text-muted'
	  }
	};
	export default{
		props:{
			item:Object,
			index:[Number,String]
		},
		computed:{
			iconClass(){
				let item = icons[this.item.type];
				return `${item.icon} ${item.color}`;
			}
		},
		methods:{
			select(){
				this.$emit('select',{
					index: this.index,
					value: !this.item.checked
				})
			}
		},
		onLoad() {
			uni.request({
				url:'http://localhost:7002/list',
				method:'GET',
				success:res=>{
					console.log(res.data);
				}
			})
		}
	}
</script>

<style>
</style>
