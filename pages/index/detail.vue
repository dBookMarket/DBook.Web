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
						<image class="img" src="/static/book/detail.png"></image>
					</view>
					<view class="itemright">
						<view class="name">Harry Potter and the Order of the Phoenix
							Collector's Edition</view>
						<text class="author">J. K. Rowling</text>
						<view class="publisher">出版商：布鲁姆斯伯里出版社</view>
						<view class="info">
							<view class="_item">
								<image class="itemimg" src="/static/book/user.svg"></image>
								<text class="itemtext">拥有者：4560</text>
							</view>
							<view class="_item">
								<image class="itemimg" src="/static/book/publisher.svg"></image>
								<text class="itemtext">全部：1000000</text>
							</view>
							<view class="_item">
								<image class="itemimg" src="/static/book/circulation.svg"></image>
								<text class="itemtext">流通中：54561230</text>
							</view>
						</view>
						<view class="button">
							<button class="_btn" @click="tryRead()">试读</button>
							<button class="_btn sell" @click="sellOut()">卖出</button>
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
						<view v-if="down1" class="iteminfo">The author of the Harry Potter series is J.K. Rowling, born
							on July 31,
							1965 in Gwentshire, England. He graduated from the University of Exeter in England and is a
							British writer.</view>
						<view class="itemtitle" @click="openContent(2)">
							<text class="text">作者描述</text>
							<image class="img" v-if="down2" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down2" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down2" class="iteminfo">The author of the Harry Potter series is J.K. Rowling, born
							on July 31,
							1965 in Gwentshire, England. He graduated from the University of Exeter in England and is a
							British writer.</view>
						<view class="itemtitle" @click="openContent(3)">
							<text class="text">出版商描述</text>
							<image class="img" v-if="down3" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down3" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down3" class="iteminfo">The author of the Harry Potter series is J.K. Rowling, born
							on July 31,
							1965 in Gwentshire, England. He graduated from the University of Exeter in England and is a
							British writer.</view>
						<view class="itemtitle" @click="openContent(4)">
							<text class="text">链上细节</text>
							<image class="img" v-if="down4" src="/static/book/down.svg"></image>
							<image class="img" v-if="!down4" src="/static/book/right.svg"></image>
						</view>
						<view v-if="down4" class="iteminfo">
							<view class="flex">
								<text class="text">合约地址</text>
								<text class="text">0ux3j4h...</text>
							</view>
							<view class="flex">
								<text class="text">代币数量</text>
								<text class="text">10000</text>
							</view>
							<view class="flex">
								<text class="text">代币标准</text>
								<text class="text">ERC-1155</text>
							</view>
							<view class="flex">
								<text class="text">区块链</text>
								<text class="text">Poiygon</text>
							</view>
						</view>
					</view>
					<view class="itemright">
						<view class="itemtitle">
							<text class="text">交易详情</text>
							<text class="textall">全部列表</text>
						</view>
						<view class="listtitle">
							<text class="text">价格</text>
							<text class="text other1">数量</text>
							<text class="text other2">时间</text>
							<text class="text other2">地址</text>
							<text class="text other3"></text>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9" checked="true" />
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once">首发</text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/return.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" @click="buyIn()" src="/static/book/return.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9" />
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/cart.svg"></image>
							</view>
						</view>
						<view class="list">
							<view class="text">
								<radio value="r1" class="radio" color="#6783E9"/>
								<text class="mid">20 USDT</text>
							</view>
							<text class="text other1">100000</text>
							<text class="text other2">02-21-2022 10:50</text>
							<view class="text other2">
								<text>0x213412...</text>
								<text class="once"></text>
							</view>
							<view class="text other3">
								<image class="img" src="/static/book/return.svg"></image>
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :mask-click="false">
			<view class="read">
				<view class="title">
					Harry Potter and the Order of the Phoenix Collector's Edition
				</view>
				<image class="closeimg" @click="close('read')" src="/static/book/close.svg"></image>
				<view class="con">
					<image class="oimg" src="/static/book/previous.svg"></image>
					<image class="word" src="/static/book/word.png"></image>
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
					<input class="input" type="text" placeholder="请输入价格，不能低于最低价格" />
				</view>
				<view class="con">
					<text class="price">数量</text>
					<text class="range">剩余数量：2</text>
				</view>
				<view class="con border">
					<input class="input" type="text" placeholder="请输入数量" />
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
						<text class="title">20 USDT</text>
					</view>
				</view>
				<view class="con">
					<text class="price">数量</text>
					<text class="range">剩余数量：2</text>
				</view>
				<view class="con border">
					<input class="input" type="text" placeholder="请输入数量" />
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
				<view @click="dealSuccuss()">交易进行中</view>
			</view>
		</uni-popup>
		<uni-popup ref="succussPopup" type="center" :mask-click="false">
			<view class="deal">
				<image class="img" src="/static/book/succuss.svg"></image>
				<view>交易成功</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import navBar from '@/components/nav.vue'
	import left from '@/components/left.vue'
	export default {
		components: {
			navBar,
			left
		},
		data() {
			return {
				down1: true,
				down2: false,
				down3: true,
				down4: true
			};
		},
		onLoad() {

		},
		methods: {
			/**
			 * 挂单
			 */
			hangOrder(){
				
			},
			/**
			 * 支付
			 */
			buyOrder(){
				this.$refs.dealPopup.open();
			},
			/**
			 * 交易成功
			 */
			dealSuccuss(){
				let that = this;
				that.$refs.dealPopup.close();
				that.$refs.succussPopup.open();
			},
			/**
			 * 试读
			 */
			tryRead(){
				this.$refs.popup.open();
			},
			/**
			 * 卖出
			 */
			sellOut(){
				this.$refs.sellPopup.open();
			},
			/**
			 * 买入
			 */
			buyIn(){
				this.$refs.buyPopup.open()
			},
			/**
			 * 关闭
			 */
			close(type){
				let that = this;
				if(type == 'read'){
					that.$refs.popup.close()
				}else if(type == 'sell'){
					that.$refs.sellPopup.close()
				}else if(type == 'buy'){
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
		
		.read,.seller,.buyer{
			width: 6rem;
			height: 6.5rem;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .2rem .15rem;
			position: relative;
			text-align: center;
			.title{
				line-height: .24rem;
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				color: #000000;
			}
			.closeimg{
				position: absolute;
				width: .25rem;
				top: .2rem;
				right: 1.8%;
				z-index: 10;
				height: .25rem;
				cursor: pointer;
			}
			.con{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: .1rem 0;
				.oimg{
					vertical-align: middle;
					width: .3rem;
					height: .3rem;
					cursor: pointer;
				}
				.word{
					width: 4.6rem;
					height: 5.3rem;
				}
			}
			.bot{
				font-size: 30rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #000000;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.op{
					.opimg{
						width: .2rem;
						height: .2rem;
						vertical-align: center;
						margin-right: .12rem;
						cursor: pointer;
					}
				}
			}
		}
		.seller,.buyer{
			width: 5.3rem;
			height: 3.2rem;
			background: #FFFFFF;
			border-radius: .15rem;
			.con{
				margin-top: .2rem;
				font-size: 28rpx;
				.range{
					color: #999999;
				}
				.taxview{
					flex: 1;
					text-align: left;
				}
				.tax{
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
			
			.border{
				justify-content: flex-start;
				align-items: center;
				height: .5rem;
				line-height: .5rem;
				background: #F8F8F8;
				border-radius: .1rem;
				.left{
					width: 18%;
					display: flex;
					justify-content: space-around;
					.icon{
						width: .25rem;
						height: .25rem;
						vertical-align: middle;
					}
					.title{
						font-size: 28rpx;
						color: #999999;
					}
					.rightb{
						width: 1px;
						background: #DEDEDE;
					}
				}
				.input{
					width: 80%;
					text-align: left;
					text-indent: 25rpx;
					font-size: 28rpx;
					height: .5rem;
					line-height: .5rem;
				}
			}
		}
		.buyer{
			.title{
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

							._btn {
								width: 1.5rem;
								height: .5rem;
								background: #6783E9;
								border-radius: .24rem;
								color: #FFFFFF;
								line-height: .5rem;
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
							.textall{
								color: #6783E9;
							}
						}
						.listtitle,.list{
							display: flex;
							justify-content: space-around;
							padding: 0 .15rem;
							height: .4rem;
							line-height: .4rem;
							background: #ECECEC;
							.text{
								flex: 1.3;
								color: #999999;
							}
							.text:first-child{
								
							}
							.other1{
								flex: .8;
							}
							.other2{
								flex: 2;
							}
							.other3{
								flex: .4;
							}
						}
						.list{
							background: #FFFFFF;
							.text{
								color: #000000;
								.mid{
									vertical-align: middle;
								}
								.radio{
									width: .24rem;
									height: .24rem;
								}
								.once{
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
