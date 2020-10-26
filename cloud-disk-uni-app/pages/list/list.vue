<template>
	<view style="height: 100vh;" class="flex flex-column">
		<!-- 顶部tab -->
		<view class="flex border-bottom border-light-secondary" style="height: 100rpx;">
			<view class="flex-1 flex flex-column align-center justify-center" 
			v-for="(item,index) in tabBars" :key="index" 
			:class="index === tabIndex? 'text-main': ''"
			@click="changeTab(index)">
				<text class="font-md">{{ item.name }}</text>
				<text style="height: 8rpx; width: 140rpx;" 
				class="rounded" 
				:class="tabIndex === index ? 'bg-main' : 'bg-white'"></text>
			</view>			
		</view>	
		
		<!-- swiper内容随着上面tab的切换联动 -->
		<swiper :duration="250" class="flex-1 flex" :current="tabIndex" @change="changeTab($event.detail.current)">
			<swiper-item class="flex-1 flex" v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" class="flex-1">
					<view style="height: 60rpx;" class="bg-light flex align-center font-sm text-muted">文件下载至storage/xxxx/xxxxx</view>
					<view class="p-2 border-bottom border-light-secondary font text-muted">
							下载中（{{downing.length}})
					</view>
						
					<f-list  v-for="(item,index) in  downing " :key="'i'+index" :item="item" :index="index" >
						<view class="flex align-center text-main" style="height: 70rpx;">
							<text class="iconfont icon-zanting"></text>
							<text class="ml-1">{{item.download}}%</text>
						</view>
						<!-- 进度条组件，uniapp自带，percent绑定下载百分比数值 -->
						<progress slot="bottom" :percent="item.download" activeColor="#009CFF" :stroke-width="4" ></progress>
					</f-list>
					<view class="p-2 border-bottom border-light-secondary font  text-muted">
						下载完成({{downed.length}})
					</view>
					<f-list
						v-for="(item,index) in downed" 
						:key="'d'+index"
						:item="item"
						:index="index"
						:showRight="false"
					></f-list>
				</scroll-view>
			</swiper-item>
		</swiper>		
	</view>
	
</template>

<script>
	import fList from '@/components/common/f-list.vue'
	export default {
		components:{
			fList,
		},
		data() {
			return {
				tabIndex:0,
				tabBars: [
					{
						name:'下载列表'
					},
					{
						name:'上传列表'
					}
				],
				list: [
					{
						type: 'image',
						name: '狗.jpg',
						download: 40,
						create_time: '2020-10-21 08:00',
						checked: false
					},
					{
						type: 'image',
						name: '猫.jpg',
						download: 20,
						create_time: '2020-10-21 08:00',
						checked: false
					},
					{
						type: 'video',
						name: '马云跳舞.mp4',
						download: 100,
						create_time: '2020-10-23 08:40',
						checked: false
					},			
					{
						type: 'text',
						name: '记事本.txt',
						download: 100,
						create_time: '2020-10-21 08:00',
						checked: false
					},
					{
						type: 'none',
						name: '压缩包.rar',
						download: 100,
						create_time: '2020-10-21 08:00',
						checked: false
					}
				],
			};
		},
		computed:{
			// 下载中
		    downing() {
				return this.list.filter(item => {
					return item.download < 100;
				})
			},
			// 下载完成
			downed() {
				return this.list.filter(item => {
					return item.download  === 100;
				})
			}
		},
		methods:{
			changeTab(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style lang="scss">
</style>
