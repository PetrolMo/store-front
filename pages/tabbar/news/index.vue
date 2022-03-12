<template>
	<view>
<!--		<y-video-slide :videoHeight="`${videoHeight}px`" :data="videoData" :video-index.sync="currentIndex"-->
<!--			@refresh="refresh" @loadMore="loadMore" @share="share" @fabulous="fabulous" @follow="follow"-->
<!--			@commentFabulous="commentFabulous">-->
<!--		</y-video-slide>-->
	</view>
</template>

<script>
	// const data = [{
	// 	id: '1',
	// 	//是否关注
	// 	isFollow: 0,
	// 	//是否点赞
	// 	isFabulous: 1,
	// 	//用户昵称
	// 	userNick: '南北233',
	// 	//用户头像
	// 	userHead: 'https://store-front-avatar.oss-cn-beijing.aliyuncs.com/1645009068424233',
	// 	//视频描述信息
	// 	videoContent: '这是测试视频',
	// 	//点赞数量
	// 	fabulousCount: 1,
	// 	//评论数量
	// 	commentCount: 1000,
	// 	//分享数量
	// 	shareCount: 499,
	// 	//视频资源地址
	// 	videoUrl: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	// 	//视频封面图片地址
	// 	posterUrl: '',
	// 	//视频评论对象
	// 	commentObj: {
	// 		//评论总数
	// 		count: 520,
	// 		//评论列表
	// 		list: [{
	// 			//用户头像
	// 			userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	// 			//用户昵称
	// 			userNick: '小二',
	// 			//评论内容
	// 			content: '',
	// 			//评论时间
	// 			time: '2021-05-06 15:34:44',
	// 			//点赞数量
	// 			fabulousCount: 3737,
	// 			//是否点赞
	// 			isFabulous: 1,
	// 			//评论列表
	// 			children: [{
	// 				//被回复人
	// 				replyTo: '小二',
	// 				//用户头像
	// 				userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	// 				//用户昵称
	// 				userNick: '小三',
	// 				//回复内容
	// 				content: '',
	// 				//回复时间
	// 				time: '2021-05-06 15:34:44',
	// 				//点赞数量
	// 				fabulousCount: 3737,
	// 				//是否点赞
	// 				isFabulous: 0,
	// 			}]
	// 		}]
	// 	}
	// },
	//  {
	//  	id: '1',
	//  	//是否关注
	//  	isFollow: 0,
	//  	//是否点赞
	//  	isFabulous: 1,
	//  	//用户昵称
	//  	userNick: '南北233',
	//  	//用户头像
	//  	userHead: 'https://store-front-avatar.oss-cn-beijing.aliyuncs.com/1645009068424233',
	//  	//视频描述信息
	//  	videoContent: '这是测试视频',
	//  	//点赞数量
	//  	fabulousCount: 1,
	//  	//评论数量
	//  	commentCount: 1000,
	//  	//分享数量
	//  	shareCount: 499,
	//  	//视频资源地址
	//  	videoUrl: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  	//视频封面图片地址
	//  	posterUrl: '',
	//  	//视频评论对象
	//  	commentObj: {
	//  		//评论总数
	//  		count: 520,
	//  		//评论列表
	//  		list: [{
	//  			//用户头像
	//  			userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  			//用户昵称
	//  			userNick: '小二',
	//  			//评论内容
	//  			content: '',
	//  			//评论时间
	//  			time: '2021-05-06 15:34:44',
	//  			//点赞数量
	//  			fabulousCount: 3737,
	//  			//是否点赞
	//  			isFabulous: 1,
	//  			//评论列表
	//  			children: [{
	//  				//被回复人
	//  				replyTo: '小二',
	//  				//用户头像
	//  				userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  				//用户昵称
	//  				userNick: '小三',
	//  				//回复内容
	//  				content: '',
	//  				//回复时间
	//  				time: '2021-05-06 15:34:44',
	//  				//点赞数量
	//  				fabulousCount: 3737,
	//  				//是否点赞
	//  				isFabulous: 0,
	//  			}]
	//  		}]
	//  	}
	//  },
	//  {
	//  	id: '1',
	//  	//是否关注
	//  	isFollow: 0,
	//  	//是否点赞
	//  	isFabulous: 1,
	//  	//用户昵称
	//  	userNick: '南北233',
	//  	//用户头像
	//  	userHead: 'https://store-front-avatar.oss-cn-beijing.aliyuncs.com/1645009068424233',
	//  	//视频描述信息
	//  	videoContent: '这是测试视频',
	//  	//点赞数量
	//  	fabulousCount: 1,
	//  	//评论数量
	//  	commentCount: 1000,
	//  	//分享数量
	//  	shareCount: 499,
	//  	//视频资源地址
	//  	videoUrl: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  	//视频封面图片地址
	//  	posterUrl: '',
	//  	//视频评论对象
	//  	commentObj: {
	//  		//评论总数
	//  		count: 520,
	//  		//评论列表
	//  		list: [{
	//  			//用户头像
	//  			userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  			//用户昵称
	//  			userNick: '小二',
	//  			//评论内容
	//  			content: '',
	//  			//评论时间
	//  			time: '2021-05-06 15:34:44',
	//  			//点赞数量
	//  			fabulousCount: 3737,
	//  			//是否点赞
	//  			isFabulous: 1,
	//  			//评论列表
	//  			children: [{
	//  				//被回复人
	//  				replyTo: '小二',
	//  				//用户头像
	//  				userHead: 'https://store-front-video.oss-cn-hangzhou.aliyuncs.com/tset.mp4',
	//  				//用户昵称
	//  				userNick: '小三',
	//  				//回复内容
	//  				content: '',
	//  				//回复时间
	//  				time: '2021-05-06 15:34:44',
	//  				//点赞数量
	//  				fabulousCount: 3737,
	//  				//是否点赞
	//  				isFabulous: 0,
	//  			}]
	//  		}]
	//  	}
	//  }]
	export default {
		data() {
			return {
				title: 'Hello',
				currentIndex: 1,
				// videoData: data,
				videoHeight: ''
			}
		},
		onLoad() {
			const that = this
			uni.getSystemInfo({
				success: (res) => {
					that.videoHeight = res.windowHeight
				}
			})
		},
		methods: {
			refresh() {
				console.log('松开刷新');
				this.videoData = this.videoData.splice(2, 2);
			},
			loadMore() {
				console.log('加载更多');
			},
			share(video) {
				uni.showToast({
					title: '分享',
					icon: 'none'
				});
				console.log(video)
			},
			fabulous(video, flag) {
				uni.showToast({
					title: '点赞',
					icon: 'none'
				});
				console.log(video, flag)
			},
			follow(video, flag) {
				console.log(video, flag)
			},
			commentFabulous(comment) {
				console.log(comment)
			}
		}
	}
</script>

<style>
</style>
