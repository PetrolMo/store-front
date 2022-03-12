<template>
	<view class="flex-column-center">
		<ad-card>
			<uni-swiper-dot :info="info" :dotsStyles="dotsStyles" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change" :autoplay=true>
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							<image src="../../../static/img/top-card.png" mode="scaleToFill" class="top-card"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</ad-card>
<!-- 		<view class="flex-row-between">
			<ad-card width="377rpx" height="222rpx"></ad-card>
			<view class="flex-column-between">
				<view class="flex-row-between">
					<ad-card width="170rpx" height="100rpx"></ad-card>
					<ad-card width="100rpx" height="100rpx"></ad-card>
				</view>
				<ad-card width="286rpx" height="100rpx"></ad-card>
			</view>
		</view>
	 --></view>
</template>

<script>
	import AdCard from '../../../components/ad-card.vue'
	export default {
		data() {
			return {
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'round',
				dotsStyles: {
					width: 6,
					bottom: 8,
					selectedBackgroundColor: '#FFFFFF',
					backgroundColor: 'rgba(255, 255, 255, 0.55);',
					border: 0,
					selectedBorder: 0
				}
			};
		},
		components: {
			AdCard
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style>
	.flex-column-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.flex-column-between {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.flex-row-between {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.flex-row-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.top-card {
		width: 686rpx;
		height: 308rpx;
		border-radius: 16rpx;
	}

	.swiper-box {
		width: 686rpx;
		height: 308rpx;
		border-radius: 16rpx;
	}
</style>
