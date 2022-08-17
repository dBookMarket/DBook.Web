<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">$100,000 grant</view>
			<view class="_desc">
				The economic cycle designed by dBook can ensure that all parties can achieve a win-win situation. <br />
				The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly internal cycle,
				<br />
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both
				parties.
			</view>
			<view class="_welcome">
				<div id="yyzCanvas" class="yyzCanvas" loops="0"></div>
			</view>
		</view>
		<mobile-bottom></mobile-bottom>
	</view>
</template>

<script>
	import mobileBottom from '@/components/mobilebottom.vue';
	import mobileNav from '@/components/mobilenav.vue';
	import SVGA from "svgaplayerweb"
	export default {
		components: {
			mobileBottom,
			mobileNav
		},
		data() {
			return {
				svgaInfo: '/static/index/mwelcome.svga',
				screenWidth: null,
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n >= 1024) {
					uni.navigateTo({
						url: '/pages/index/gants'
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
			that.playSvg();
		},
		methods: {
			playSvg() {
				//一定要使用$nextTick，等到页面加载完成再处理数据，否则会找不到页面元素，报Undefind的错误
				const that = this
				that.$nextTick(() => {
					const player = new SVGA.Player('#yyzCanvas')
					const parser = new SVGA.Parser('#yyzCanvas')
					//这里使用动态加载的方式，加载tableData返回的svga源（例如：http://a.svga)
					parser.load(that.svgaInfo, function(videoItem) {
						player.setVideoItem(videoItem);
						player.startAnimation();
						player.clearsAfterStop = true; //player有很多属性，根据需要设置
						player.onFinished(function() {
							alert("动画停止了！！！")
						});
					})
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.mobilebg {
		background-color: #fff;
		font-size: 16px;
		color: #000000;

		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 35vh;
			background-image: url('/static/index/msupportbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;

			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}

		.content_1_bg {
			width: 100%;
			margin: .3rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			._welcome {
				margin: .1rem auto;
				width: 3.3rem;
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
				margin: 0.2rem auto;
				width: 94%;
			}
		}
	}
</style>
