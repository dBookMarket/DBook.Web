<template>
	<view>
		<view class="navbg">
			<view class="nav">
				<view class="left" @click="toIndex()">
					<image src="/static/img/logodbook.png" mode="" class="logo"></image>
				</view>
				<view class="center cflex">
					<view class="search">
						<input class="searchinput" type="text" placeholder="搜索书籍" />
						<image class="searchicon" src="/static/book/search.svg"></image>
					</view>
				</view>
				<view class="right cflex">
					<view class="flex">阅读器</view>
					<view class="flex" @click="selled()">卖出</view>
					<view class="flex choosewallet" v-if="!account" @click="toWallet(1)">
						<image class="svg" src="/static/book/link1.svg"></image>
						<text>选择钱包</text>
						<text></text>
					</view>
					<view class="flex choosewallet cwbg" v-if="account" @click="toWallet(2)">
						<image class="svg" src="/static/book/link.svg"></image>
						<text>{{account | strAccount}}</text>
						<text></text>
					</view>
					<view class="_wallet" v-if="isMetaMask">
						<view class="_walletItem">
							<image src="/static/book/metamask.jpg" class="metamask"></image>
							<text class="selectw">链接钱包</text>
						</view>
						<view class="choose" @click="toMetamask()">
							<text>MeraMask</text>
							<image class="metamaskmin" src="/static/book/metamask.jpg"></image>
						</view>
					</view>
					<view class="_connect" v-if="isConnect">
						<view class="_item" @click="toCopy()">
							<image class="svg" src="/static/book/copy.svg"></image>
							<text>复制地址</text>
						</view>
						<view class="_item" @click="toSwitch()">
							<image class="svg" src="/static/book/switch.svg"></image>
							<text>切换账户</text>
						</view>
						<view class="_item" @click="toBreak()">
							<image class="svg" src="/static/book/break.svg"></image>
							<text>断开连接</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "navBar",
		data() {
			return {
				isMetaMask: false,
				isConnect: false,
				account: ''
			};
		},
		filters: {
			strAccount: function(val) {
				if (!val) return false;
				return val.substr(0, 8) + "..."; //从0下标开始的8个字符
			}
		},
		methods: {
			/**
			 * 弹出框连接钱包1 已经连接2
			 * @param {Object} type
			 */
			toWallet(type) {
				let that = this;
				if (type == 1) {
					that.isMetaMask = true;
				} else if (type == 2) {
					that.isConnect = true;
				}
			},
			/**
			 * 连接钱包
			 */
			toMetamask() {
				let that = this;
				that.account = '0xD9799A3a97A6c865faA2B0Cdb16c18a39d2fE26a';
				that.isMetaMask = false;
			},
			toIndex() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			/**
			 * 卖出
			 */
			selled(){
				uni.navigateTo({
					url: '/pages/index/mine'
				})
			},
			/**
			 * 复制地址
			 */
			toCopy() {

			},
			/**
			 * 切换路线
			 */
			toSwitch() {

			},
			/**
			 * 断开连接
			 */
			toBreak() {

			},
			

		}
	}
</script>

<style scoped lang='scss'>
	.navbg {
		background-color: #FFFFFF;
		width: 100%;
		font-size: 28rpx;

		.search {
			width: 6rem;
			height: .4rem;
			line-height: .4rem;
			background-color: #F2F2F2;
			border: 1px solid #F2F2F2;
			border-radius: .2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.searchinput {
				border: none;
				width: 90%;
				text-align: left;
				text-indent: 25rpx;
				height: .4rem;
				line-height: .4rem;
			}

			.searchicon {
				width: .38rem;
				height: .38rem;
				text-align: right;
				cursor: pointer;
			}
		}

		.right {
			text-align: center;

			.flex {
				flex: 1;
				line-height: .4rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #000000;
				cursor: pointer;
			}

			.choosewallet {
				position: relative;
				height: .4rem;
				line-height: .4rem;
				background: #E8E8E8;
				border-radius: .2rem;
				text-align: center;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #999999;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.svg {
					width: .38rem;
					height: .38rem;
					text-align: left;
				}
			}

			.cwbg {
				background: #6783E9;
				color: #FEFEFE;
			}
		}
	}

	._connect {
		height: auto;
		width: 2.3rem;
		position: absolute;
		z-index: 10;
		top: .9rem;
		right: 3%;
		font-size: 30rpx;
		background-color: #6783E9;
		border-radius: .1rem;
		color: #FEFEFE;
		font-family: Alibaba PuHuiTi;

		._item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: 400;
			line-height: .4rem;
			cursor: pointer;

			.svg {
				width: .2rem;
				height: .2rem;
				margin-left: .2rem;
				margin-right: .1rem;
			}
		}

	}

	._wallet {
		height: auto;
		width: 2.3rem;
		position: absolute;
		z-index: 10;
		top: .9rem;
		right: 3%;
		font-size: 30rpx;
		background-color: #FFFFFF;
		border-radius: .1rem;
		color: #000000;

		._walletItem {
			text-align: center;
			margin-top: .2rem;
			height: .8rem;
			line-height: .3rem;

			.selectw {
				display: block;
				height: .4rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
			}

			.metamask {
				width: .4rem;
				height: .4rem;
				border-radius: 50%;
			}
		}

		.choose {
			width: 80%;
			height: .4rem;
			margin: .2rem auto;
			line-height: .4rem;
			border-radius: .2rem;
			border: 1px solid #E2E2E2;
			text-align: center;
			font-family: Alibaba PuHuiTi;
			font-weight: 400;
			color: #000000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			cursor: pointer;

			.metamaskmin {
				width: .3rem;
				height: .3rem;
				border-radius: 50%;
			}
		}
	}
</style>
