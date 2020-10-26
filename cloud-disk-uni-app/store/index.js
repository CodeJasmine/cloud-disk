import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 将登录后的user和token作为状态管理对象，定义actions为登录方法，
// 调用 的时候用dispatch分发，这样做的好处是可以包含异步操作

import $H from '../common/request.js';

export default new Vuex.Store({
	state: {
		//用来记录上传任务和下载任务
		downList:[],
		uploadList:[],
		user:null,
		token:null
	},
	actions:{
		initList({
			state
		})
		{
			if(state.user){
				let d=uni.getStorageSync("downList_"+state.user.id)
				let u=uni.getStorageSync("uploadList_"+state.user.id)
				state.downList=d?JSON.parse(d):[],
				state.uploadList=u?JSON.parse(u):[]
			}
		},
		//退出登录
		logout({ state }){
			$H.post('/logout', {},{
				token:true
			})
			state.user = null
			state.token = null
			uni.removeStorageSync('user')
			uni.removeStorageSync('token')
			uni.removeStorageSync('dirs');
			//重启应用
			uni.reLaunch({
				url: '/pages/login/login'
			})
		},
		//登录
		login({ state },user){
			state.user = user
			state.token = user.token
			
			uni.setStorageSync('user', JSON.stringify(user))
			uni.setStorageSync('token', user.token)
		},
		//初始化用户信息
		initUser({ state }){
			let user = uni.getStorageSync('user')
			if(user){
				state.user = JSON.parse(user)
				state.token = state.user.token
			}
		},
		updateSize({ state },e){
			state.user.total_size = e.total_size
			state.user.used_size = e.used_size
		},
		//创建一个上传任务
		createUploadJob({
			state
		},obj){
			//添加到上传队列的最前面
			state.uploadList.unshift(obj)
			//异步设置本地存储，记录键值对为：上传人和上传内容
			uni.setStorage({
				key:"uploadList_"+state.user.id,
				data:JSON.stringify(state.uploadList)
			})
		},
		//更新上传任务进度
		updateUploadJob({
			state
		},obj){
			let i =state.uploadList.findIndex(item=>item.key===obj.key)
			//如果存在
			if(i!== -1){
				state.uploadList[i].progress=obj.progress
				state.uploadList[i].status=obj.status
				uni.setStorage({
					key:"uploadList_"+state.user.id,
					data:JSON.stringify(state.uploadList)
				})
			}
		},
		//创建一个下载任务
		createDownLoadJob({
			state
		},obj){
			state.downList.unshift(obj)
			uni.setStorage({
				key:"downList_"+state.user.id,
				data:JSON.stringify(state.downList)
			})
		},
		//更新下载任务进度
		updateDownLoadJob({
			state
		},obj){
			let i=state.downList.findIndex(item=>item.key===obj.key)
			if(i!==-1){
				state.downList[i].progress=obj.progress
				state.downList[i].status=obj.status
				uni.setStorage({
					key:"downList_"+state.user.id,
					data:JSON.stringify(state.downList)
				})
			}
		},
		//清楚列表的方法
		clearList({ state }){
			if(state.user){
				uni.removeStorageSync("downList_" + state.user.id)
				uni.removeStorageSync("uploadList_"+state.user.id)
				
				state.uploadList = []
				state.downList = []
			}
		}
	}
})