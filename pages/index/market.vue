<template>
	<view class="market">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<uni-swiper-dot :info="bannerArray" :current="current" field="img" :mode="mode"
					:dotsStyles="{backgroundColor:'rgba(0, 0, 0, 0.3)',selectedBorder:'none',border:'none',color:'#fff'}">
					<swiper class="swiper-box" autoplay="true" interval="4000" @change="navigateTo">
						<swiper-item v-for="(item ,index) in bannerArray" :key="index">
							<view class="swiper-item" @click="goToUrl(item.redirect_url)">
								<image :src="item.img" mode='aspectFit'></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getBanners
	} from '@/common/api.js';
	import common from '@/common/common.js';
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
		onLoad(option) {
			let that = this;
			that.getBanners();
		},
		methods: {
			/**
			 * 获取banner
			 */
			getBanners: function() {
				let that = this;
				common.showLoading();
				getBanners().then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						that.bannerArray = data.results;
					} else {
						uni.showModal({
							title: '提示',
							content: '请求失败',
							showCancel: false
						})
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},

			/**
			 * 跳转下一页
			 * 
			 */
			goToUrl: function(tourl) {
				let that = this;
				uni.navigateTo({
					url: '/pages/index/openWeb?url=' + encodeURIComponent(tourl)
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
					height: 13rem;
				}
			}
		}
	}
</style>
