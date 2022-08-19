<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_item">
				<view class="_title">DBook writer</view>
				<view class="_desc">DBook provides a completely autonomous and decentralized environment
					for literary creators from all over the world. Creating on dBook allows you
					to create freely without sharing revenue, signing exclusive agreements or
					exclusivity agreements.<br />
					You can make your books into NFT by dBook and publish them on the
					market. After readers buy them, you will directly get all the profits. At
					the same time, when some readers resell your works, you can get a certain
					percentage of royalties.<br />
					At the same time, you can actually interact with readers through on-chain
					reviews to get their feedback on your work.
				</view>
			</view>
			<view class="_middle"></view>
			<view class="_item">
				<image src="/static/index/writer.svg" class="_img"></image>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">dBook Writer's Earnings</view>
			<view class="_desc">dBook is an open-ended gathering place for writers, where you<br />
				can not only create freely, but also get objective benefits.</view>
			<view class="_someone">
				<view class="_item">
					<image src="/static/index/earn1.svg" class="_img"></image>
					<view class="_text">100% share of income</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn2.svg" class="_img"></image>
					<view class="_text">100% gift yield</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn3.svg" class="_img"></image>
					<view class="_text">All rights reserved</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn4.svg" class="_img"></image>
					<view class="_text">Author Subsidy Program</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn5.svg" class="_img"></image>
					<view class="_text">100% share of income</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn6.svg" class="_img"></image>
					<view class="_text">100% gift yield</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn7.svg" class="_img"></image>
					<view class="_text">All rights reserved</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn8.svg" class="_img"></image>
					<view class="_text">Author Subsidy Program</view>
					<view class="_text1">I am a writer</view>
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">How am I going to be a dBook writer</view>
			<view class="_desc">dBook is an open-ended writer's gathering place, <br />
				you can complete the writer's identification through the following steps, it takes about 2-3 minutes
			</view>
			<view class="_step">
				<view class="_left">
					<image src="/static/index/metamask.svg" class="_img"></image>
				</view>
				<view class="_center">
					<text class="_text">STEP1</text>
					<text class="_infoitem">Link your wallet-MetaMask</text>
					<view class="_detail">You need to link to MetaMask to log in first. If you have not installed
						MetaMask <text class="_color">(go to the Google WebShop) </text>
						or have never used MetaMask<text class="_color">(how-to guide)</text>,please follow the relevant
						links to install or learn.</view>
				</view>
				<view class="_right" v-if="!address">
					<button class="_btn" @click="toMetamask()">Link wallets</button>
				</view>
				<view class="_right" v-if="address">
					<button class="_btn _btn1 _position" @click="toMetamaskOk()">
						{{address | strAddress}}
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<button v-if="walletsBtn" class="_btn _btn2" @click="toSwitch()">Change the account</button>
					<button v-if="walletsBtn" class="_btn _btn3" @click="toBreak()">Exit</button>
				</view>
			</view>
			<view class="_step">
				<view class="_left">
					<image src="/static/index/media.svg" class="_img"></image>
				</view>
				<view class="_center">
					<text class="_text">STEP2</text>
					<text class="_infoitem">Connect your social media</text>
					<view class="_detail">Once you've completed the first step, connect your social media, Twitter,
						and LinkedIn choose one of the two. Clicking on Link will ask you to send
						the specified content in your social media account, in order to verify the
						identity owner of that social media.</view>
				</view>
				<view class="_right" v-if="isAuthTweets == false">
					<button class="_btn" @click="toAuthenticate('twitter')">Link Tweets</button>
				</view>
				<view class="_right" v-if="isAuthTweets == true">
					<button class="_btn _btn1 _position" @click="toAuthOk('twitter')">AuthenticationOk
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<button v-if="authBtn" class="_btn _btn2" @click="toRevalidate('twitter')">Revalidation</button>
				</view>
			</view>
			<view class="_step">
				<view class="_left">
					<image src="/static/index/verify.svg" class="_img"></image>
				</view>
				<view class="_center">
					<text class="_text">STEP3</text>
					<text class="_infoitem">Verify social media and become an author</text>
					<view class="_detail">After completing the second step, select your associated social media method,
						click the corresponding verification button, and automatically activate the
						author's publishing permission after detecting the identity consistency.</view>
				</view>
				<view class="_right" v-if="isLinkedIn == false">
					<button class="_btn" @click="toAuthenticate('linkedin')">Link LinkedIn</button>
				</view>
				<view class="_right" v-if="isLinkedIn == true">
					<button class="_btn _btn1 _position" @click="toAuthOk('linkedin')">AuthenticationOk
						<image src="/static/index/up.svg" class="upicon"></image>
					</button>
					<button v-if="authLinkedBtn" class="_btn _btn2"
						@click="toRevalidate('linkedin')">Revalidation</button>
				</view>

			</view>
		</view>
		<bottom></bottom>
		<uni-popup ref="certifyPopup" type="center" :mask-click="false">
			<view class="certify">
				<view class="title">
					Certification of twitter
				</view>
				<image class="closeimg" @click="closePopup('certifyPopup')" src="/static/index/close.svg"></image>
				<view class="con">
					<view class="_text">
						You are obtaining author authentication and need to send the following tweet to prove Twitter's
						identity
					</view>
					<textarea maxlength="1500" v-model="tcontent" type="text" class="input-style _height"
						placeholder="@ddid_io Dbook is in hot progress, 10W $subsidy waiting for you to take"></textarea>
					<button class="btnSend" @click="toSend('twitter')">SEND</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="authPopup" type="center" :mask-click="false">
			<view class="auth">
				<view class="title">
					Change your Twitter authentication
				</view>
				<image class="closeimg" @click="closePopup('authPopup')" src="/static/index/close.svg"></image>
				<view class="con">
					<view class="_text">If you need to change the Twitter authentication of your current Ethereum
						identity, the change will not
						affect the writer publishing function</view>
					<view class="btnview">
						<button class="btnCancel" @click="toCancel('twitter')">CANCEL</button>
						<button class="btnReplace" @click="toReplace('twitter')">REPLACE</button>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="linkedPopup" type="center" :mask-click="false">
			<view class="certify">
				<view class="title">
					Certification of LinkedIn
				</view>
				<image class="closeimg" @click="closePopup('linkedPopup')" src="/static/index/close.svg"></image>
				<view class="con">
					<view class="_text">
						You are obtaining author authentication and need to send the following tweet to prove LinkedIn's
						identity
					</view>
					<textarea maxlength="1500" v-model="lcontent" type="text" class="input-style _height"
						placeholder="@ddid_io Dbook is in hot progress, 10W $subsidy waiting for you to take"></textarea>
					<button class="btnSend" @click="toSend('linkedin')">SEND</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="authLinkedPopup" type="center" :mask-click="false">
			<view class="auth">
				<view class="title">
					Change your LinkedIn authentication
				</view>
				<image class="closeimg" @click="closePopup('authLinkedPopup')" src="/static/index/close.svg"></image>
				<view class="con">
					<view class="_text">If you need to change the LinkedIn authentication of your current Ethereum
						identity, the change will not
						affect the writer publishing function</view>
					<view class="btnview">
						<button class="btnCancel" @click="toCancel('linkedin')">CANCEL</button>
						<button class="btnReplace" @click="toReplace('linkedin')">REPLACE</button>
					</view>
				</view>
			</view>
		</uni-popup>
		<view class="loading" v-show="loading">
			<div id="yyzCanvas" class="yyzCanvas" loops="0"></div>
		</view>
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
				address: '',
				isAuthTweets: false,
				isLinkedIn: false,
				walletsBtn: false,
				authBtn: false,
				authLinkedBtn: false,
				loading: true,
				screenWidth: null,
				svgaInfo: '/static/index/loading.svga',
				tcontent: '',
				lcontent: '',
				type: '', //twitter或linkedin
				isAuth: false, //是否授权
				oauth_token: '', //验证twitter url 带过来的参数
				oauth_verifier: '', //验证twitter url 带过来的参数
				code: '', //验证linkedin url 带过来的参数
				state: '', //验证linkedin url 带过来的参数
			};
		},
		watch: {
			//监听页面屏幕宽度
			screenWidth: function(n, o) {
				if (n < 1024) {
					console.log(location.search)
					uni.navigateTo({
						url: '/pages/index/mcreate'+location.search
					})
					console.log('屏幕宽度小于1024了')
				}
			}
		},
		filters: {
			strAddress: function(val) {
				return common.getAddress(val, 12); //从0下标开始的8个字符
			},
		},
		onLoad(option) {
			let that = this;
			that.type = option.type || common.getQueryString('type');
			that.oauth_token = option.oauth_token || common.getQueryString('oauth_token') ;
			that.oauth_verifier = option.oauth_verifier || common.getQueryString('oauth_verifier');
			that.isAuth = option.isAuth || common.getQueryString('isAuth') ;
			that.code = option.code || common.getQueryString('code');
			that.state = option.state || common.getQueryString('state');
			console.log(JSON.stringify(option))
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
			if (common.getStorage("token") && common.getStorage('address')) {
				that.address = common.getStorage('address');
			}
			that.playSvg();
			//3秒关闭页面loading动画
			setTimeout(function() {
				that.loading = false;
			}, 3000);
			//校验授权状态
			that.verifyfun();
		},
		methods: {
			/**
			 * 验证状态
			 */
			verifyfun() {
				let that = this;
				//common.showLoading();
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
					//common.hideLoading(0);
				})
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
		}
	}
</script>

<style scoped lang="scss">
	.bg {
		background-color: #fff;
		font-size: 30rpx;
		color: #000000;
		
		._position {
			position: relative;
		}

		.upicon {
			position: absolute;
			top: 50%;
			right: 0.08rem;
			margin-top: -4px;
			width: 22rpx;
			height: 18rpx;
		}

		.certify,
		.auth {
			width: 8rem;
			height: auto;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .25rem .15rem .1rem;
			position: relative;
			text-align: center;

			.title {
				line-height: .24rem;
				font-size: 52rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				color: #000000;
				margin-bottom: .4rem;
			}

			.closeimg {
				position: absolute;
				width: .25rem;
				top: .2rem;
				right: 1.8%;
				z-index: 10;
				height: .25rem;
				cursor: pointer;
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
						line-height: 114rpx;
						height: 114rpx;
						border: 1px solid #7D5321;
						border-radius: .1rem;
						background-color: #fff;
						color: #7D5321;
					}

					.btnReplace {
						width: 45%;
						line-height: 114rpx;
						height: 114rpx;
						border: 1px solid #7D5321;
						background: #7D5321;
						color: #FFFFFF;
						border-radius: .1rem;
					}
				}

				._text {
					font-size: 32rpx;
					color: #000000;
					font-weight: 400;
					line-height: 45rpx;
					margin-bottom: .3rem;
				}

				.input-style {
					font-size: 30rpx;
					background: #F8F8F8;
					border-radius: .1rem;
					height: .5rem;
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
					font-size: 32rpx;
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
			height: 5rem;
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
			width: 100%;
			max-width: 1150px;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			display: flex;
			justify-content: space-between;

			._middle {
				flex: .2;
			}

			._item {
				flex: 1;
				text-align: right;

				._title {
					font-size: 100rpx;
					font-family: Alibaba PuHuiTi;
					font-weight: 800;
					text-align: left;
				}

				._desc {
					line-height: .3rem;
					font-family: PingFang SC;
					font-weight: 400;
					text-align: left;
					margin-top: .2rem;
				}

				._img {
					width: 5.75rem;
					height: 3.3rem;
					border-radius: 20px;
				}
			}
		}

		.content_2_bg,
		.content_3_bg {
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
				flex-wrap: wrap;
				margin-top: .3rem;
				font-family: PingFang SC;

				._item {
					width: 24%;
					height: 3rem;
					background: #FFF5E5;
					text-align: center;
					margin-bottom: 1.2%;

					._img {
						margin-top: 0.4rem;
						width: 1.22rem;
						height: 1.47rem;
					}

					._text {
						margin-top: .2rem;
						font-size: 40rpx;
						font-weight: 800;
					}

					._text1 {
						margin-top: .1rem;
						font-size: 30rpx;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

		.content_3_bg {
			._step {
				padding: 0 .4rem;
				margin: .5rem .3rem .5rem .3rem;
				height: 2.3rem;
				background: #FFFFFF;
				box-shadow: 0px 3px 49px 0px rgba(36, 41, 47, 0.1000);
				border-radius: .1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				._left {
					flex: 1;

					._img {
						width: 1.45rem;
						height: 1.45rem;
					}
				}

				._center {
					flex: 4;
					font-family: PingFang SC;

					._text {
						padding: .02rem .1rem;
						line-height: .3rem;
						background: #4D9BEC;
						border-radius: .05rem;
						font-size: 40rpx;
						font-weight: 500;
						color: #FFFFFF;
						text-align: center;
					}

					._infoitem {
						margin-left: .15rem;
						line-height: .3rem;
						font-size: 50rpx;
						font-weight: 500;
						color: #000000;
						text-align: left;
					}

					._detail {
						font-size: 30rpx;
						font-weight: 400;
						color: #787878;
						line-height: .25rem;
						margin-top: 0.2rem;
						width: 55%;

						._color {
							color: #4D74EB;
						}
					}
				}

				._right {
					flex: 1;

					._btn {
						width: 2rem;
						height: .45rem;
						background: #E2E2E2;
						border-radius: .1rem;
						font-family: PingFang SC;
						font-weight: 400;
						font-size: 30rpx;
						line-height: .45rem;
						color: #363636;
						text-align: center;
					}

					._btn1 {
						background: #C8A168;
						border-radius: .1rem;
						color: #FFFFFF;
						margin-top: .2rem;
					}

					._btn2 {
						background: #FFE9C9;
						color: #A17D48;
						border: none;
						border-radius: 0rem;
						margin-top: .05rem;
					}

					._btn3 {
						background: #EED8B8;
						margin-top: 0rem;
						border-radius: 0rem;
					}

					._btn2:after,
					._btn3:after {
						border: none;
					}
				}
			}
		}
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
	}
</style>
