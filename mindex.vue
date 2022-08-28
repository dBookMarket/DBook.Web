<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">THE FUTURE OF READING AND WRITING</view>
			<view class="_desc">DBOOK IS A WEB3 NFT BOOK MARKETPLACE. OUR MISSION IS TO PROMOTE THE BENEFITS OF READING
				BY INCENTIVIZING YOU TO READ WHILE MAXIMIZING THE EARNINGS OF AUTHORS.
				ALL THESE ARE POSSIBLE USING NFTS.</view>
			<view class="_info">
				<view class="_left">
					<view class="_font">NFT</view>
					<view class="_font">RESALE AND ROYALTIES</view>
					<view class="_font">READ TO EARN</view>
				</view>
				<view class="_center">
					<image src="/static/index/book.svg" mode="" class="book"></image>
				</view>
				<view class="_right">
					<view class="_font">DATA ENCRYPTION</view>
					<view class="_font">ADVERTISING REVENUE</view>
					<view class="_font">WRITE TO EARN</view>
				</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">EARN</view>
			<view class="_desc">WRITE, PUBLISH & MAXIMIZE YOUR EARNINGS;GET REWARDED FOR READING;EARN BY WATCHING ADS
				YOU WANT TO WATCH.</view>
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
								I CAN ALSO SELL BY CHAPTER TO REDUCE THE COST AND CYCLE OF MY CREATION AND COLLECT
								READERS' OPINIONS TO CONTINUE TO COMPLETE THE SUBSEQUENT CHAPTERS.</view>
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
			<view class="_title">WORKING PRINCIPLE</view>
			<view class="_desc">DBOOK ECOSYSTEM HAS A STABLE ECONOMIC CIRCULATION SYSTEM,
				IN WHICH ADVERTISERS ARE ADDED AS INFLOW FUNDS PROVIDERS,
				SO THAT DIFFERENT ROLES CAN MAKE PROFITS IN THE ECOSYSTEM.</view>
			<image src="/static/index/mtriangle.png" class="_circle"></image>
		</view>
		<view class="content_4_bg">
			<view class="_title">FAQ</view>
			<view class="_desc">
				YOU'LL FIND ANSWERS TO THE QUESTIONS YOU NEED TO KNOW, AND IF YOURS ISN'T INCLUDED, PLEASE EMAIL US, OR
				TWEET US.
			</view>
			<view class="_content">
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(1)">
						<text>HOW DO I PUBLISH MY BOOK?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down1">
						YOU CAN AUTHENTICATE THE AUTHOR THROUGH THE CREATE PAGE. STEP 1, 2, AND 3 ARE USED TO OBTAIN
						PUBLISHING PERMISSIONS. STEP 4 TAKES YOU TO THE PUBLISHING PAGE.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(3)">
						<text>HOW CAN WRITERS AND READERS PROTECT THEIR RIGHTS AND INTERESTS?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down3">
						WRITERS ARE REQUIRED TO LINK THEIR TWITTER AND LINKEDIN ACCOUNTS BEFORE BEING GRANTED
						PERMISSION TO PUBLISH, WHICH ENSURES THE AUTHENTICITY OF THEIR IDENTITY. READERS CAN CHECK
						AN AUTHOR'S TWITTER AND LINKEDIN WHEN THEY BUY WORK.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(5)">
						<text>WHAT IF I SEE FAKE AUTHORS POSTING PIRATED BOOKS?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down5">
						IF YOU SEE A PIRATED COPY OF THE BOOK, PLEASE DO NOT BUY IT, IT MAY BE TAKEN DOWN AT ANY
						TIME, YOU CAN CONTACT US BY EMAIL AND URGE OTHER READERS IN THE DBOOK COMMUNITY TO BE AWARE
						OF THE SCAM.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(2)">
						<text>WHERE ARE THE BOOKS STORED?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down2">
						WE WILL HOMOMORPHICALLY ENCRYPT YOUR UPLOADED BOOKS, THEN UPLOAD THEM TO IPFS AND BACK THEM
						UP TO FILECOIN.
					</view>
				</view>
				<view class="_itemcon">
					<view class="_mininfo" @click="openContent(4)">
						<text>HOW DO I EARN ON DBOOK?</text>
						<uni-icons type="plusempty" size="30"></uni-icons>
					</view>
					<view class="_mindesc" v-if="down4">
						YOU CAN SELL BOOKS OR YOU CAN READ TO EARN. IF YOU'RE A WRITER YOU CAN COLLECT ROYALTIES.
					</view>
				</view>
			</view>

		</view>
		<view class="content_5_bg">
			<view class="_title">COMMUNITY</view>
			<view class="_desc">
				HERE, YOU CAN BE BOTH THE WRITER AND THE READER. YOU CAN PARTICIPATE IN EVERY PART OF THE ECOLOGY:
				WRITING BOOKS, READING TO EARN, GOVERNING, COMMENTING ON INTERACTIONS.
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
				<view class="_text _text1">DBOOKMARKET WHITEPAPER DRAFT RELEASED</view>
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
						text: "WRITING AT ANY TIME"
					},
					{
						src: '/static/index/2.svg',
						text: "GOVERNING BOOKS"
					},
					{
						src: '/static/index/3.svg',
						text: "SOCIALIZING"
					},
				],
				teamlist: [{
						src: '/static/index/person1.png',
						text: "Bill Joy",
						minText:'Cofounder'
					},
					{
						src: '/static/index/person2.png',
						text: "Eeping neo",
						minText:'Cofounder'
					},
					{
						src: '/static/index/person3.png',
						text: "Horry Bi",
						minText:'Cofounder'
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
				max-width: 375px;
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
						font-size: 14px;
					}
				}

				._right {
					._font {
						font-size: 14px;
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
					font-size: 16px;
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
