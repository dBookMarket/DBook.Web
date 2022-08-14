<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">NOW JOIN IN MARING YOUR BOOK</view>
			<view class="_desc">DBook is an e-book marketplace with SOCiaIF attributes.You can publish/trade your
				own books, read them for money, and review them with other readers.</view>
			<view class="_info">
				<view class="_left">
					<view class="_font">NFT Collection</view>
					<view class="_font">On-chain traceability</view>
					<view class="_font">Resaleable</view>
				</view>
				<view class="_center">
					<image src="/static/index/book.svg" mode="" class="book"></image>
				</view>
				<view class="_right">
					<view class="_font">Web3</view>
					<view class="_font">No platform sharing</view>
					<view class="_font">Data encryption</view>
				</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">How to make money</view>
			<view class="_desc">DBook, with a complete token model, <br />
				forms a unique Web3 + Web2 mode through its internal circulation and opening up some economic systems of
				Web2.</view>
			<view class="_item">
				<image src="/static/index/author.svg" class="_img"></image>
				<view class="_text">I am a writer</view>
			</view>
			<view class="_item">
				<image src="/static/index/reader.svg" class="_img"></image>
				<view class="_text">I am a reader</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">Through the economic</view>
			<view class="_desc">The economic cycle designed by dBook can ensure that all parties can achieve a win-win
				situation.The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly
				internal cycle,
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both
				parties.</view>
			<image src="/static/index/mtriangle.png" class="_circle"></image>
		</view>
		<view class="content_4_bg">
			<view class="_title">Copyright protection</view>
			<view class="_desc">
				DBoo adopts full homomorphic encryption to encrypt the data of works,
				and can transfer the power of data decryption to a new holder without decrypting the data. At present,
				it can solve multiple scenes such as pictures, text, audio and video.
			</view>
			<view class="_content">
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(1)">
						<text>How to appeal if the work is infringed?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down1">
						After seeing other people's works being stolen, relevant evidence should
						be provided and reports should be made. A temporary alliance composed
						of other random authors and readers should conduct preliminary review,
						freeze the undistributed income of the account, and remove/suspend the
						author's books, and determine how to compensate after repeated
						arbitration by multiple parties.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(3)">
						<text>How does the author guarantee his rights and interests?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down3">
						After seeing other people's works being stolen, relevant evidence should
						be provided and reports should be made. A temporary alliance composed
						of other random authors and readers should conduct preliminary review,
						freeze the undistributed income of the account, and remove/suspend the
						author's books, and determine how to compensate after repeated
						arbitration by multiple parties.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(5)">
						<text>What if I see someone stealing someone else's work?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down5">
						After seeing other people's works being stolen, relevant evidence should
						be provided and reports should be made. A temporary alliance composed
						of other random authors and readers should conduct preliminary review,
						freeze the undistributed income of the account, and remove/suspend the
						author's books, and determine how to compensate after repeated
						arbitration by multiple parties.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(2)">
						<text>How is the work protected?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down2">
						After seeing other people's works being stolen, relevant evidence should
						be provided and reports should be made. A temporary alliance composed
						of other random authors and readers should conduct preliminary review,
						freeze the undistributed income of the account, and remove/suspend the
						author's books, and determine how to compensate after repeated
						arbitration by multiple parties.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(4)">
						<text>What should I pay attention to when publishing on dBook?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down4">
						After seeing other people's works being stolen, relevant evidence should
						be provided and reports should be made. A temporary alliance composed
						of other random authors and readers should conduct preliminary review,
						freeze the undistributed income of the account, and remove/suspend the
						author's books, and determine how to compensate after repeated
						arbitration by multiple parties.
					</view>
				</view>
			</view>

		</view>
		<view class="content_5_bg">
			<view class="_title">Developed communities</view>
			<view class="_desc">
				DBook is managed in the DAO mode.<br />
				Users will release their own works after binding their social media accounts. Meanwhile, when it comes
				to copyright disputes, <br />
				the random committee mode will be adopted for adjudication, and the shelf/shelf removal/freeze status of
				books/authors will be managed
			</view>
			<view class="_develop">
				<woo-swiper :list="devlist"></woo-swiper>
			</view>
		</view>
		<view class="content_6_bg">
			<view class="_title">The roadmap</view>
			<view class="_content">
				<view class="_text _text1">On the issue of copyright protection of e-books</view>
				<view class="_flex">
					<image src="/static/index/map1.svg" class="_imgicon"></image>
				</view>
				<image src="/static/index/line1.png" class="_line _line1"></image>
			</view>
			<view class="_content">
				<image src="/static/index/line2.png" class="_line _line2"></image>
				<view class="_flex">
					<image src="/static/index/map2.svg" class="_imgicon"></image>
				</view>
				<view class="_text _text2">The copyrighted NFT book exchange marketplace dBookMarkt testnet is released
				</view>
			</view>
			<view class="_content">
				<view class="_text _text1">New UI interface and DAO</view>
				<view class="_flex">
					<image src="/static/index/map3.svg" class="_imgicon"></image>
				</view>
				<image src="/static/index/line1.png" class="_line _line1"></image>
			</view>
			<view class="_content">
				<image src="/static/index/line2.png" class="_line _line2"></image>
				<view class="_flex">
					<image src="/static/index/map4.svg" class="_imgicon"></image>
				</view>
				<view class="_text _text2" style="top: .18rem;">Earn money while reading</view>
			</view>
			<view class="_content">
				<view class="_text _text1">New UI interface and DAO</view>
				<view class="_flex">
					<image src="/static/index/map5.svg" class="_imgicon"></image>
				</view>
				<image src="/static/index/line1.png" class="_line _line1"></image>
			</view>
			<view class="_content">
				<image src="/static/index/line2.png" class="_line _line2"></image>
				<view class="_flex">
					<image src="/static/index/map6.svg" class="_imgicon"></image>
				</view>
				<view class="_text _text2" style="top: .18rem;">Earn money while reading</view>
			</view>
			<view class="_content">
				<view class="_text _text1">New UI interface and DAO</view>
				<view class="_flex">
					<image src="/static/index/map7.svg" class="_imgicon"></image>
				</view>
				<image src="/static/index/line1.png" class="_line _line1"></image>
			</view>
			<view class="_content">
				<view class="_flex">
					<image src="/static/index/map8.svg" class="_imgicon"></image>
				</view>
				<view class="_text _text2" style="top: .18rem;">Earn money while reading</view>
			</view>

		</view>
		<view class="content_7_bg">
			<view class="_title">Team</view>
			<view class="_develop">
				<woo-swiper :list="teamlist"></woo-swiper>
			</view>
		</view>
		<mobile-bottom></mobile-bottom>
		<view class="loading" v-if="loading">
			<div id="yyzCanvas" class="yyzCanvas" loops="0"></div>
		</view>
	</view>
</template>

<script>
	import mobileBottom from '@/components/mobilebottom.vue';
	import mobileNav from '@/components/mobilenav.vue';
	import wooSwiper from "@/components/woo-swiper.vue";
	import SVGA from "svgaplayerweb"
	export default {
		components: {
			mobileBottom,
			mobileNav,
			wooSwiper
		},
		data() {
			return {
				devlist: [{
						src: '/static/index/1.svg',
						text: "Universal creation"
					},
					{
						src: '/static/index/2.svg',
						text: "Management books"
					},
					{
						src: '/static/index/3.svg',
						text: "Chain on the comments"
					},
				],
				teamlist: [{
						src: '/static/index/person1.png',
						text: "Bill Joy Cofounder"
					},
					{
						src: '/static/index/person2.png',
						text: "Eeping neo Cofounder"
					},
					{
						src: '/static/index/person3.png',
						text: "Horry Bi Cofounder"
					}
				],
				down1: true,
				down2: true,
				down3: true,
				down4: true,
				down5: true,
				person1: false,
				person2: false,
				person3: false,
				loading:true,
				svgaInfo:'/static/index/loading.svga',
			};
		},
		mounted() {
			let that = this;
			that.playSvg();
			//3秒关闭页面loading动画
			setTimeout(function(){
			  that.loading = false;
			},3000);
		},
		methods: {
			playSvg() {
				//一定要使用$nextTick，等到页面加载完成再处理数据，否则会找不到页面元素，报Undefind的错误
				const that = this;
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
			 * 
			 * 打开或关闭当前对应的文本内容
			 * @param {Object} num
			 */
			openContent(num) {
				let that = this;
				if (num == 1) {
					if (that.down1) {
						that.down1 = false
					} else {
						that.down1 = true
					}
				}
				if (num == 2) {
					if (that.down2) {
						that.down2 = false
					} else {
						that.down2 = true
					}
				}
				if (num == 3) {
					if (that.down3) {
						that.down3 = false
					} else {
						that.down3 = true
					}
				}
				if (num == 4) {
					if (that.down4) {
						that.down4 = false
					} else {
						that.down4 = true
					}
				}
				if (num == 5) {
					if (that.down5) {
						that.down5 = false;
					} else {
						that.down5 = true;
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.mobilebg {
		background-color: #fff;
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
			height: 35vh;
			background-image: url('/static/index/mbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;

			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}

		.content_1_bg {
			width: 92%;
			z-index: 10;
			position: relative;
			margin: -.06rem auto 0;
			overflow: hidden;
			border-radius: .05rem;
			background-color: #FFE1B4;

			._title {
				width: 100%;
				margin: 0.2rem auto;
				font-size: 48rpx;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				color: #000000;
				text-align: center;
			}

			._desc {
				width: 92%;
				margin: 0 auto .3rem;
				text-align: center;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				color: #000000;
			}

			._info {
				width: 96%;
				margin: .3rem auto;

				._left {
					text-align: right;
					padding-right: 0.1rem;

					._font {
						font-size: 28rpx;
					}
				}

				._right {
					._font {
						font-size: 28rpx;
					}
				}

				._center {
					.book {
						width: 1.5rem;
						height: 1.6rem;
					}
				}
			}
		}

		.content_2_bg,
		.content_3_bg,
		.content_4_bg,
		.content_5_bg,
		.content_7_bg {
			width: 92%;
			margin: .3rem auto 0;
			overflow: hidden;
			background-color: #fff;

			._title {
				font-size: 48rpx;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._desc {
				width: 92%;
				margin: .2rem auto .3rem;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #747474;
			}

			._item {
				margin: .3rem auto;
				width: 90%;
				background: #FFFFFF;
				text-align: center;
				box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
				padding-bottom: .3rem;

				._img {
					margin-top: 0.25rem;
					width: .8rem;
					height: .8rem;
				}

				._text {
					margin-top: .15rem;
					font-size: 48rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 800;
				}
			}
		}

		.content_3_bg {
			text-align: center;

			._circle {
				width: 3.35rem;
				height: 1.92rem;
			}
		}

		.content_4_bg {
			text-align: center;

			._desc {
				margin-bottom: .3rem;
			}

			._content {
				margin: 0;
				width: 100%;
				background: #FFFFFF;

				._itemcon {
					background: #FFFFFF;
					text-align: left;
					margin-top: 0.2rem;
					padding-bottom: 0;

					._mininfo {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 30rpx;
						padding: 0 .1rem;
						font-family: PingFang SC;
						font-weight: 400;
						height: .5rem;
						border: 1px solid #000000;
						cursor: pointer;
					}

					._mindesc {
						padding: .1rem 0.05rem;
						line-height: .25rem;
						background: #F4F4F4;
					}
				}
			}
		}

		.content_5_bg {
			._develop {
				box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
				padding: 0.2rem 0.05rem;
				margin: 0.3rem auto;
				width: 94%;
			}
		}

		.content_6_bg {
			width: 92%;
			margin: .1rem auto 0;
			overflow: hidden;
			background-color: #FFE1B4;

			._title {
				font-size: 48rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
				margin-top: .3rem;
			}

			._content {
				width: 92%;
				margin: .3rem auto .5rem;
				position: relative;

				._text {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 400;
					position: absolute;
					width: 34%;
				}

				._text1 {
					text-align: right;
					left: 0;
					top: 0;
				}

				._text2 {
					text-align: left;
					left: 63%;
					top: 0;
					width: 40%;
				}

				._line {
					width: 1rem;
					height: 0.85rem;
					position: absolute;
					top: 0.4rem;
				}

				._line1 {
					left: 51%;
				}

				._line2 {
					left: 22%;
				}

				._flex {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 0.05rem;

					._imgicon {
						width: .8rem;
						height: .8rem;
					}

				}
			}
		}
	}
</style>
