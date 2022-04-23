<template>
	<view class="market">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<uni-swiper-dot :info="bannerArray" :current="current" field="poster" :mode="mode"
					:dotsStyles="{backgroundColor:'rgba(0, 0, 0, 0.3)',selectedBorder:'none',border:'none',color:'#fff'}">
					<swiper class="swiper-box" autoplay="true" interval="4000" @change="navigateTo">
						<swiper-item v-for="(item ,index) in bannerArray" :key="index" @click="goToUrl()">
							<view class="swiper-item">
								<image :src="item.poster" mode='aspectFit'></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav.vue'
	import left from '@/components/left.vue'
	export default {
		components: {
			navBar,
			left
		},
		data() {
			return {
				bannerArray: [{
						poster: '/static/book/banner.png',
					},
					{
						poster: '/static/book/banner.png'
					}
				],
				current: 0,
				mode: 'dot',
			};
		},
		methods: {
			/**
			 * 跳转下一页
			 * 
			 */
			goToUrl: function() {
				let that = this;
				uni.navigateTo({
					url: '/pages/index/detail'
				})
			},
			/**
			 * banner 点击跳转页面
			 * @param {Object} e
			 */
			navigateTo(e) {
				let that = this;
				that.current = e.detail.current;
			},
		}
	}
</script>

<style scoped lang="scss">
	.market {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		background-color: #F6F6F6;

		.container {
			.right {
				.swiper-box {
					display: block;
					height: 7rem;
					position: relative;
				}

				.swiper-item image {
					width: 100%;
					height: 8rem;
				}
			}
		}
	}
</style>
