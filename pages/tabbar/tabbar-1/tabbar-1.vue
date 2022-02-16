<template>
	<view class="content">
		<button @click="choosePic">选择图片</button>
		<image :src='url'></image>
	</view>
</template>

<script>
	import oss from '../../../utils/ali-oss.js'
	console.log(oss())
	export default {
		data() {
			return {
				title: 'Hello',
				url: ''
			};
		},
		onLoad() {
		},
		methods: {
			choosePic() {
				uni.chooseImage({
					success(res) {
						const files = res.tempFiles
						// 创建并填写Blob数据。
						// const data = new Blob(['Hello OSS']);
						// 创建并填写OSS Buffer内容。
						console.log(oss)
						oss.put(new Date().getTime() + '233', files[0]).then(res => {
							console.log(res)
							that.$data.url = res.url
						})
					}
				})
			}
		}
	};
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
