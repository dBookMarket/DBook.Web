<template>
	<view class="mobilebg">
		<view class="newbg">
			<mobile-nav></mobile-nav>
		</view>

		<view class="content_1_bg">
			<image src="/static/index/search.svg" class="search"></image>
			<view class="_title">EXPLORE</view>
			<view class="_desc">
				You can play the DEMO in a WEB browser
				while the application page is being rebuilt
			</view>

		</view>
		<view class="bottom">
			<mobile-bottom></mobile-bottom>
		</view>
	</view>
</template>

<script>
	import mobileBottom from '@/components/mobilebottom.vue';
	import mobileNav from '@/components/mobilenav.vue';
	export default {
		components: {
			mobileBottom,
			mobileNav
		},
		data() {
			return {
				screenWidth: null
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n >= 1024) {
					uni.navigateTo({
						url: '/pages/index/market'
					})
					console.log('屏幕宽度大于1024了')
				}
			}
		},
		mounted() {
			let that = this;
			//网页可见区域宽
			that.screenWidth = document.body.clientWidth;
			//使用window.onresize方法获取屏幕尺寸；
			window.onresize = () => {
				return (() => {
					that.screenWidth = document.body.clientWidth;
				})()
			}
		},
	}
</script>

<style scoped lang="scss">
	.mobilebg {
		background-color: #fff;
		font-size: 16px;
		color: #000000;

		.newbg {
			background: #FFE1B4;
			height: 0.8rem;
		}

		.bottom {
			position: fixed;
			bottom: 0;
		}

		.content_1_bg {
			width: 90%;
			margin: .5rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			.search {
				margin-top: .5rem;
				width: 1.2rem;
				height: .9rem;
			}

			._title {
				font-size: 24px;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._desc {
				line-height: .3rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				margin-top: .3rem;
				margin-bottom: .5rem;
			}
		}
	}
</style>
