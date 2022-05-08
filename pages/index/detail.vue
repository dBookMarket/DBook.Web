<template>
	<view class="detail">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<view class="r-top">
					<view class="itemleft">
						<image class="img" :src="book.cover_url"></image>
					</view>
					<view class="itemright">
						<view class="name">{{book.name}}</view>
						<text class="author">{{book.author_name}}</text>
						<view class="publisher">出版商：{{book.publisher.name}}</view>
						<view class="info">
							<view class="_item">
								<image class="itemimg" src="/static/book/user.svg"></image>
								<text class="itemtext">拥有者：{{book.n_owners}}</text>
							</view>
							<view class="_item">
								<image class="itemimg" src="/static/book/publisher.svg"></image>
								<text class="itemtext">全部：{{book.amount}}</text>
							</view>
							<view class="_item">
								<image class="itemimg" src="/static/book/circulation.svg"></image>
								<text class="itemtext">流通中：{{book.n_circulations}}</text>
							</view>
						</view>
						<view class="button">
							<button class="_btn" @click="tryRead()">试读</button>
							<!-- v-if="book.is_owned" -->
							<button class="_btn sell" v-if="book.is_owned" @click="sellOut()">卖出</button>
						</view>
					</view>
				</view>
				<view class="r-bottom">
					<view class="itemleft">
						<view class="itemtitle" @click="openContent(1)">
							<text class="text">作品描述</text>
							<image class="img" v-if="down1" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down1" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down1" class="iteminfo">{{book.desc}}</view>
						<view class="itemtitle" @click="openContent(2)">
							<text class="text">作者描述</text>
							<image class="img" v-if="down2" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down2" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down2" class="iteminfo">{{book.author_desc}}</view>
						<view class="itemtitle" @click="openContent(3)">
							<text class="text">出版商描述</text>
							<image class="img" v-if="down3" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down3" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down3" class="iteminfo">{{book.publisher.desc}}</view>
						<view class="itemtitle" @click="openContent(4)">
							<text class="text">链上细节</text>
							<image class="img" v-if="down4" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down4" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down4 && book.contract" class="iteminfo">
							<view class="flex">
								<text class="text">合约地址</text>
								<text class="text">{{book.contract.address | strAddress }}</text>
							</view>
							<view class="flex">
								<text class="text">代币数量</text>
								<text class="text">{{book.contract.token_amount}}</text>
							</view>
							<view class="flex">
								<text class="text">代币标准</text>
								<text class="text">{{book.contract.token_criteria}}</text>
							</view>
							<view class="flex">
								<text class="text">区块链</text>
								<text class="text">{{book.contract.block_chain}}</text>
							</view>
						</view>
					</view>
					<view class="itemright">
						<view class="itemtitle">
							<text class="text">交易详情</text>
							<view @click="openContent(5)">
								<text class="textall">全部列表</text>
								<image class="img" v-if="down5" src="/static/book/down.svg"></image>
								<image class="img" v-if="!down5" src="/static/book/right.svg"></image>
							</view>
						</view>
						<block v-if="down5">
							<view class="listtitle">
								<text class="text">价格</text>
								<text class="text other1">数量</text>
								<text class="text other2">时间</text>
								<text class="text other2">地址</text>
								<text class="text other3"></text>
							</view>
							<view class="list" v-for="(item,index) in tradeList" :key="index">
								<view class="text">
									<radio value="r1" class="radio" color="#6783E9" />
									<text class="mid">{{item.price}}USDT</text>
								</view>
								<text class="text other1">{{item.amount}}</text>
								<text class="text other2">{{item.created_at}}</text>
								<view class="text other2">
									<text>{{item.user.account_addr | strAddress}}</text>
									<text class="once" v-if="item.first_release">首发</text>
								</view>
								<view class="text other3">
									<image class="img" v-if="item.issue == 2" @click="buyIn(item)"
										src="/static/book/cart.svg"></image>
									<image class="img" v-if="item.issue == 3" @click="buyIn(item)"
										src="/static/book/return.svg"></image>
								</view>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="center" :mask-click="false">
			<view class="read">
				<view class="title">
					{{book.name}}
				</view>
				<image class="closeimg" @click="close('read')" src="/static/book/close.svg"></image>
				<view class="con">
					<image class="oimg" src="/static/book/previous.svg"></image>
					<div class="word">

					</div>
					<image class="oimg" src="/static/book/next.svg"></image>
				</view>
				<view class="bot">
					<view class="des">正文324页，试读页2%</view>
					<view class="page">1/23</view>
					<view class="op">
						<image class="opimg" src="/static/book/large.svg"></image>
						<image class="opimg" src="/static/book/narrow.svg"></image>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="sellPopup" type="center" :mask-click="false">
			<view class="seller">
				<view class="title">
					卖出
				</view>
				<image class="closeimg" @click="close('sell')" src="/static/book/close.svg"></image>
				<view class="con">
					<text class="price">单价</text>
					<text class="range">参考价范围：20 ~ 40 USDT</text>
				</view>
				<view class="con border">
					<view class="left">
						<image class="icon" src="/static/book/recommend.svg"></image>
						<text class="title">USDT</text>
						<view class="rightb"></view>
					</view>
					<input class="input" v-model="price" type="text" placeholder="请输入价格，不能低于最低价格" />
				</view>
				<view class="con">
					<text class="price">数量</text>
					<text class="range">剩余数量：{{book.amount}}</text>
				</view>
				<view class="con border">
					<input class="input" v-model="amount" type="text" placeholder="请输入数量" />
				</view>
				<view class="con">
					<view class="taxview">
						<text class="tax">手续费：2.5%</text>
						<text class="tax">版税：20%</text>
					</view>
					<button class="_btn" @click="hangOrder()">挂单</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="buyPopup" type="center" :mask-click="false">
			<view class="buyer">
				<view class="title">
					买入
				</view>
				<image class="closeimg" @click="close('buy')" src="/static/book/close.svg"></image>
				<view class="con">
					<text class="price">单价</text>
				</view>
				<view class="con border">
					<view class="left">
						<image class="icon" src="/static/book/recommend.svg"></image>
						<text class="title">{{currentItem.price}} USDT</text>
					</view>
				</view>
				<view class="con">
					<text class="price">数量</text>
					<text class="range">剩余数量：{{currentItem.amount}}</text>
				</view>
				<view class="con border">
					<input class="input" v-model="amount" type="text" placeholder="请输入数量" />
				</view>
				<view class="con">
					<view class="taxview">

					</view>
					<button class="_btn" @click="buyOrder()">支付</button>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="dealPopup" type="center" :mask-click="false">
			<view class="deal">
				<image class="img" src="/static/book/deal.svg"></image>
				<view>交易进行中</view>
			</view>
		</uni-popup>
		<uni-popup ref="succussPopup" type="center" :mask-click="true">
			<view class="deal">
				<image class="img" src="/static/book/succuss.svg"></image>
				<view>交易成功</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		getIssue,
		getTrades,
		postTrades,
		postTransactions
	} from '@/common/api.js';
	import common from '@/common/common.js';
	import navBar from '@/components/nav.vue';
	import left from '@/components/left.vue';
	import wallet from '@/common/wallet.js';
	import web from '@/common/web.js';
	export default {
		components: {
			navBar,
			left,

		},
		data() {
			return {
				book: {
					preview: {},
					publisher: {},
					contract: {}
				}, //书籍详情
				tradeList: [], //交易详情列表
				amount: "", //卖出的数量
				price: "", //卖出的价格
				currentItem: {}, //当前选择的交易记录去买入
				down1: true,
				down2: true,
				down3: true,
				down4: true,
				down5: true,
				previewUrl: "/static/test.pdf",
			};
		},
		onLoad(option) {
			let that = this;
			if (option.id) {
				that.id = option.id;
				that.getBookDetail(); //书籍详情
				that.getTradeList(); //交易详情列表
			} else {

			}
		},
		mounted() {

		},
		filters: {
			strAddress: function(val) {
				if (val) {
					return common.getAddress(val); //从0下标开始的8个字符
				} else {
					return "";
				}
			},
		},
		methods: {

			/**
			 * 获取书籍详情
			 */
			getBookDetail() {
				let that = this;
				common.showLoading();
				getIssue(that.id).then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						that.book = data;
						that.previewUrl = web.host + that.book.preview.file;
						console.log(that.previewUrl)
					} else {
						uni.showModal({
							title: '提示',
							content: '请求失败',
							showCancel: false
						})
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 交易详情的列表接口
			 */
			getTradeList() {
				let that = this;
				common.showLoading();
				let params = {
					issue: that.id,
				}
				getTrades(params).then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						that.tradeList = data.results;
					} else {
						uni.showModal({
							title: '提示',
							content: '请求失败',
							showCancel: false
						})
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 挂单
			 */
			hangOrder() {
				let that = this;
				if (that.price) {
					if (parseFloat(that.price) < 20) {
						uni.showModal({
							title: '提示',
							content: '参考价为当前的最低价和最高价之间且不能低于出版商发行价。',
							showCancel: false
						})
						return false;
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '请输入价格',
						showCancel: false
					})
					return false;
				}
				if (that.amount) {
					if (parseInt(that.amount) > parseInt(that.book.amount)) {
						uni.showModal({
							title: '提示',
							content: '输入的数量不能大于剩余数量。',
							showCancel: false
						})
						return false;
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '请输入数量',
						showCancel: false
					})
					return false;
				}
				common.showLoading();
				let params = {
					issue: that.id,
					amount: parseInt(that.amount),
					price: parseFloat(that.price)
				}
				postTrades(params).then(res => {
					console.log(res);
					if (res && (res.statusCode === 200 || res.statusCode === 201)) {
						let data = res.data;
						that.getTradeList(); //卖出挂单成功 重新查询交易列表
					} else {
						uni.showModal({
							title: '提示',
							content: '请求失败',
							showCancel: false
						})
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 支付
			 */
			async buyOrder() {
				let that = this;
				if (that.amount) {
					if (parseInt(that.amount) > parseInt(that.currentItem.amount)) {
						uni.showModal({
							title: '提示',
							content: '输入的数量不能大于剩余数量。',
							showCancel: false
						})
						return false;
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '请输入数量',
						showCancel: false
					})
					return false;
				}
				common.showLoading();
				//购买需要先调用合约
				//获取判断是否连接
				let provider = await wallet.connect();
				if (provider) {
					let signer = await wallet.getSigner(provider);
					if (signer) {
						let seller = that.currentItem.user.account_addr; //卖家地址
						let nftId = that.currentItem.issue; //the issue id
						let amount = parseInt(that.amount); //买入的数量
						//hex,metainfo 原数据，一个json数据可以存nft的相关数据，需要转成十六进制 
						let metadata = common.strToHexCharCode(JSON.stringify(that.currentItem));
						let price = parseFloat(that.currentItem.price); //买入的价格
						//授权平台获取代币USDC
						let res = await wallet.approveTrade(signer, amount, price);
						if (res == null || res.status != 1) {
							uni.showModal({
								title: '提示',
								content: '授权失败, 请重新提交',
								showCancel: false
							});
							common.hideLoading(0);
							return;
						}
						//合约执行会返回一个结果
						let transaction = await wallet.trade(signer, seller, nftId, amount, metadata, price);
						console.log(transaction);
						if (transaction == null || transaction.status != 1) {
							uni.showModal({
								title: '提示',
								content: '交易失败, 请重新提交',
								showCancel: false
							});
							common.hideLoading(0);
						} else {
							let params = {
								trade: parseInt(that.currentItem.id),
								amount: parseInt(that.amount),
								price: parseFloat(price),
								hash: transaction.transactionHash
							}
							that.$refs.dealPopup.open();
							//购买书籍
							postTransactions(params).then(res => {
								console.log(res);
								if (res && (res.statusCode === 200 || res.statusCode === 201)) {
									let data = res.data;
									that.dealSuccuss();
								} else {
									uni.showModal({
										title: '提示',
										content: '请求失败',
										showCancel: false
									})
								}
							}).catch(error => {
								uni.showModal({
									title: '提示',
									content: error,
									showCancel: false
								})
							}).finally(() => {
								common.hideLoading(0);
							})
						}
					}
				}
			},
			/**
			 * 交易成功
			 */
			dealSuccuss() {
				let that = this;
				that.$refs.dealPopup.close();
				that.$refs.succussPopup.open();
			},
			/**
			 * 试读
			 */
			tryRead() {
				//this.$refs.popup.open();
				let that = this;
				//获取当前操作系统参数,因Safari 浏览器中没办法在回调函数里面执行window.open, 原因是safari的安全机制将其阻挡了
				//url 代表后端的完整请求地址路径，类似：https://xxxxxxxxxxx:端口号/项目称/api/common/file/doc-2-html/download?fileId=1111111111111
				let url = that.previewUrl;
				let _pf = navigator.platform;
				if (_pf.indexOf("Win") > -1) {
					//window系统支持chrome,Edge
					window.open(
						"/static/pdf/web/viewer.html?file=" + encodeURIComponent(url)
					);
				} else if (_pf.indexOf("Mac") > -1) {
					//mac系统支持safari;
					var winRef = window.open("", "_blank"); //先打开一个页面
					winRef.location =
						"/static/pdf/web/viewer.html?file=" + encodeURIComponent(url)
				} else {
					window.open(
						"/static/pdf/web/viewer.html?file=" + encodeURIComponent(url)
					);
				}
			},
			/**
			 * 卖出
			 */
			sellOut() {
				this.$refs.sellPopup.open();
			},
			/**
			 * 买入
			 * @param {Object} item
			 */
			buyIn(item) {
				let that = this;
				that.currentItem = item;
				that.$refs.buyPopup.open();
			},
			/**
			 *  
			 * 关闭
			 */
			close(type) {
				let that = this;
				if (type == 'read') {
					that.$refs.popup.close()
				} else if (type == 'sell') {
					that.$refs.sellPopup.close()
				} else if (type == 'buy') {
					that.$refs.buyPopup.close()
				}
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
	.detail {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		background-color: #F6F6F6;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.isshowpdf {
			display: flex !important;
		}

		.read,
		.seller,
		.buyer {
			width: 6rem;
			height: 6.5rem;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .2rem .15rem;
			position: relative;
			text-align: center;

			.title {
				line-height: .24rem;
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				color: #000000;
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
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: .1rem 0;

				.oimg {
					vertical-align: middle;
					width: .3rem;
					height: .3rem;
					cursor: pointer;
				}

				.word {
					width: 4.6rem;
					height: 5.3rem;
				}
			}

			.bot {
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #000000;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.op {
					.opimg {
						width: .2rem;
						height: .2rem;
						vertical-align: center;
						margin-right: .12rem;
						cursor: pointer;
					}
				}
			}
		}

		.seller,
		.buyer {
			width: 5.3rem;
			height: 3.2rem;
			background: #FFFFFF;
			border-radius: .15rem;

			.con {
				margin-top: .2rem;
				font-size: 28rpx;

				.range {
					color: #999999;
				}

				.taxview {
					flex: 1;
					text-align: left;
				}

				.tax {
					color: #6783E9;
					padding-right: .2rem;
				}

				._btn {
					width: 1.1rem;
					height: .45rem;
					background: #6783E9;
					border-radius: .24rem;
					color: #FFFFFF;
					line-height: .45rem;
				}
			}

			.border {
				justify-content: flex-start;
				align-items: center;
				height: .5rem;
				line-height: .5rem;
				background: #F8F8F8;
				border-radius: .1rem;

				.left {
					width: 18%;
					display: flex;
					justify-content: space-around;

					.icon {
						width: .25rem;
						height: .25rem;
						vertical-align: middle;
					}

					.title {
						font-size: 28rpx;
						color: #999999;
					}

					.rightb {
						width: 1px;
						background: #DEDEDE;
					}
				}

				.input {
					width: 80%;
					text-align: left;
					text-indent: 25rpx;
					font-size: 28rpx;
					height: .5rem;
					line-height: .5rem;
				}
			}
		}

		.buyer {
			.title {
				color: #000000 !important;
			}
		}

		.container {
			.right {
				.r-top {
					display: flex;
					justify-content: flex-start;

					.itemleft {
						flex: 0.65;
						margin-right: .29rem;

						.img {
							border-radius: .20rem;
							width: 100%;
							height: 2.4rem;
						}
					}

					.itemright {
						flex: 2;
						font-weight: 400;

						.name {
							line-height: .35rem;
							font-size: 36rpx;
							color: #000000;
						}

						.author {
							margin-top: .1rem;
							width: 30%;
							text-align: left;
							padding: 0rpx 20rpx;
							background: #E1E1E1;
							border-radius: .2rem;
							height: .2rem;
							line-height: .2rem;
							font-size: 24rpx;
							color: #999999;
						}

						.publisher {
							margin-top: .05rem;
							height: .2rem;
							font-size: 24rpx;
							color: #999999;
						}

						.info {
							margin-top: .1rem;
							display: flex;
							justify-content: flex-start;
							line-height: .2rem;
							align-items: center;
							font-size: 24rpx;

							._item {
								flex: 1;

								.itemimg {
									width: .18rem;
									height: .2rem;
									margin-right: 0.05rem;
									vertical-align: middle;
								}

								.itemtext {
									width: .75rem;
									height: .2rem;
									line-height: .2rem;
									color: #999999;
								}
							}
						}

						.button {
							background-color: transparent;
							margin-top: .25rem;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							width: 100%;

							._btn {
								width: 1.3rem;
								height: .5rem;
								background: #6783E9;
								border-radius: .24rem;
								color: #FFFFFF;
								line-height: .5rem;
								margin-left: 0px;
								margin-right: 0px;
							}

							.sell {
								margin-left: 0.4rem;
								background: #E96767;
							}
						}
					}
				}

				.r-bottom {
					display: flex;
					justify-content: flex-start;
					font-weight: 400;
					margin: .2rem 0;

					.itemleft {
						flex: 0.65;
						margin-right: .29rem;
						height: auto;
						border-radius: .20rem;
						background-color: #FFFFFF;

						.itemtitle {
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 0 .15rem;
							height: .4rem;
							line-height: .4rem;

							.text {
								font-size: 28rpx;
								color: #000000;
							}

							.img {
								width: .16rem;
								height: .18rem;
								vertical-align: middle;
							}
						}

						.iteminfo {
							padding: .07rem .15rem;
							line-height: .19rem;
							font-size: 24rpx;
							color: #999999;
							background: #ECECEC;

							.flex {
								display: flex;
								justify-content: space-between;

								.text {
									flex: 1;
									line-height: .22rem;
								}

								.text:last-child {
									text-align: right;
								}
							}
						}
					}

					.itemright {
						flex: 2;
						height: auto;
						border-radius: .20rem;
						background-color: #FFFFFF;
						font-size: 28rpx;

						.itemtitle {
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 0 .15rem;
							height: .4rem;
							line-height: .4rem;

							.text {
								color: #000000;
							}

							.textall {
								color: #6783E9;
							}

							.img {
								width: .16rem;
								height: .18rem;
								margin-left: .06rem;
								vertical-align: middle;
							}
						}

						.listtitle,
						.list {
							display: flex;
							justify-content: space-around;
							padding: 0 .15rem;
							height: .4rem;
							line-height: .4rem;
							background: #ECECEC;

							.text {
								flex: 1.3;
								color: #999999;
							}

							.text:first-child {}

							.other1 {
								flex: .8;
							}

							.other2 {
								flex: 2;
							}

							.other3 {
								flex: .4;
							}
						}

						.list {
							background: #FFFFFF;

							.text {
								color: #000000;

								.mid {
									vertical-align: middle;
								}

								.radio {
									width: .24rem;
									height: .24rem;
								}

								.once {
									background: #E96767;
									color: #FFFFFF;
								}

								.img {
									width: .2rem;
									height: .2rem;
									cursor: pointer;
									vertical-align: middle;
								}
							}

						}
					}
				}
			}
		}
	}
</style>
