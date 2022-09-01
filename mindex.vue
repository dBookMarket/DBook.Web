<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">THE FUTURE OF DIGITAL BOOKS</view>
			<view class="_desc">DBOOK is a web3 nft book marketplace where authors can publish and sell their works as
				nfts directly to readers and book collectors.
				Authors are guaranteed of royalty earnings for their works forever.</view>
			<view class="_info">
				<view class="_left">
					<view class="_font">Publish NFT books</view>
					<view class="_font">Protect your copyright</view>
					<view class="_font">Earn royalties forever</view>
				</view>
				<view class="_center">
					<image src="/static/index/book.svg" mode="" class="book"></image>
				</view>
				<view class="_right">
					<view class="_font">Read & Earn</view>
					<view class="_font">Buy & Own</view>
					<view class="_font">Trade your collectiblesDATA ENCRYPTION</view>
				</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">JOIN THE DBOOK COMMUNITY NOW!</view>
			<view class="_desc">Click the role below to see how to use the application.</view>
			<view class="_container">
				<view class="_item">
					<view class="front" :class="isTopWriter  ? 'contain-Before' : ''" @click="handleBefore('writer')">
						<image src="/static/index/author.svg" class="_img"></image>
						<view class="_text">I'M A WRITER</view>
					</view>
					<view class="back" :class="isTopWriter  ? 'contain-After' : ''" @click="handleAfter('writer')">
						<view class="_text">I'M A WRITER</view>
						<view class="_colortext">I PUBLISH THE BOOKS I HAVE WRITTEN AND SELL THEM BY SETTING THE
								PRICE AND ROYALTIES;
								I CAN ALSO SELL BY CHAPTER TO REDUCE THE COST.</view>
					</view>
				</view>

				<view class="_item">
					<view class="front" :class="isTopReader  ? 'contain-Before' : ''" @click="handleBefore('reader')">
						<image src="/static/index/reader.svg" class="_img"></image>
						<view class="_text">I'M A READER</view>
					</view>
					<view class="back" :class="isTopReader  ? 'contain-After' : ''" @click="handleAfter('reader')">
						<view class="_text">I'M A READER</view>
						<view class="_colortext">I CAN SET THE TYPE OF ADS I LIKE AND GET REVENUE FROM WATCHING THE
								INSERTED ADS DURING MY READING.</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">Ecosystem</view>
			<view class="_desc">Dbook ecosystem has a stable economic circulation system, in which advertisers are added
				as inflow funds providers, so that different roles can make profits in the ecosystem.
			</view>
			<image src="/static/index/mtriangle.png" class="_circle"></image>
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
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(1)">
						<text>HOW DO I PUBLISH MY BOOK?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down1">
						You can authenticate the author through the create page. Step 1, 2, and 3 are used to obtain publishing permissions. Step 4 takes you to the publishing page.
					</view>
				</view>
				<view class="_itemcon">
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
				<view class="_itemcon">
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
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(2)">
						<text>WHERE ARE THE BOOKS STORED?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down2">
						We will homomorphically encrypt your uploaded books, then upload them to ipfs and back them
						up to filecoin.
					</view>
				</view>
				<view class="_itemcon">
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
		<view class="content_5_bg">
			<view class="_title">X2Earn</view>
			<view class="_desc">
				Here, you can be both the writer and the reader. You can participate in every part of the ecology:
				writing books, reading to earn, governing, commenting on interactions.
			</view>
			<view class="_develop">
				<woo-swiper :list="devlist"></woo-swiper>
			</view>
		</view>
		<view class="content_6_bg">
			<view class="_title">ROADMAP</view>
			<view class="_content">
				<view class="_text _text1">ENVISION THE FUTURE OF E-BOOKS</view>
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
				<view class="_text _text2">DBOOKMARKET DEMO RELEASED TO MUBAI TESTNET
				</view>
			</view>
			<view class="_content">
				<view class="_text bgtext">DBOOKMARKET WHITEPAPER DRAFT RELEASED</view>
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
				<view class="_text _text2" style="top: .18rem;">DBOOKMARKET MOBILE DEMO RELEASED TO MUBAI TESTNET</view>
			</view>
			<view class="_content">
				<view class="_text _text1">WRITE TO EARN & READ TO EARN</view>
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
				<view class="_text _text2" style="top: .18rem;">SOCIALFI & COMMENT INTERACTION</view>
			</view>
			<view class="_content">
				<view class="_text _text1">LISTEN TO EARN</view>
				<view class="_flex">
					<image src="/static/index/map7.svg" class="_imgicon"></image>
				</view>
				<image src="/static/index/line1.png" class="_line _line1"></image>
			</view>
			<view class="_content">
				<view class="_flex">
					<image src="/static/index/map8.svg" class="_imgicon"></image>
				</view>
				<view class="_text _text2" style="top: .18rem;">BOOK RENTAL FI</view>
			</view>

		</view>
		<view class="content_7_bg">
			<view class="_title">Team</view>
			<view class="_develop" style="margin-top: 0.25rem;">
				<woo-swiper :list="teamlist" :isTeam="true"></woo-swiper>
			</view>
		</view>
		<mobile-bottom></mobile-bottom>
		<div id="yyzCanvas" class="yyzCanvas" loops="0" v-if="loading"></div>
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
						text: "Write2Earn"
					},
					{
						src: '/static/index/2.svg',
						text: "Read2Earn"
					},
					{
						src: '/static/index/3.svg',
						text: "SocialFi"
					},
				],
				teamlist: [{
						src: '/static/index/person1.png',
						text: "Bill Zhou",
						minText:'CEO & CO-FOUNDER'
					},
					{
						src: '/static/index/person2.png',
						text: "Eeping Neo",
						minText:'CO-FOUNDER'
					},
					{
						src: '/static/index/person3.png',
						text: "Horry Bi",
						minText:'CO-FOUNDER'
					}
				],
				isTopWriter: false,
				isTopReader: false,
				down1: false,
				down2: false,
				down3: false,
				down4: false,
				down5: false,
				person1: false,
				person2: false,
				person3: false,
				loading: true,
				screenWidth: null, //屏幕宽度
				svgaInfo: '/static/index/loading.svga',
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n > 1150) {
					uni.navigateTo({
						url: '/'
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
				const that = this;
				this.$nextTick(() => {
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
			 * 幻灯片
			 */
			change(current){
				let that = this;
				console.log('current',current)
			},
			/**
			 * 翻转180度
			 * @param {Object} type 
			 */
			handleBefore(type) {
				if (type=='writer') {
					if(!this.isTopWriter){
						this.isTopWriter = true
					}
				}else if(type=='reader'){
					if(!this.isTopReader){
						this.isTopReader = true
					}
				}
			},
			/**
			 * 翻转180度还原
			* @param {Object} type
			*/
			handleAfter(type) {
				if (type=='writer') {
					if(this.isTopWriter){
						this.isTopWriter = false
					}
				}else if(type=='reader'){
					if(this.isTopReader){
						this.isTopReader = false
					}
				}
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
			height: 3.5rem;
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
			width: 92%;
			max-width: 750px;
			z-index: 10;
			position: relative;
			margin: -.06rem auto 0;
			overflow: hidden;
			border-radius: .05rem;
			background-color: #FFE1B4;

			._title {
				width: 92%;
				margin: 0.2rem auto;
				font-size: 25px;
				line-height: .4rem;
				color: #000000;
				font-family: Alibaba PuHuiTi;
				font-weight: bold;
				text-align: center;
			}

			._desc {
				width: 92%;
				max-width: 700px;
				margin: 0 auto .3rem;
				text-align: center;
				line-height: .28rem;
				font-family: PingFang SC;
				font-weight: 400;
				color: #996415;
			}

			._info {
				width: 96%;
				margin: .3rem auto;

				._left {
					text-align: right;
					padding-right: 0.1rem;

					._font {
						font-size: 13px;
					}
				}

				._right {
					._font {
						padding-left: 0.1rem;
						font-size: 13px;
					}
				}

				._center {
					.book {
						width: 1.2rem;
						height: 1.4rem;
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
			max-width: 750px;
			margin: .4rem auto 0;
			overflow: hidden;
			background-color: #fff;

			._title {
				font-size: 24px;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._desc {
				width: 94%;
				margin: .2rem auto .3rem;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #747474;
			}

			._container {
				.front {
					width: 100%;
					height: 180px;
					position: absolute;
					top: 0;
					left: 0;
					background-repeat: no-repeat;
					background-position: center center;
					backface-visibility: hidden;
					transition: 1.5s;
				}

				.back {
					width: 100%;
					height: 180px;
					position: absolute;
					top: 0;
					left: 0;
					transform: rotateY(-180deg);
					backface-visibility: hidden;
					transition: 1.5s;
					._text {
						margin-top: .15rem;
						padding-left: .3rem;
						text-align: left;
						color: #7D5321;
					}
				}
				._colortext {
					width: 86%;
					margin-top: .15rem;
					padding-left: .3rem;
					font-size: 15px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #000000;
					text-align: left;
					line-height: .2rem;
				}
				.contain-Before {
					transform: rotateY(180deg);
				}

				.contain-After {
					transform: rotateY(0deg);
				}
			}

			._item {
				margin: .3rem auto;
				width: 94%;
				height: 180px;
				background: #FFFFFF;
				text-align: center;
				box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
				padding-bottom: .3rem;
				position: relative;
				box-sizing: border-box;
				cursor: pointer;

				._img {
					margin-top: 0.25rem;
					width: .8rem;
					height: .8rem;
				}

				._text {
					margin-top: .15rem;
					font-size: 24px;
					font-family: Alibaba PuHuiTi;
					font-weight: 800;
				}
			}
		}

		.content_3_bg {
			text-align: center;
			margin-top: .3rem;
			._circle {
				width: 3.35rem;
				height: 1.92rem;
			}
		}

		.content_4_bg {
			text-align: center;
			margin-top: .45rem;
			._desc {
				margin-bottom: .3rem;
			}

			._content {
				margin: 0 auto;
				width: 96%;
				background: #FFFFFF;
				padding: 0rem 0.05rem;

				._itemcon {
					background: #FFFFFF;
					text-align: left;
					margin-top: 0.2rem;
					padding-bottom: 0;

					._mininfo {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 14px;
						padding: 0 .1rem;
						font-family: PingFang SC;
						font-weight: 400;
						height: .5rem;
						border: 1px solid #000000;
						cursor: pointer;
					}

					._mindesc {
						padding: .1rem 0.07rem;
						line-height: .25rem;
						background: #F4F4F4;
					}
				}
			}
		}

		.content_5_bg {
			margin-top: .45rem;
			._develop {
				box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
				padding: 0.2rem 0.05rem;
				margin: 0.3rem auto;
				width: 94%;
			}
		}

		.content_6_bg {
			width: 92%;
			max-width: 750px;
			margin: .1rem auto 0;
			overflow: hidden;
			background-color: #FFE1B4;

			._title {
				font-size: 24px;
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
					font-size: 14px;
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
				.bgtext {
					font-size: 13px;
					background: #7D5321;
					border-radius: 10px;
					color: #FFE1B4;
					text-align: center;
					padding: 10px 7px;
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
					left: 46%;
					margin-left: -0.8rem;
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
