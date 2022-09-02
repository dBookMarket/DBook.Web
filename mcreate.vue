<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">DBOOK WRITER</view>
			<image src="/static/index/writer.svg" class="_img"></image>
			<view class="_desc">
				<view class="p">Dbook provides a completely autonomous and decentralized environment for literary creators from all over the world. 
				You can create freely on dbook without sharing revenue with others, or signing exclusive or exclusive agreements.</view>
				<view class="p">
					you can make your book into an nft by dbook and publish it on the market. After the readers buy it,
					you will get all the profits directly, and when the readers re-sell your work, you can get a certain percentage of royalties.</view>
				<view class="p">at the same time, you have a real interaction with readers through the comments on the chain, 
				and understand the readers' feedback on the work.</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">WRITERS EARN</view>
			<view class="_desc">Dbook is an open writer's gathering place, where you can not only freely create, but also obtain objective income.</view>
			<view class="_someone">
				<view class="_item">
					<image src="/static/index/earn1.svg" class="_img"></image>
					<view class="_text">SELLING</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn2.svg" class="_img"></image>
					<view class="_text">REWARD</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn3.svg" class="_img"></image>
					<view class="_text">COPYRIGHT</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn4.svg" class="_img"></image>
					<view class="_text">SUBSIDIES</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn5.svg" class="_img"></image>
					<view class="_text">ADVERTISING</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn6.svg" class="_img"></image>
					<view class="_text">ROYALTIES</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn7.svg" class="_img"></image>
					<view class="_text">BOOKS TO PROMOTE</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn8.svg" class="_img"></image>
					<view class="_text">ACTIVITIES TO MEET</view>
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">TO APPLY FOR THE WRITER</view>
			<view class="_desc">Dbook is an open writer's gathering place. You can apply for a writer by following these steps, which should take about two to three minutes.
			</view>
			<view class="_step">
				<image src="/static/index/metamask.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP1</text>
					<text class="_infoitem">CONNECT METAMASK</text>
				</view>
				<view class="_detail">
					you need to link to metamask to log in first. if you have not installed metamask
					<text class="_color" @click="toGoogle()">(go to the google webshop)</text>
					or have never used metamask<text class="_color">(how-to guide)</text>,please follow the relevant links to install or learn.
				</view>
				<view class="_bottom" v-if="!address">
					<button class="_btn" @click="toMetamask()">CONNECT</button>
				</view>
				<view class="_bottom _position" v-if="address">
					<button class="_btn _btn1 _position" @click="toMetamaskOk()">
						{{address | strAddress}}
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<view class="_float">
						<button v-if="walletsBtn" class="_btn _btn2 _radius" @click="toBreak()">LOGOUT</button>
					</view>
				</view>
			</view>
			<view class="_step">
				<image src="/static/index/media.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP2</text>
					<text class="_infoitem">CONNECT TWITTER</text>
				</view>
				<view class="_detail">Click the button to verify your twitter, which requires you to send a tweet from your twitter account.</view>
				<view class="_bottom" v-if="isAuthTweets == false">
					<button class="_btn" @click="toAuthenticate('twitter')">CONNECT</button>
				</view>
				<view class="_bottom _position" v-if="isAuthTweets == true">
					<button class="_btn _btn1 _position" @click="toAuthOk('twitter')">VALIDATION
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<view class="_float">
					   <button v-if="authBtn" class="_btn _btn2 _radius" @click="toRevalidate('twitter')">REVALIDATION</button>
					</view>
				</view>
			</view>
			<view class="_step">
				<image src="/static/index/verify.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP3</text>
					<text class="_infoitem">CONNECT LINKEDIN</text>
				</view>
				<view class="_detail">Click the button to verify your linkedin, which requires you to send a feed from your linkedin account.</view>
				<view class="_bottom" v-if="isLinkedIn == false">
					<button class="_btn" @click="toAuthenticate('linkedin')">CONNECT</button>
				</view>
				<view class="_bottom _position" v-if="isLinkedIn == true">
					<button class="_btn _btn1 _position" @click="toAuthOk('linkedin')">VALIDATION
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<view class="_float">
						<button v-if="authLinkedBtn" class="_btn _btn2 _radius"
						@click="toRevalidate('linkedin')">REVALIDATION</button>
					</view>
				</view>
			</view>
			<view class="_step">
				<view class="_left">
					<image src="/static/index/settled.svg" class="_img"></image>
				</view>
				<view class="_center">
					<text class="_text">STEP4</text>
					<text class="_infoitem">PUBLISHING BOOKS</text>
					<view class="_detail">Complete the above three steps and you have successfully applied. Now go to dbookmarket and publish a book!</view>
				</view>
				<view class="_bottom">
					<button class="_btn _btn1" @click="toSettled()">GO NOW</button>
				</view>
			</view>
		</view>
		<mobile-bottom></mobile-bottom>
		<uni-popup ref="certifyPopup" type="center">
			<view class="certify">
				<view class="title">
					VERIFY TWITTER
				</view>
				<view class="con">
					<view class="_text">
						You need to send this tweet to verify your tweet.
					</view>
					<textarea maxlength="1500" v-model="tcontent" type="text" class="input-style _height"
						placeholder="@ddid_io I applied to be a writer on dbookMarket, come write/Read to earn with me! #Web3 #WritingCommunity"></textarea>
					<button class="btnSend" @click="toSend('twitter')">SEND</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="authPopup" type="center">
			<view class="auth">
				<view class="title">
					REVALIDATION
				</view>
				<view class="con">
					<view class="_text">If you need to change your verified twitter or linkedin, click continue.</view>
					<view class="btnview">
						<button class="btnCancel" @click="toCancel('twitter')">CANCEL</button>
						<button class="btnReplace" @click="toReplace('twitter')">CONTINUE</button>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="linkedPopup" type="center">
			<view class="certify">
				<view class="title">
					VERIFY LINKEDIN
				</view>
				<view class="con">
					<view class="_text">
						You need to send this feed to verify your linkedin.
					</view>
					<textarea maxlength="1500" v-model="lcontent" type="text" class="input-style _height"
						placeholder="#Web3 #WritingCommunity I applied to be a writer on dbookMarket, come write/ Read to earn with me! "></textarea>
					<button class="btnSend" @click="toSend('linkedin')">SEND</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="authLinkedPopup" type="center">
			<view class="auth">
				<view class="title">
					REVALIDATION
				</view>
				<view class="con">
					<view class="_text">If you need to change your verified twitter or linkedin, click continue.</view>
					<view class="btnview">
						<button class="btnCancel" @click="toCancel('linkedin')">CANCEL</button>
						<button class="btnReplace" @click="toReplace('linkedin')">CONTINUE</button>
					</view>
				</view>
			</view>
		</uni-popup>
		<div id="yyzCanvas" class="yyzCanvas" loops="0" v-if="loading"></div>
	</view>
</template>

<script>
	import {
		auth,
		share,
		verify,
		login,
		postNonce,
		logout
	} from '@/common/api.js';
	import common from '@/common/common.js';
	import wallet from '@/common/wallet.js';
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
				address: '',
				loading: true,
				screenWidth: null,
				svgaInfo: '/static/index/loading.svga',
				isAuthTweets: false,
				isLinkedIn: false,
				walletsBtn: false,
				authBtn: false,
				authLinkedBtn: false,
				tcontent: '@ddid_io I applied to be a writer on dbookMarket, come write/Read to earn with me! #Web3 #WritingCommunity',
				lcontent: '#Web3 #WritingCommunity I applied to be a writer on dbookMarket, come write/ Read to earn with me!',
				type: '', //twitter或linkedin
				isAuth: false, //是否授权
				oauth_token: '', //验证twitter url 带过来的参数
				oauth_verifier: '', //验证twitter url 带过来的参数
				code: '', //验证linkedin url 带过来的参数
				state: '', //验证linkedin url 带过来的参数
			};
		},
		filters: {
			strAddress: function(val) {
				return common.getAddress(val, 12); //从0下标开始的8个字符
			},
		},
		onLoad(option) {
			let that = this;
			that.type = option.type || common.getQueryString('type');
			that.oauth_token = option.oauth_token || common.getQueryString('oauth_token');
			that.oauth_verifier = option.oauth_verifier || common.getQueryString('oauth_verifier');
			that.isAuth = option.isAuth || common.getQueryString('isAuth');
			that.code = option.code || common.getQueryString('code');
			that.state = option.state || common.getQueryString('state');
			console.log(JSON.stringify(option))
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n >= 1150) {
					uni.reLaunch({
						url: '/create' + location.search
					})
				}
			}
		},
		mounted() {
			let that = this;
			//监听滚动
			window.addEventListener('scroll', that.handleScroll);
			//网页可见区域宽
			that.screenWidth = document.body.clientWidth;
			//使用window.onresize方法获取屏幕尺寸；
			window.onresize = () => {
				return (() => {
					that.screenWidth = document.body.clientWidth;
				})()
			}
			if (common.getStorage("token") && common.getStorage('address')) {
				that.address = common.getStorage('address');
			}
			that.playSvg();
			//3秒关闭页面loading动画
			setTimeout(function() {
				that.loading = false;
			}, 1500);
			that.verifyfun();
		},
		methods: {
			/**
			 * 
			 */
			handleScroll() {
				let that = this;
				// 滚动条偏移量
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body
				.scrollTop;
				console.log('scrollTop',scrollTop)
				if(scrollTop>20){
					that.authBtn = false;
					that.authLinkedBtn = false;
					that.walletsBtn = false;
				}
			},
			/**
			 * 验证状态
			 */
			verifyfun() {
				let that = this;
				common.showLoading();
				verify().then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						that.isAuthTweets = res.data.twitter;
						that.isLinkedIn = res.data.linkedin;
						//如果已经完成验证则弹框 twitter modal
						if (that.type == 'twitter' && that.isAuth && !that.isAuthTweets) {
							that.$refs.certifyPopup.open();
						} else if (that.type == 'linkedin' && that.isAuth && !that.isLinkedIn) {
							//如果已经完成验证则弹框 linkedin modal
							that.$refs.linkedPopup.open();
						}
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * go to the Google WebShop
			 */
			toGoogle() {
				common.toWeb('chrome');
			},
			/**
			 * 去授权登陆
			 * @param {Object} type twitter或linkedin
			 */
			toAuthenticate(type) {
				let that = this;
				let token = common.getStorage('token');
				if (!that.address || !token) {
					common.showModal('please connect wallet');
					return;
				}
				common.showLoading();
				let params = {
					type: type
				}
				auth(params).then(res => {
					console.log(res);
					if (res && res.statusCode === 201) {
						let data = res.data;
						//检测到http 则直接跳转url
						if (data && data.auth_uri.indexOf('http') > -1) {
							window.location.href = data.auth_uri;
						}
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 发送
			 * @param {Object} type twitter或linkedin
			 */
			toSend(type) {
				let that = this;
				let params = {}
				//twitter调用接口的参数
				if (type == 'twitter') {
					if (!that.tcontent) {
						common.showModal(
							"You are obtaining author authentication and need to send the following tweet to prove Twitter's identity"
						);
						return false;
					}
					params = {
						type: type,
						oauth_token: that.oauth_token,
						oauth_verifier: that.oauth_verifier,
						content: that.tcontent
					}
				} else if (type == 'linkedin') {
					//linkedin调用接口的参数
					if (!that.lcontent) {
						common.showModal(
							"You are obtaining author authentication and need to send the following tweet to prove LinkedIn's identity"
						);
						return false;
					}
					params = {
						type: type,
						code: that.code,
						state: that.state,
						content: that.lcontent
					}
				}
				common.showLoading();
				share(params).then(res => {
					console.log(res);
					if (res && res.statusCode === 201) {
						let data = res.data;
						//验证成功了
						if (data && data.status == 'success') {
							uni.showToast({
								title: 'verify succeeded',
								duration: 3000,
								icon: false
							});
							//更新状态
							if (type == 'twitter') {
								that.isAuthTweets = true;
								that.$refs.certifyPopup.close();
							} else if (type == 'linkedin') {
								that.isLinkedIn = true;
								that.$refs.linkedPopup.close();
							}
						}
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 重新验证
			 * @param {Object} type twitter或linkedin
			 */
			toRevalidate(type) {
				let that = this;
				if (type == 'twitter') {
					that.$refs.authPopup.open();
				} else if (type == 'linkedin') {
					that.$refs.authLinkedPopup.open();
				}
			},
			/**
			 * 发布书籍
			 */
			toSettled(){
				uni.navigateTo({
					url: '/pages/index/settled'
				})
			},
			/**
			 * 切换路线
			 */
			toSwitch() {
				//切换账户为重新选择连接钱包
				let that = this;
				that.address = '';
			},
			/**
			 * 获取nonce
			 */
			postNonceFun(address) {
				return new Promise((resolve, reject) => {
					//获取nonce
					postNonce({
						address: address
					}).then(res => {
						console.log(res);
						if (res && (res.statusCode === 200 || res.statusCode === 201)) {
							let nonce = res.data.nonce;
							resolve(nonce);
						} else {
							common.showModal(res);
							reject(res);
						}
					}).catch(data => {
						reject(data);
					}).finally(() => {
						common.hideLoading(0);
					})
				});
			},
			/**
			 * 连接钱包
			 */
			async toMetamask() {
				let that = this;
				common.showLoading();
				let nonce = "";
				let signature = "";
				let provider = "";
				//目标链ID Polygon 链不一致，就询问切换网络，没有就创建网络 然后连接
				provider = await wallet.connectWeb3();

				if (provider) {
					let signer = await wallet.getSigner(provider);
					if (signer) {
						let address = await wallet.getAddress(signer);
						if (address) {
							//获取nonce
							that.postNonceFun(address)
								.then(async nonce => {
									console.log("nonce", nonce);
									//获取签名
									signature = await wallet.getSignature(signer, nonce);
									//地址和签名都不为空
									if (typeof(address) === 'string' && typeof(signature) === 'string') {
										let params = {
											address: address,
											signature: signature
										}
										//拿到address和signature去登录
										login(params).then(res => {
											console.log(res);
											if (res && (res.statusCode === 200 || res.statusCode ===
													201)) {
												that.address = address;
												//存储address
												common.setStorage("address", address);
												//存储token
												common.setStorage("token", res.data.token);
											} else {
												common.showModal(res);
											}
										}).catch(error => {
											common.showModal(error);
										}).finally(() => {
											common.hideLoading(0);
										})
									} else {
										common.hideLoading(0);
									}
								})
								.catch(errData => {
									console.log('reject', errData);
									common.hideLoading(0);
									common.showModal(errData);
								});
						} else {
							common.hideLoading(0);
							common.showModal('the address is empty');
						}
					} else {
						common.hideLoading(0);
						common.showModal('the signer is empty');
					}
				} else {
					common.hideLoading(0);
					common.showModal('the provider is empty');
				}
			},
			/**
			 * 断开连接
			 */
			async toBreak() {
				//清除存储缓存输入数据
				let that = this;
				common.showLoading();
				await wallet.disconnect();
				logout().then(res => {
					console.log(res);
					if (res && (res.statusCode === 200 || res.statusCode === 201)) {
						uni.showToast({
							title: 'disconnect succeeded',
							duration: 3000,
							icon: false
						});
						that.isConnect = false;
						that.address = "";
						that.tcontent = '';
						that.lcontent= '';
						common.removeStorage('address');
						common.removeStorage('token');
						//再次校验授权状态
						that.verifyfun();
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {
					common.hideLoading(0);
				})
			},

			/**
			 * 连接钱包弹出下拉框
			 */
			toMetamaskOk() {
				let that = this;
				if (that.walletsBtn) {
					that.walletsBtn = false;
				} else {
					that.walletsBtn = true;
				}
			},
			/**
			 * 弹出下拉框是否重新验证
			 * @param {Object} type twitter或linkedin
			 */
			toAuthOk(type) {
				let that = this;
				if (type == 'twitter') {
					if (that.authBtn) {
						that.authBtn = false;
					} else {
						that.authBtn = true;
					}
				} else if (type == 'linkedin') {
					if (that.authLinkedBtn) {
						that.authLinkedBtn = false;
					} else {
						that.authLinkedBtn = true;
					}
				}
			},

			/**
			 * 取消重新验证
			 * @param {Object} type twitter或linkedin
			 */
			toCancel(type) {
				let that = this;
				if (type == 'twitter') {
					that.$refs.authPopup.close();
				} else if (type == 'linkedin') {
					that.$refs.authLinkedPopup.close();
				}
			},
			/**
			 * 重新验证
			 */
			toReplace(type) {
				let that = this;
				that.toAuthenticate(type);
			},
			/**
			 * 关闭弹框
			 * @param {Object} Popup
			 */
			closePopup(Popup) {
				let that = this;
				that.$refs[Popup].close();
			},
			/**
			 * 播放svga
			 */
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
		._position {
			position: relative;
		}
		.upicon {
			position: absolute;
			right: 0.08rem;
			width: 22px;
			height: 18px;
			top: 50%;
			margin-top: -9px;
		}

		.certify,
		.auth {
			width: 300px;
			height: auto;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .25rem .15rem .1rem;
			position: relative;
			text-align: center;
			margin: 0 auto;

			.title {
				line-height: .25rem;
				font-size: 16px;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				color: #000000;
				margin-bottom: .4rem;
			}

			.con {
				width: 90%;
				margin: 20rpx auto;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;

				.btnview {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: .25rem;

					.btnCancel {
						width: 45%;
						line-height: 100rpx;
						height: 100rpx;
						border: 1px solid #7D5321;
						border-radius: .1rem;
						background-color: #fff;
						color: #7D5321;
					}

					.btnReplace {
						width: 45%;
						line-height: 100rpx;
						height: 100rpx;
						border: 1px solid #7D5321;
						background: #7D5321;
						color: #FFFFFF;
						border-radius: .1rem;
					}
				}

				._text {
					font-size: 16px;
					color: #000000;
					font-weight: 400;
					line-height: 45rpx;
					margin-bottom: .3rem;
				}

				.input-style {
					font-size: 16px;
					background: #F8F8F8;
					border-radius: .1rem;
					text-align: left;
					line-height: .5rem;
					text-indent: .1rem;
				}

				._height {
					height: .9rem;
					line-height: .3rem;
					overflow-y: scroll;
					margin-bottom: .2rem;
				}

				.btnSend {
					height: 114rpx;
					line-height: 114rpx;
					background: #7D5321;
					border-radius: .1rem;
					font-size: 16px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FEFEFE;
					margin-bottom: .3rem;
				}
			}
		}

		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 3.5rem;
			background-image: url('/static/index/createbg.png');
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
			margin: .3rem auto 0;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			._title {
				font-size: 24px;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._desc {
				width: 90%;
				margin: .2rem auto 0;
				line-height: .26rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #000;

				.p {
					margin-top: .15rem;
				}
			}

			._img {
				width: 100%;
				
				margin-top: .2rem;
				border-radius: 20px;
				
			}
		}

		.content_2_bg,
		.content_3_bg {
			width: 90%;
			max-width: 750px;
			margin: .3rem auto 0;
			height: auto;
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
				width: 92%;
				margin: .2rem auto .3rem;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #747474;
			}

			._someone {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: .3rem;
				font-family: PingFang SC;

				._item {
					width: 48%;
					background: #FFF5E5;
					text-align: center;
					margin-bottom: .12rem;
					padding-bottom: .2rem;

					._img {
						margin-top: 0.15rem;
						width: 1rem;
						height: 1rem;
					}

					._text {
						margin-top: .1rem;
						font-size: 16px;
						font-weight: 500;
					}

					._text1 {
						margin-top: .1rem;
						font-size: 16px;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

		.content_3_bg {
			._step {
				width: 96%;
				margin: .2rem auto;
				background: #FFFFFF;
				box-shadow: 0px 3px 20px 0px rgba(36, 41, 47, 0.1000);
				border-radius: .1rem;
				text-align: center;

				._img {
					margin-top: .2rem;
					width: 1rem;
					height: 1rem;
				}

				._center {
					font-family: PingFang SC;
					margin-top: .1rem;

					._text {
						padding: .02rem .1rem;
						line-height: .23rem;
						background: #4D9BEC;
						border-radius: .05rem;
						font-size: 16px;
						font-weight: 500;
						color: #FFFFFF;
						text-align: center;
					}

					._infoitem {
						margin-left: .15rem;
						line-height: .23rem;
						font-size: 14px;
						font-weight: 500;
						color: #000000;
						text-align: left;
					}
				}

				._detail {
					width: 90%;
					margin: 0 auto;
					font-size: 14px;
					font-weight: 400;
					color: #787878;
					line-height: .23rem;
					margin-top: 0.2rem;

					._color {
						color: #4D74EB;
					}
				}

				._bottom {
					padding: .1rem 0;

					._btn {
						width: 90%;
						height: .45rem;
						background: #E2E2E2;
						border-radius: .06rem;
						border: none;
						font-family: PingFang SC;
						font-weight: 400;
						color: #363636;
						text-align: center;
					}
					._float{
						 position: absolute;
						 top:.75rem;
						 z-index: 100;
						 width: 100%;
					}
					._btn2 {
						background: #FFE9C9;
						color: #A17D48;
						border: none;
						border-radius: 0.06rem 0.06rem 0rem 0rem;
						margin-top: .05rem;
					}
					
					._btn3 {
						background: #EED8B8;
						margin-top: 0rem;
						border-radius: 0rem 0rem 0.06rem 0.06rem;
					}
					._btn1 {
						background: #C8A168;
						border-radius: .05rem;
						color: #FFFFFF;
						margin-top: .2rem;
					}
					._radius{
						border-radius:.06rem;
					}
				}
			}
			._step:last-child{
				margin-bottom: .6rem
			}
		}
	}
</style>
<style>
	/* 在小于或等于 1100 */
	@media screen and (max-width: 1100px) {
	  .content_1_bg ._img{
	    height: 380px;
	  }
	}
	 
	/* 在 400 像素或更小的屏幕上 */
	@media screen and (max-width: 400px) {
	  .content_1_bg ._img{
	    height: 200px;
	  }
	}
</style>