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
								<view class="info">
									<text class="title">
										{{item.name}}
									</text>
									<text class="desc">
										{{item.desc}}
									</text>
									<button class="buy">购买</button>
								</view>
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
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
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
				window.location.href = tourl;
				/* uni.navigateTo({
					url: '/pages/index/openWeb?url=' + encodeURIComponent(tourl)
				}) */
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
		font-family: Alibaba PuHuiTi;
		font-weight: 400;
		.container {
			.right {
				.swiper-box {
					display: block;
					height: 7.5rem;
					position: relative;
				}
				.swiper-item{
					height: 7.5rem;
					display: flex;
					justify-content: space-around;
					.info{
						text-align: center;
						flex: 1;
						height: 7.5rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						color: #000000;
						.title{
							font-size: 38rpx;
							line-height: .3rem;
							padding-bottom: .33rem;
						}
						.desc{
							color: #444;
							font-size: 30rpx;
							line-height: .28rem;
							padding-bottom: .33rem;
						}
						.buy{
							width: 100px;
							border: 1px solid #6783E9;
							border-radius: .15rem;
							color: #FEFEFE;
							background: #6783E9;
						}
					}
				}
				
				.swiper-item image {
					flex: 3;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
