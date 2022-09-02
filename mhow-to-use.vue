<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="_navbtn">
			<view class="_btn" :class="{'_active':isPublish}" @click="chooseMoney(1)">WRITERS</view>
			<view class="_btn" :class="{'_active':!isPublish}" @click="chooseMoney(2)">READERS</view>
		</view>
		<view class="content_1_bg" v-if="isPublish">
			<view class="_title">1、WRITER SIGN-UP</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Step 2,3: As you are registering as an author, DBOOK will need to verify
							your identity with two of your social media accounts. You will need to connect DBOOK to your
							LinkedIn and Twitter account.</view>
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
						<view class="_font">Step 1:To sign up with DBOOK, you will need to first create a METAMASK
							wallet which will be used to authenticate and connect you to DBOOK.</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Step 4: Congratulations on your successful registration! Go get your first
							book published!</view>
					</view>
				</view>
			</view>
			<view class="_title">2、WRITING BOOKS</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Start writing on DBOOK.You can write and edit your story chapter by chapter
							here</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Edit on the go. Write anywhere, anytime</view>
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
						<view class="_font">Click to save here. Your drafts can be easily saved for future edits</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Click to publish direct with DBOOK.</view>
					</view>
				</view>
			</view>
			<view class="_title">3、MANAGEMENT BOOKS</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Manage your works Here you can see an overview of all your works, including
							unpublished ones.</view>
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
						<view class="_font">View the earnings for each of your works</view>
					</view>
				</view>
			</view>
			<view class="_title">4、DBOOKMARKET</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">The more books readers buy, the more you earn.</view>
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
						<view class="_font">You can still earn royalties when readers resell your books.</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">5、ADVERTISE TO EARN</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">You get 10% of ad revenue when readers are on read to earn.</view>
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
						<view class="_font">Readers can provide you with rewards to support your writing.</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Readers comment on your book, and you can interact with them.</view>
					</view>
				</view>
			</view>
		
		</view>
		<view class="content_1_bg" v-if="!isPublish">
			<view class="_title">1、BUY BOOKS</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">Buy any book to start read to earn.</view>
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
						<view class="_font">When you choose your favorite book, you can click on the "reading test" to
							see the content.</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">2、READ TO EARN</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">Ad earning is read to earn's core earn approach. See the whitepaper for more
							details.
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
						<view class="_font">Set your ad preferences before reading so you can see the ads you like as
							you read.
						</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Set the interval between reading ads, it will affect your earning
							efficiency.</view>
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
						<view class="_font">Set up preference ads based on your preferences.</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">After setting up the above steps you will see the earnings generated by
							reading the book.</view>
					</view>
				</view>
			</view>
			
			<view class="_title">3、DBOOKMARKET</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">After you finish reading the book you can choose to collect it or sell it on
							dbookmarket.
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
						<view class="_font">You can set the selling price of the book according to the current market
							price.
						</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			
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
				isPublish: true,
				screenWidth:null,
				loading: true,
				svgaInfo: '/static/index/loading.svga',
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n >= 1150) {
					uni.reLaunch({
						url: '/how-to-use'
					})
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
			background-image: url('/static/index/earnbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
		
			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}

		._navbtn {
			width: 98%;
			max-width: 750px;
			margin: .3rem auto 0;
			font-family: Alibaba PuHuiTi;
			text-align: center;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			._btn {
				cursor: pointer;
				height: .5rem;
				background: #FAFAFA;
				border: 3px solid #999999;
				font-size: 16px;
				font-weight: 800;
				color: #999999;
				padding: 0 .1rem;
				line-height: .5rem;
			}

			._active {
				color: #000000;
				background: #FFE1B4;
				border: 3px solid #282828;
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

			._title {
				font-size: 24px;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._info {
				display: flex;
				margin: .3rem auto;
				justify-content: center;
				align-items: center;
				width: 98%;
				._center {
					.earn {
						width: 1.0rem;
						height: 2.0rem;
					}
				}

				._left,
				._right {
					height: 2.7rem;
					._item {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text-align: left;
						._font {
							font-size: 13px;
							font-family: PingFang SC;
							font-weight: 400;
							color: #000000;
							padding-right: 0;
							padding-left: .05rem;
							flex: 10;
						}
						
						._dot {
							width: 7px;
							height: 7px;
							border-radius: 50%;
							background: #282828;
						}
						
						._line {
							flex: 1.5;
							background: #282828;
							height: 2px;
							width: .1rem;
						}
					}
				}
				._left{
					._item{
						._font{
							padding-left: 0;
						}
					}
				}
			}
		}
	}
</style>
<style>
	/* 在小于或等于 1100 */
	@media screen and (max-width: 1100px) {
	  .mobilebg .content_1_bg ._info ._center .earn{
	    width: 1.4rem;
	    height: 2.6rem;
		font-size: 14px;
	  }
	}
	 
	/* 在 400 像素或更小的屏幕上 */
	@media screen and (max-width: 400px) {
	  .mobilebg .content_1_bg ._info ._center .earn{
	    width: 1.0rem;
	    height: 2.0rem;
		font-size: 13px;
	  }
	}
</style>