<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">$100,000 GRANTS</view>
			<view class="_desc">
				The DBOOK team will raise $100,000 to support these creators, hoping to help them overcome the financial
				pressures of their early literary endeavors, and we'd love to help you create more resources if you have
				a great book.
			</view>
			<div id="welcome" class="_welcome" loops="0"></div>
		</view>
		<mobile-bottom></mobile-bottom>
		<div id="yyzCanvas" class="yyzCanvas" loops="0" v-if="loading"></div>
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
				svgaInfo:'/static/index/welcome.svga',
				svgaLoad:'/static/index/loading.svga',
				screenWidth:null,
				loading:true
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n >= 1150) {
					uni.reLaunch({
						url: '/gants'
					})
					console.log('屏幕宽度大于1150了')
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
			//3秒关闭页面loading动画
			setTimeout(function() {
				that.loading = false;
			}, 1500);
		},
		methods: {
			playSvg() {
				//一定要使用$nextTick，等到页面加载完成再处理数据，否则会找不到页面元素，报Undefind的错误
				const that = this
				that.$nextTick(() => {
					const player = new SVGA.Player('#welcome')
					const parser = new SVGA.Parser('#welcome')
					//这里使用动态加载的方式，加载tableData返回的svga源（例如：http://a.svga)
					parser.load(that.svgaInfo, function(videoItem) {
						player.setVideoItem(videoItem);
						player.startAnimation();
						player.clearsAfterStop = true; //player有很多属性，根据需要设置
						player.onFinished(function() {
							alert("动画停止了！！！")
						});
					})
					const lPlayer = new SVGA.Player('#yyzCanvas')
					const lParser = new SVGA.Parser('#yyzCanvas')
					//这里使用动态加载的方式，加载tableData返回的svga源（例如：http://a.svga)
					lParser.load(that.svgaLoad, function(videoItem) {
						lPlayer.setVideoItem(videoItem);
						lPlayer.startAnimation();
						lPlayer.clearsAfterStop = true; //lPlayer有很多属性，根据需要设置
						lPlayer.onFinished(function() {
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
		.yyzCanvas {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 200000;
			background-color: #24180e;
			opacity: 1;
		}
		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 3.5rem;
			background-image: url('/static/index/grantsbg.png');
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
			max-width: 750px;
			margin: .3rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			._welcome {
				margin: .1rem auto;
				max-width: 670px;
				max-height: 360px;
				width: 80%;
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
				width: 80%;
			}
		}
	}
</style>
<style>
	/* 在小于或等于 1100 */
	@media screen and (max-width: 1100px) {
	  .mobilebg .content_1_bg ._welcome{
	    max-height: 360px;
	  }
	}
	 
	/* 在 400 像素或更小的屏幕上 */
	@media screen and (max-width: 400px) {
	  .mobilebg .content_1_bg ._welcome{
	    max-height: 208px;
	  }
	}
</style>