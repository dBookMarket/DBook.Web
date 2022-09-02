<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">THE FUTURE OF DIGITAL BOOKS</view>
			<view class="_desc">DBOOK is a web3 nft book marketplace where authors can publish and sell their works as
				nfts directly to readers and book collectors.
				Authors are guaranteed of royalty earnings for their works forever.</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Publish NFT books</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Protect your copyright</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Earn royalties forever</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/book.svg" mode="" class="book"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Read & Earn</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Buy & Own</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Trade your collectibles</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">JOIN THE DBOOK COMMUNITY NOW!</view>
			<view class="_desc">Click the role below to see how to use the application.</view>
			<view class="_someone">
				<view class="_container">
					<view class="_item">
						<view class="front">
							<image src="/static/index/author.svg" class="_img"></image>
							<view class="_text">I'M A WRITER</view>
						</view>
						<view class="back" @click="toUrl('writer')">
							<view class="_text">I'M A WRITER</view>
							<view class="_colortext">I PUBLISH THE BOOKS I HAVE WRITTEN AND SELL THEM BY SETTING THE
								PRICE AND ROYALTIES;
								I CAN ALSO SELL BY CHAPTER TO REDUCE THE COST.</view>
						</view>
					</view>
				</view>
				<view class="_jianju"></view>
				<view class="_container">
					<view class="_item">
						<view class="front">
							<image src="/static/index/reader.svg" class="_img"></image>
							<view class="_text">I'M A READER</view>
						</view>
						<view class="back" @click="toUrl('reader')">
							<view class="_text">I'M A READER</view>
							<view class="_colortext">I CAN SET THE TYPE OF ADS I LIKE AND GET REVENUE FROM WATCHING THE
								INSERTED ADS DURING MY READING.</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">Ecosystem</view>
			<view class="_desc">Dbook ecosystem has a stable economic circulation system, in which advertisers are added
				as inflow funds providers, so that different roles can make profits in the ecosystem.
			</view>
			<image src="/static/index/triangle.svg" class="_circle"></image>
		</view>
		<view class="content_4_bg">
			<view class="_title">HOW TO WORKS</view>
			<view class="_desc">
				DBOOK uses homomorphic encryption and NFT to ensure that digital books’ copyright are protected and
				royalty payments are perpetual and executed automatically. Only the rightful owner of the NFT can
				decrypt and access the digital book for reading. It also allows the transfer of ownership, i.e. you can
				now trade (sell) your digital book.To find out more, read our FAQ.
			</view>
			<view class="_content">
				<view class="_left">
					<view class="_item">
						<view class="_mininfo" @click="openContent(1)">
							<text>HOW DO I PUBLISH MY BOOK?</text>
							<uni-icons type="plusempty" size="30"></uni-icons>
						</view>
						<view class="_mindesc" v-if="down1">
							You can authenticate the author through the create page. Step 1, 2, and 3 are used to obtain
							publishing permissions. Step 4 takes you to the publishing page.
						</view>
					</view>
					<view class="_item">
						<view class="_mininfo" @click="openContent(3)">
							<text>HOW CAN WRITERS AND READERS PROTECT THEIR RIGHTS AND INTERESTS?</text>
							<uni-icons type="plusempty" size="30"></uni-icons>
						</view>
						<view class="_mindesc" v-if="down3">
							Writers are required to link their twitter and linkedin accounts before being granted
							permission to publish, which ensures the authenticity of their identity. Readers can check
							an author's twitter and linkedin when they buy work.
						</view>
					</view>
					<view class="_item">
						<view class="_mininfo" @click="openContent(5)">
							<text>WHAT IF I SEE FAKE AUTHORS POSTING PIRATED BOOKS?</text>
							<uni-icons type="plusempty" size="30"></uni-icons>
						</view>
						<view class="_mindesc" v-if="down5">
							If you see a pirated copy of the book, please do not buy it, it may be taken down at any
							time, you can contact us by email and urge other readers in the dbook community to be aware
							of the scam.
						</view>
					</view>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_mininfo" @click="openContent(2)">
							<text>WHERE ARE THE BOOKS STORED?</text>
							<uni-icons type="plusempty" size="30"></uni-icons>
						</view>
						<view class="_mindesc" v-if="down2">
							We will homomorphically encrypt your uploaded books, then upload them to ipfs and back them
							up to filecoin.
						</view>
					</view>
					<view class="_item">
						<view class="_mininfo" @click="openContent(4)">
							<text>HOW DO I EARN ON DBOOK?</text>
							<uni-icons type="plusempty" size="30"></uni-icons>
						</view>
						<view class="_mindesc" v-if="down4">
							You can sell books or you can read to earn. If you're a writer you can collect royalties.
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="content_5_bg">
			<view class="_title">X2Earn</view>
			<view class="_desc">
				Here, you can be both the writer and the reader. You can participate in every part of the ecology:
				writing books, reading to earn, governing, commenting on interactions.
			</view>
			<view class="_develop">
				<view class="_item">
					<image src="/static/index/1.svg" class="_img"></image>
					<view class="_text">Write2Earn</view>
				</view>
				<view class="_item">
					<image src="/static/index/2.svg" class="_img"></image>
					<view class="_text">Read2Earn</view>
				</view>
				<view class="_item">
					<image src="/static/index/3.svg" class="_img"></image>
					<view class="_text">SocialFi</view>
				</view>
			</view>
		</view>
		<view class="content_6_bg">
			<view class="_title">ROADMAP</view>
			<view class="_content">
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map1.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text _text1">ENVISION THE FUTURE OF E-BOOKS</view>
				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map2.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text _text1">DBOOKMARKET DEMO RELEASED TO MUBAI TESTNET</view>

				</view>
				<view class="_flex">
					<image src="/static/index/up.svg" class="_imgup"></image>
					<view class="_item">
						<image src="/static/index/map3.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text bgtext">DBOOKMARKET WHITEPAPER DRAFT RELEASED</view>
				</view>
				<view class="_flex _flex2">
					<view class="_item">
						<image src="/static/index/map4.svg" class="_imgicon"></image>
					</view>
					<view class="_text">DBOOKMARKET MOBILE DEMO RELEASED TO MUBAI TESTNET</view>
				</view>
				<view class="_flex _flex1">
					<view class="kongge"></view>
					<view class="disflex">
						<view class="shuxian"></view>
						<view class="_dot"></view>
					</view>
				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map8.svg" class="_imgicon"></image>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_text _text1">BOOK RENTAL FI</view>

				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map7.svg" class="_imgicon"></image>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_text _text1">LISTEN TO EARN</view>

				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map6.svg" class="_imgicon"></image>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_text _text1">SOCIALFI & COMMENT INTERACTION</view>

				</view>
				<view class="_flex _flex2">
					<view class="_item">
						<image src="/static/index/map5.svg" class="_imgicon"></image>
					</view>
					<view class="_lineheight"></view>
					<view class="_text">WRITE TO EARN & READ TO EARN</view>

				</view>
			</view>
		</view>
		<view class="content_7_bg">
			<view class="_title">TEAM</view>
			<view class="_team">
				<view class="_item" @mouseenter="enter('person1')">
					<image src="/static/index/person1.png" class="_img"></image>
					<view class="_text">
						<text>Bill Zhou</text>
						<text class="_text1">CEO & CO-FOUNDER</text>
					</view>
					<view class="_pinfo" :class="{'menu-mask__slide':person1}" @mouseleave="leave('person1')">
						<view class="_textinfo">Former QBAO Wallet Product Director
							Former Filwallet Product Head</view>
					</view>
				</view>

				<view class="_item" @mouseenter="enter('person2')">
					<image src="/static/index/person2.png" class="_img"></image>
					<view class="_text">
						<text>Eeping Neo</text>
						<text class="_text1">CO-FOUNDER</text>
					</view>
					<view class="_pinfo" :class="{'menu-mask__slide':person2}" @mouseleave="leave('person2')">
						<view class="_textinfo">Founder & CEO, Kidsglobal International</view>
					</view>
				</view>
				<view class="_item" @mouseenter="enter('person3')">
					<image src="/static/index/person3.png" class="_img"></image>
					<view class="_text">
						<text>Horry Bi</text>
						<text class="_text1">CO-FOUNDER</text>
					</view>
					<view class="_pinfo" :class="{'menu-mask__slide':person3}" @mouseleave="leave('person3')">
						<view class="_textinfo">Senior Android & Flutter Developer</view>
					</view>
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
				down1: false,
				down2: false,
				down3: false,
				down4: false,
				down5: false,
				person1: false,
				person2: false,
				person3: false,
				loading: true,
				screenWidth: null,
				svgaInfo: '/static/index/loading.svga',
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n < 1150) {
					uni.reLaunch({
						url: '/mindex'
					})
					console.log('屏幕宽度小于1150了')
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
			},
			/**
			 * 鼠标悬浮
			 * @param {Object} num
			 */
			enter(num) {
				this[num] = true;
			},
			/**
			 * 鼠标离开
			 * @param {Object} num
			 */
			leave(num) {
				this[num] = false;
			},
			/**
			 * 跳转页面
			 * @param {Object} type
			 */
			toUrl(type) {
				uni.reLaunch({
					url: '/how-to-use?active=' + type
				})
			},
			/**
			 * 
			 * 打开
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
						//document.getElementById('closeDiv').style.height = 40+'px';
						that.down5 = false;
					} else {
						that.down5 = true;
						//document.getElementById('closeDiv').style.height = 'auto';
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg {
		background-color: #fff;
		font-size: 15px;
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
			background-image: url('/static/index/bg.png');
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
			max-width: 1150px;
			z-index: 10;
			position: relative;
			margin: -.3rem auto 0;
			height: auto;
			overflow: hidden;
			border-radius: .05rem;
			background-color: #FFE1B4;

			._title {
				width: 58%;
				margin: 0.5rem auto;
				font-size: 50px;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				color: #000000;
				text-align: center;
				line-height: .5rem;
			}

			._desc {
				width: 70%;
				margin: .3rem auto;
				text-align: center;
				line-height: .3rem;
				font-family: PingFang SC;
				font-weight: 400;
				color: #000000;
			}
		}

		.content_2_bg,
		.content_3_bg,
		.content_4_bg,
		.content_5_bg,
		.content_7_bg {
			width: 100%;
			max-width: 1150px;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;

			._title {
				font-size: 50px;
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

			._someone {
				display: flex;
				justify-content: space-between;
				margin: .4rem .2rem 0 .2rem;
				padding-bottom: 0.4rem;

				._jianju {
					flex: .1;
				}

				._container {
					perspective: 1000;
					transform-style: preserve-3d;
					-webkit-transform-style: preserve-3d;
					-moz-transform-style: preserve-3d;
				}

				._container,
				.front,
				.back {
					width: 5rem;
					height: 3.25rem;
				}

				._container:hover ._item {
					transform: rotateY(180deg);
					-ms-transform: rotateY(180deg);
					/* IE 9 */
					-moz-transform: rotateY(180deg);
					/* Firefox */
					-webkit-transform: rotateY(180deg);
					/* Safari 和 Chrome */
					-o-transform: rotateY(180deg);
					/* Opera */
				}

				._item {
					width: 5rem;
					height: 3.25rem;
					background: #FFFFFF;
					text-align: center;
					cursor: pointer;
					box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
					position: relative;
					transition: 0.6s;
					transform-style: preserve-3d;
					-webkit-transform-style: preserve-3d;
					-moz-transform-style: preserve-3d;

					._img {
						margin-top: 0.4rem;
						width: 1.26rem;
						height: 1.26rem;
					}

					._text {
						margin-top: .25rem;
						font-size: 50px;
						font-family: Alibaba PuHuiTi;
						font-weight: 800;
					}

					.front,
					.back {
						position: absolute;
						top: 0px;
						left: 0px;
						backface-visibility: hidden;
					}

					.front {
						z-index: 2;
					}

					.back {
						transform: rotateY(-180deg);
						-ms-transform: rotateY(-180deg);
						/* IE 9 */
						-moz-transform: rotateY(-180deg);
						/* Firefox */
						-webkit-transform: rotateY(-180deg);
						/* Safari 和 Chrome */
						-o-transform: rotateY(-180deg);

						/* Opera */
						._text {
							margin-top: .3rem;
							padding-left: .3rem;
							text-align: left;
							color: #7D5321;
						}
					}

					._colortext {
						width: 80%;
						margin-top: .25rem;
						padding-left: .3rem;
						font-size: 15px;
						font-family: PingFang SC;
						font-weight: 400;
						color: #000000;
						text-align: left;
						line-height: .29rem;
					}
				}
			}
		}

		.content_3_bg {
			height: auto;
			text-align: center;

			._circle {
				margin-top: .5rem;
				width: 8rem;
				height: 4.2rem;
			}
		}

		.content_4_bg {
			height: auto;
			text-align: center;

			._desc {
				margin-bottom: .4rem;
			}

			._content {
				margin: 0;
				width: 100%;
				float: left;

				._left {
					float: left;
					width: 47.2%;
				}

				._right {
					float: right;
					width: 47.2%;
				}

				._item {
					background: #FFFFFF;
					text-align: left;
					margin-top: .2rem;

					._mininfo {
						display: flex;
						justify-content: space-between;
						font-size: 15px;
						padding: 0 .2rem;
						font-family: PingFang SC;
						font-weight: 400;
						height: 0.55rem;
						vertical-align: middle;
						align-items: center;
						border: 1px solid #000000;
						cursor: pointer;
					}

					._mindesc {
						padding: .2rem;
						line-height: .25rem;
						background: #F4F4F4;
					}
				}
			}
		}

		.content_5_bg {
			height: auto;
			text-align: center;

			._develop {
				height: auto;
				text-align: center;
				display: flex;
				justify-content: space-between;
				margin: .42rem .2rem .2rem .2rem;

				._item {
					width: 30%;
					height: auto;
					background: #FFFFFF;
					padding-bottom: .4rem;
					box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
					cursor: pointer;

					._img {
						margin-top: 0.4rem;
						width: 2.5rem;
						height: 2rem;
					}

					._text {
						margin-top: .5rem;
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 400;
					}
				}

				._item:hover {
					transform: scale(1.1);
					-ms-transform: scale(1.1);
					/* IE 9 */
					-moz-transform: scale(1.1);
					/* Firefox */
					-webkit-transform: scale(1.1);
					/* Safari 和 Chrome */
					-o-transform: scale(1.1);
				}
			}
		}

		.content_6_bg {
			width: 100%;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #FFE1B4;

			._title {
				font-size: 50px;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
				margin-top: .3rem;
			}

			._content {
				width: 100%;
				max-width: 1150px;
				margin: .5rem auto;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: center;

				._flex {
					width: 25%;
					position: relative;

					._imgup {
						width: 30px;
						height: 16px;
						position: absolute;
						top: -25px;
						left: 50%;
						margin-left: -90px;
					}

					._item {
						display: flex;
						align-items: center;
						justify-content: center;

						._imgicon {
							width: 125px;
							height: 125px;
						}

					}

					._line {
						height: 3px;
						width: 1.5rem;
						background: #000000;
					}

					._dot {
						width: 7px;
						height: 7px;
						border-radius: 50%;
						background: #282828;
					}

					._text {
						width: 125px;
						height: 100px;
						font-size: 15px;
						font-family: PingFang SC;
						font-weight: 400;
						text-align: center;
						margin-top: .15rem;
					}

					.bgtext {
						width: 136px;
						height: 60px;
						background: #7D5321;
						border-radius: 20px;
						color: #FFE1B4;
						text-align: center;
						padding: 20px;
						margin-left: -23px;
					}

					._text1 {}
				}

				._flex1 {
					margin-bottom: .1rem;
					width: 86%;
					display: flex;
					justify-content: flex-start;

					.kongge {
						width: 92%;
					}

					.disflex {
						.shuxian {
							width: 3px;
							height: 1rem;
							background: #000000;
							margin-left: 1.5px;
						}
					}
				}

				._flex2 {
					width: 1.45rem;
				}
			}
		}

		.content_7_bg {
			height: 4.78rem;

			._team {
				height: 3.68rem;
				text-align: center;
				display: flex;
				justify-content: space-between;
				margin: 0.42rem 0.2rem 0.2rem 0.2rem;

				._item {
					width: 333px;
					height: 338px;
					background: #FFFFFF;
					position: relative;
					cursor: pointer;

					._img {
						width: 100%;
						height: 100%;
						z-index: 9;
						position: absolute;
						top: 0;
						left: 0;
					}

					._pinfo {
						font-size: 20px;
						position: absolute;
						transition: right .8s ease;
						bottom: 0;
						left: 0;
						color: #FFFFFF;
						width: 333px;
						height: 338px;
						display: none;

						._textinfo {
							width: 313px;
							height: 318px;
							line-height: .4rem;
							text-align: left;
							display: flex;
							justify-content: flex-start;
							align-items: flex-start;
							padding: 20px 0 0 20px;
						}
					}

					.menu-mask__slide {
						top: 0;
						left: 0;
						background: #000000;
						opacity: 0.7;
						transition: right .8s ease;
						z-index: 49998;
						display: block;
					}

					._text {
						width: 98%;
						z-index: 10;
						position: absolute;
						bottom: 0;
						left: 0;
						color: #FFFFFF;
						font-family: PingFang SC;
						font-weight: 500;
						line-height: .35rem;
						background: #000000;
						opacity: 0.7;
						text-align: left;
						font-size: 20px;
						padding-left: 2%;
						display: block;
					}

					._text1 {
						line-height: .35rem;
						display: block;
						font-size: 15px;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

	}
</style>
