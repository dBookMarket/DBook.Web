<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="_navbtn">
			<view class="_btn" :class="{'_active':isPublish}" @click="chooseMoney(1)">Publishing money</view>
			<view class="_btn" :class="{'_active':!isPublish}" @click="chooseMoney(2)">Reading for Money</view>
		</view>
		<view class="content_1_bg" v-if="isPublish">
			<view class="_title">1、PERMISSION TO PUBLISH</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">VERIFY YOUR TWEETS FOR THE BENEFIT OF YOU AND YOUR READERS.</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn5.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">YOU NEED TO FIRST CONNECT TO THE METAMASK WALLET, WHICH ACTS AS A UNIQUE DBOOK IDENTITY.</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">VERIFY YOUR LINKEDIN PROFILE TO PROTECT YOU AND YOUR READERS.</view>
					</view>
				</view>
			</view>
			<view class="_title">2、Creation</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">You can create your work by
							chapter</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Write anytime, anywhere,
							without any restrictions</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn6.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">One-click save draft, let creation
							everywhere</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">One-click release of works, data
							encryption, the creation of NFT,
							listed trading market in one go</view>
					</view>
				</view>
			</view>
			<view class="_title">3、Work management</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">You can see how much money
							each game makes</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item"></view>
				</view>
				<view class="_center">
					<image src="/static/index/earn7.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item"></view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">You can see how much money
							each game makes</view>
					</view>
				</view>
			</view>
			<view class="_title">4、Trading market</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">You can still get royalties from
							a second hand transaction</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn8.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">The more readers buy, the more
							revenue you make</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">5、Advertising is divided into</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Fans can still provide you with
							extra tips</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn9.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">The more readers you have, the
							more advertising revenue you can get</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Comment interaction, so that
							fans understand the latest trends,
							follow more reading</view>
					</view>
				</view>
			</view>

		</view>
		<view class="content_1_bg" v-if="!isPublish">
			<view class="_title">1、Buy books</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">You can still get royalties from
							a second hand transaction</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn1.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Welcome to the web3 world,
							you need to create a wallet to
							receive money</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">2、Reading to earn</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">Please set your advertising
							preference before reading. If
							you do not set it, it will be
							configured by default
						</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn2.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Please set your advertising
							preference before reading. If
							you do not set it, it will be
							configured by default
						</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Set the advertising interval and
							calculate the revenue. If you
							don't like it, you can close it at
							any time. After closing, you
							won't get DBK incentive</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn3.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">According to personal preferences,
							set preference advertising</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Repeat reading still pays, but at
							a much lower rate</view>
					</view>
				</view>
			</view>

			<view class="_title">4、Trading market</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">If the content is good and the
							audience is large, you can raise
							the price
						</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn4.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">It can still be sold on the market
							after reading it. In return for
							benefits
						</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>

		</view>
		<bottom></bottom>
		<div id="yyzCanvas" class="yyzCanvas" loops="0" v-if="loading"></div>
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
				isPublish: true,
				screenWidth:null,
				loading: true,
				svgaInfo: '/static/index/loading.svga',
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n < 1150) {
					uni.navigateTo({
						url: '/mearn'
					})
					console.log('屏幕宽度小于1150了')
				} 
			}
		},
		onLoad(option) {
			let that = this;
			if(option.active){
				//当前选中的
				if(option.active == 'writer'){
					that.isPublish = true;
				}else{
					that.isPublish = false;
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
			/**
			 * 选择方式
			 * @param {Object} type
			 */
			chooseMoney(type) {
				let that = this;
				if (type == 1) {
					that.isPublish = true;
				} else if (type == 2) {
					that.isPublish = false;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg {
		background-color: #fff;
		font-size: 30rpx;
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
			height: 5rem;
			background-image: url('/static/index/earnbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
			
			.newbg{
				width: 100%;
				margin: 0 auto;
			}
		}

		._navbtn {
			width: 100%;
			max-width: 1150px;
			margin: .65rem auto 0;
			font-family: Alibaba PuHuiTi;
			text-align: center;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			._btn {
				cursor: pointer;
				width: 4rem;
				height: 1rem;
				background: #FAFAFA;
				border: 3px solid #999999;
				font-size: 60rpx;
				font-weight: 800;
				color: #999999;
				line-height: 1rem;
			}

			._active {
				color: #000000;
				background: #FFE1B4;
				border: 3px solid #282828;
			}
		}

		.content_1_bg {
			width: 100%;
			max-width: 1100px;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			._title {
				font-size: 100rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._info {
				display: flex;
				justify-content: center;
				margin: 0.6rem auto;
				align-items: center;
				width: 92%;
				._center {
					.earn {
						width: 3.2rem;
						height: 6rem;
					}
				}

				._left,
				._right {
					height: 6rem;
					._item {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text-align: left;
						._font{
							width: 2rem;
						}
					}
				}
			}
		}
	}
</style>
