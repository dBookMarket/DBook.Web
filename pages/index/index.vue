<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">NOW JOIN IN MARING YOUR BOOK</view>
			<view class="_desc">DBook is an e-book marketplace with SOCiaIF attributes.<br /> You can publish/trade your
				own books, read them for money, and review them with other readers.</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">NFT Collection</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">On-chain traceability</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Resaleable</view>
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
						<view class="_font">Web3</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">No platform sharing</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Data encryption</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">How to make money</view>
			<view class="_desc">DBook, with a complete token model, <br />
				forms a unique Web3 + Web2 mode through its internal circulation and opening up some economic systems of
				Web2.</view>
			<view class="_someone">
				<view class="_container">
					<view class="_item">
						<view class="front">
							<image src="/static/index/author.svg" class="_img"></image>
							<view class="_text">I am a writer</view>
						</view>
						<view class="back" @click="toUrl('writer')">
							<view class="_text">I am a writer</view>
							<view class="_colortext">DBook, with a complete token model, forms a unique Web3 + Web2
								mode through its internal circulation and opening up some economic
								systems of Web2.</view>
						</view>
					</view>
				</view>
				<view class="_jianju"></view>
				<view class="_container">
					<view class="_item">
						<view class="front">
							<image src="/static/index/reader.svg" class="_img"></image>
							<view class="_text">I am a reader</view>
						</view>
						<view class="back" @click="toUrl('reader')">
							<view class="_text">I am a reader</view>
							<view class="_colortext">DBook, with a complete token model, forms a unique Web3 + Web2
								mode through its internal circulation and opening up some economic
								systems of Web2.</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">Through the economic</view>
			<view class="_desc">The economic cycle designed by dBook can ensure that all parties can achieve a win-win
				situation. <br />
				The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly internal cycle,
				<br />
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both
				parties.
			</view>
			<image src="/static/index/triangle.svg" class="_circle"></image>
		</view>
		<view class="content_4_bg">
			<view class="_title">Copyright protection</view>
			<view class="_desc">
				DBoo adopts full homomorphic encryption to encrypt the data of works, <br />
				and can transfer the power of data decryption to a new holder without decrypting the data. At present,
				<br />
				it can solve multiple scenes such as pictures, text, audio and video.
			</view>
			<view class="_content">
				<view class="_left">
					<view class="_item">
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
					<view class="_item">
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
					<view class="_item">
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
				</view>
				<view class="_right">
					<view class="_item">
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
					<view class="_item">
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
				<view class="_item">
					<image src="/static/index/1.svg" class="_img"></image>
					<view class="_text">Universal creation</view>
				</view>
				<view class="_item">
					<image src="/static/index/2.svg" class="_img"></image>
					<view class="_text">Management books</view>
				</view>
				<view class="_item">
					<image src="/static/index/3.svg" class="_img"></image>
					<view class="_text">Chain on the comments</view>
				</view>
			</view>
		</view>
		<view class="content_6_bg">
			<view class="_title">The roadmap</view>
			<view class="_content">
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map1.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text _text1">Discuss ebook versions</view>
				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map2.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text _text1">Protected DBOOK trading market DEMO release test net</view>

				</view>
				<view class="_flex">
					<image src="/static/index/up.svg" class="_imgup"></image>
					<view class="_item">
						<image src="/static/index/map3.svg" class="_imgicon"></image>
						<view class="_line"></view>
						<view class="_dot"></view>
					</view>
					<view class="_text bgtext">A draft version of the DBOOK Token Economy whitepaper and the URL for the
						new UI</view>
				</view>
				<view class="_flex _flex2">
					<view class="_item">
						<image src="/static/index/map4.svg" class="_imgicon"></image>
					</view>
					<view class="_text">Earn money while reading</view>
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
					<view class="_text _text1">Make money writing as you read</view>

				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map7.svg" class="_imgicon"></image>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_text _text1">Make money writing as you read</view>

				</view>
				<view class="_flex">
					<view class="_item">
						<image src="/static/index/map6.svg" class="_imgicon"></image>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_text _text1">Make money writing as you read</view>

				</view>
				<view class="_flex _flex2">
					<view class="_item">
						<image src="/static/index/map5.svg" class="_imgicon"></image>
					</view>
					<view class="_lineheight"></view>
					<view class="_text">Make money writing as you read</view>

				</view>
			</view>
		</view>
		<view class="content_7_bg">
			<view class="_title">Team</view>
			<view class="_team">
				<view class="_item">
					<image src="/static/index/person1.png" class="_img"></image>
					<view class="_text" v-if="!person1">
						<text>Bill Joy</text>
						<text class="_text1">Cofounder</text>
					</view>
					<view class="_info" v-if="person1">
						Bill Joy
						Cofounder
						The copyrighted NFT book
						exchange
						marketplace dBookMarkt
						testnet is released
					</view>
				</view>

				<view class="_item">
					<image src="/static/index/person2.png" class="_img"></image>
					<view class="_text">
						<text>Eeping neo</text>
						<text class="_text1">Cofounder</text>
					</view>
				</view>
				<view class="_item">
					<image src="/static/index/person3.png" class="_img"></image>
					<view class="_text">
						<text>Horry Bi</text>
						<text class="_text1">Cofounder</text>
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
				if (n < 1024) {
					uni.navigateTo({
						url: '/pages/index/mindex'
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
			 * 跳转页面
			 * @param {Object} type
			 */
			toUrl(type) {
				uni.navigateTo({
					url: '/pages/index/earn?active=' + type
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
				font-size: 100rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				color: #000000;
				text-align: center;
				line-height: .5rem;
			}

			._desc {
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
				}

				._container,
				.front,
				.back {
					width: 5rem;
					height: 3.25rem;
				}

				._container:hover ._item {
					transform: rotateY(180deg);
					-ms-transform:rotateY(180deg); 	/* IE 9 */
					-moz-transform:rotateY(180deg); 	/* Firefox */
					-webkit-transform:rotateY(180deg); /* Safari 和 Chrome */
					-o-transform:rotateY(180deg); 	/* Opera */
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
					-webkit-transform-style: preserve-3d;	/* Safari 和 Chrome */

					._img {
						margin-top: 0.4rem;
						width: 1.26rem;
						height: 1.26rem;
					}

					._text {
						margin-top: .25rem;
						font-size: 100rpx;
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
						-ms-transform:rotateY(-180deg); 	/* IE 9 */
						-moz-transform:rotateY(-180deg); 	/* Firefox */
						-webkit-transform:rotateY(-180deg); /* Safari 和 Chrome */
						-o-transform:rotateY(-180deg); 	/* Opera */
						._text {
							margin-top: .3rem;
							padding-left: .3rem;
							text-align: left;
							color: #7D5321;
						}
					}

					._colortext {
						width: 80%;
						margin-top: .35rem;
						padding-left: .3rem;
						font-size: 15px;
						font-family: PingFang SC;
						font-weight: 400;
						color: #000000;
						text-align: left;
						line-height: .35rem;
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
						font-size: 30rpx;
						padding: 0 .2rem;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: .55rem;
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

					._img {
						margin-top: 0.4rem;
						width: 2.5rem;
						height: 2rem;
					}

					._text {
						margin-top: .5rem;
						font-size: 52rpx;
						font-family: PingFang SC;
						font-weight: 400;
					}
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
				font-size: 100rpx;
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
						width: 60rpx;
						height: 32rpx;
						position: absolute;
						top: -50rpx;
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
						width: 14rpx;
						height: 14rpx;
						border-radius: 50%;
						background: #282828;
					}

					._text {
						width: 125px;
						height: 100px;
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 400;
						text-align: center;
						margin-top: .15rem;
					}

					.bgtext {
						width: 175px;
						height: 90px;
						background: #7D5321;
						border-radius: 20px;
						color: #FFE1B4;
						text-align: center;
						padding: 5px 7px;
						margin-left: -20px;
					}

					._text1 {
						
					}
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

					@keyframes mymove {
						from {
							bottom: 0;
						}

						to {
							bottom: 50%;
						}
					}

					._info {
						background: #000000;
						opacity: 0.7;
						text-align: center;
						padding: 2%;

						font-size: 40rpx;
						position: absolute;
						bottom: 0;
						left: 0;
						color: #FFFFFF;
						animation: mymove 5s;
						animation-timing-function: ease;
						z-index: 100;
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
						font-size: 40rpx;
						padding-left: 2%;
						display: block;
					}

					._text1 {
						line-height: .35rem;
						display: block;
						font-size: 30rpx;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

	}
</style>
