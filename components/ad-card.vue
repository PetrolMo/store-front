<template>
	<view :style="{ width, height, borderRadius }" class="ad-card" >
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"ad-card",
		props: {
			width: {
				type: String,
				default: '686rpx'
			},
			height: {
				type: String,
				default: '308rpx'
			},
			borderRadius: {
				type: String,
				default: '16rpx'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.ad-card {
	background-color: #909399;
}
</style>
