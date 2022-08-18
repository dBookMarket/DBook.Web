<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">$100,000 grant</view>
			<view class="_desc">
				The economic cycle designed by dBook can ensure that all parties can achieve a win-win situation. <br/>
				The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly internal cycle, <br/>
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both parties.
			</view>
			<view class="_welcome">
				<div id="yyzCanvas" class="yyzCanvas" loops="0"></div>
			</view>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import bottom from '@/components/newbottom.vue';
	import newNav from '@/components/newnav.vue';
	import SVGA from "svgaplayerweb"
	export default {
		components: {
			bottom,
			newNav
		},
		data() {
			return {
				svgaInfo:'/static/index/welcome.svga',
				screenWidth:null,
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n < 1024) {
					uni.navigateTo({
						url: '/pages/index/mgants'
					})
					console.log('屏幕宽度小于1024了')
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
	.bg {
		background-color: #fff;
		font-size: 30rpx;
		color: #000000;

		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 5rem;
			background-image: url('/static/index/supportbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
			
			.newbg{
				width: 100%;
				margin: 0 auto;
			}
		}
		.content_1_bg{
			width: 100%;
			max-width: 1150px;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;
			._welcome {
				margin: 0.5rem auto;
				width: 12.1rem;
				height: 6.4rem;
			}
			._title {
				font-size: 100rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}
			
			._desc {
				line-height: .3rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				margin-top: .2rem;
			}
		}
	}
</style>
