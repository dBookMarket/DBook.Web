<template>
	<view class="mine">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<view class="right-top">
					<image class="photo" src="/static/book/photo.png"></image>
					<text class="name">0X231245Jnjcsahhouhiod</text>
				</view>
				<view class="right-button">
					<button class="_btn" :class="{'active':active==1}" @click="myBook()">我的书籍</button>
					<button class="_btn" :class="{'active':active==2}" @click="onSell()">出售中</button>
					<button class="_btn" :class="{'active':active==3}" @click="activeLog()">活动记录</button>
				</view>
				<view class="right-con" v-if="active == 1 || active == 2">
					<view class="booklist" v-if="bookList.length>0" @click="toDetail(id)">
						<view class="item">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
						<view class="item" v-if="active == 1">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
						<view class="item" v-if="active == 1">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
						<view class="item" v-if="active == 1">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
						<view class="item">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
						<view class="item">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
					</view>
					<view class="none" v-if="bookList.length==0">
						<image class="img" src="/static/book/empty.svg"></image>
						<view class="empty">没有书籍</view>
					</view>
				</view>
				<view class="right-con" v-if="active == 3">
					<view class="right-title">
						<text class="text">名称</text>
						<text class="text other1">交易类型</text>
						<text class="text other3">交易时间</text>
						<text class="text other2">金额</text>
						<text class="text other2">买方</text>
						<text class="text other2">卖方</text>
					</view>
					<view class="right-list">
						<view class="text">
							Harry Potter and the Order of the Phoenix Collector's Edition
						</view>
						<text class="text other1">购买</text>
						<text class="text other3">02-21-2022 10:50</text>
						<text class="text other2">20 USDT</text>
						<view class="text other2">
							0x213412...
						</view>
						<view class="text other2">
							0x213413...
						</view>
					</view>
					<view class="right-list">
						<view class="text">
							Harry Potter and the Order of the Phoenix Collector's Edition
						</view>
						<text class="text other1">出售</text>
						<text class="text other3">02-21-2022 10:50</text>
						<text class="text other2">20 USDT</text>
						<view class="text other2">
							0x213412...
						</view>
						<view class="text other2">
							0x213413...
						</view>
					</view>
				</view>
			</view>
		</view>
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
				active: 1,
				bookList: [{
					img: "/static/book/detail.png",
					author: "J. K. Rowling",
					info: ""
				}]
			};
		},
		onLoad() {

		},
		methods: {
			/**
			 * 我的书籍
			 */
			myBook() {
				let that = this;
				that.active = 1;
			},
			/**
			 * 出售中
			 */
			onSell() {
				let that = this;
				that.active = 2;
			},
			/**
			 * 活动记录
			 */
			activeLog() {
				let that = this;
				that.active = 3;
			},
			/**
			 * 跳转书详情
			 * @param {Object} id
			 */
			toDetail: function(id) {
				let that = this;
				uni.navigateTo({
					url: '/pages/index/detail?id=' + id
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.mine {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		background-color: #F6F6F6;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.container {
			.right {
				.right-top {
					height: 1.2rem;
					background: #FFFFFF;
					border-radius: .15rem;
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.photo {
						vertical-align: middle;
						width: .78rem;
						height: .78rem;
						border-radius: 50%;
						margin-right: .2rem;
						margin-left: .2rem;
					}

					.name {
						font-size: 36rpx;
						color: #000000;
					}
				}

				.right-button {
					margin-top: .2rem;
					display: flex;
					justify-content: flex-start;
					align-items: center;

					._btn {
						width: 32%;
						height: .35rem;
						background: #FFFFFF;
						border-radius: .15rem;
						margin-right: 1.3%;
						color: #999999;
						font-size: 28rpx;
						border: none;
					}

					._btn:last-child {
						margin-right: 0;
					}

					uni-button:after {
						border: none;
					}

					.active {
						color: #FFFFFF;
						background: #6783E9;
					}
				}

				.right-con {
					margin-top: .2rem;
					min-height: 6.63rem;
					height: auto;
					background: #FFFFFF;
					border-radius: 15px;

					.none {
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						min-height: 4.5rem;
						height: auto;

						.img {
							width: .75rem;
							height: .65rem;
							margin-bottom: 0.15rem;
						}

						.empty {
							font-size: 28rpx;
							color: #999999;
						}
					}

					.booklist {
						text-align: left;
						width: 100%;
						display: flex;
						justify-content: flex-start;
						flex-wrap: wrap;
						font-size: 24rpx;
						padding: .2rem 0;

						.item {
							width: 20%;
							min-height: 3rem;
							height: auto;
							min-width: 0;
							cursor: pointer;
							margin: 0 0 0.2rem 4%;

							.img {
								width: 100%;
								height: 73%;
								margin-bottom: .06rem;
								border-radius: .2rem;
							}

							.info {
								line-height: .18rem;
								margin-bottom: .03rem;
								color: #000000;
							}
						}
					}

					.right-title,
					.right-list {
						height: .4rem;
						background: #ECECEC;
						border-radius: .15rem .15rem 0 0;
						line-height: .4rem;
						display: flex;
						justify-content: space-around;
						padding: 0 .15rem;

						.text {
							flex: 1.8;
							color: #999999;
						}

						.other1 {
							flex: .8;
						}

						.other2 {
							flex: .6;
						}

						.other3 {
							flex: 1;
						}
					}

					.right-list {
						color: #000000;
						background: #FFFFFF;
						font-size: 28rpx;
						margin-top: .15rem;

						.text {
							line-height: .2rem;
							color: #000000;
						}
					}
				}
			}
		}
	}
</style>
