<template>
	<view class="settled">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<view class="stepTitle" v-if="status==3">
					<uni-steps :options="options" :active="current" active-color="#6783E9"></uni-steps>
					<view class="stepCon" v-if="current==0">
						<view class="stepname">
							<text>D-Book介绍</text>
							<text class="min">（第一步）</text>
						</view>
						<view class="title">上传封面（必填）</view>
						<view class="upload" @click="uploadPhoto">
							<image :src="book._upimg" mode="" class="_upimg" v-if="isShow"></image>
							<image src="/static/book/cover.svg" mode="" class="cover"></image>
						</view>
						<view class="title">书籍名称（必填）</view>
						<input type="text" class="input-style" placeholder="请输入书籍名称..." />
						<view class="title">作品介绍（必填）</view>
						<textarea class="input-style _height" placeholder="请输入作品介绍..."></textarea>
						<view class="title">作者介绍（必填）</view>
						<textarea type="text" class="input-style _height" placeholder="若你是作者可以忽略此内容..."></textarea>
						<view class="title">出版商介绍（必填）</view>
						<textarea type="text" class="input-style _height" placeholder="若你是作者可以忽略此内容..."></textarea>
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
					<view class="stepCon" v-if="current==1">
						<view class="stepname">
							<text>D-Book书籍上传</text>
							<text class="min">（第二步）</text>
						</view>
						<view class="title">上传书籍（PDF格式）</view>
						<view class="upload" @click="uploadPhoto">
							<image :src="book._upimg" mode="" class="_upimg" v-if="isShow"></image>
							<image src="/static/book/cover.svg" mode="" class="cover"></image>
						</view>
						<view class="title">书籍类型（必填）</view>
						<input type="text" class="input-style" placeholder="请输入书籍名称..." />
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
					<view class="stepCon" v-if="current==2">
						<view class="stepname">
							<text>D-Book价格&版税</text>
							<text class="min">（第三步）</text>
						</view>
						<view class="title">选择区块链</view>
						<picker class="input-style" @change="bindPickerChange($event)" :value="index"
							:range="chainList">
							<view class="uni-input">{{chainList[index]}}</view>
						</picker>
						<view class="title">设置发行量</view>
						<input type="text" class="input-style" placeholder="请设置发行量..." />
						<view class="title">设置发行单价</view>
						<input type="text" class="input-style" placeholder="" />
						<view class="title"><text>设置版税</text><text>0% ~ 50%之间</text></view>
						<view class="relative">
							<input type="text" class="input-style " placeholder="" />
							<text class="unit">%</text>
						</view>
						<view class="button _btn" @click="putOn()">
							上架
						</view>
					</view>
					<view class="stepCon" v-if="current==3">
						<view class="stepname">
							<text>确认信息/上架</text>
							<text class="min">（第四步）</text>
						</view>
						<view class="title">上架后信息将不可以修改，请确认无误后点击上架。用户交易成功后D-Book会收取2.5%的手续费。</view>
						<view class="title detail" @click="openDetail">信息详情</view>
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
				</view>
				<view class="connectWallet" v-if="status==1">
					<image class="img" src="/static/book/connectWallet.svg"></image>
					<view class="empty" @click="toConnect">请先连接钱包</view>
				</view>
				<view class="unqualified" v-if="status==2">
					<image class="img" src="/static/book/none.svg"></image>
					<view class="empty">您当前未获得入驻资格，请先填写入驻申请</view>
				</view>
			</view>
		</view>
		<uni-popup ref="detailPopup" type="center" :mask-click="false">
			<view class="detailInfo">
				<view class="title">
					上架信息详情
				</view>
				<image class="closeimg" @click="close('buy')" src="/static/book/close.svg"></image>
				<view class="contitle">封面</view>
				<image class="coverimg" src="/static/book/detail.png"></image>
				<view class="contitle">书籍名称</view>
				<input type="text" class="input-style" placeholder="请输入书籍名称..." />
				<view class="contitle">作品介绍</view>
				<textarea class="input-style _height" placeholder="请输入作品介绍..."></textarea>
				<view class="contitle">作者介绍</view>
				<textarea class="input-style _height" placeholder="请输入作者介绍..."></textarea>
				<view class="contitle">出版商介绍</view>
				<textarea class="input-style _height" placeholder="请输入出版商介绍..."></textarea>
				<view class="contitle">选择区块链</view>
				<input type="text" class="input-style" value="Polygon" placeholder="请输入书籍名称..." />
				<view class="contitle">设置发行量</view>
				<input type="text" class="input-style" value="10000" />
				<view class="contitle">设置数字货币</view>
				<input type="text" class="input-style" value="USTD" />
				<view class="contitle">设置发行单价</view>
				<input type="text" class="input-style" value="20" />
				<view class="contitle">设置版税</view>
				<input type="text" class="input-style" value="20%" />
				<view class="between">0%~50%之间</view>
			</view>
		</uni-popup>
		<uni-popup ref="putPopup" type="center" :mask-click="false">
			<view class="deal">
				<image class="img1" src="/static/book/onShelf.svg"></image>
				<view @click="dealSuccuss()">上架中</view>
			</view>
		</uni-popup>
		<uni-popup ref="succussPopup" type="center">
			<view class="deal">
				<image class="img2" src="/static/book/shelf.svg"></image>
				<view>上架成功</view>
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
				index: 0,
				chainList: ['Polyaon'],
				book: {},
				isShow: false,
				current: 0,
				options: [{
					title: '介绍'
				}, {
					title: '上传书籍'
				}, {
					title: '价格&版税'
				}, {
					title: '提交'
				}],
				status: 3,
			};
		},
		methods: {
			/**
			 * 下一步
			 */
			nextStep() {
				let that = this;
				that.current = that.current + 1;
			},
			/**
			 * 信息详细
			 */
			openDetail() {
				this.$refs.detailPopup.open()
			},
			/**
			 * 关闭
			 */
			close(type) {
				let that = this;
				that.$refs.detailPopup.close()
			},
			/**
			 * 上架
			 */
			putOn(){
				let that = this;
				that.$refs.putPopup.open();
			},
			/**
			 * 交易成功
			 */
			dealSuccuss(){
				let that = this;
				that.$refs.putPopup.close();
				that.$refs.succussPopup.open();
			},
			toConnect() {
				let that = this;
				that.status = 2;
			},
			/**
			 * @param {Object} e
			 * 选择区块链
			 */
			bindPickerChange: function(e) {
				let that = this;
				console.log('picker发送选择改变，携带值为', e.detail.value)
				that.index = e.detail.value;
			},
			/**
			 * 上传
			 */
			uploadPhoto() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (chooseImageRes) => {
						console.log(chooseImageRes);
						const tempFilePaths = chooseImageRes.tempFilePaths;
						that.book.img = tempFilePaths[0];
						that.isShow = true;
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.settled {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.detailInfo {
			width: 5.5rem;
			height: 6.2rem;
			overflow-y: scroll;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .2rem .15rem;
			position: relative;
			text-align: center;
			.between{
				color: #999999;
				padding-top: .1rem;
				text-align: right;
				width: 95%;
			}
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
			.coverimg{
				width: 1.1rem;
				height: 1.4rem;
				border-radius: .1rem;
				display: block;
			}
			.contitle {
				color: #999999;
				font-size: 30rpx;
				margin: .15rem 0;
				text-align: left;
			}

			.input-style {
				width: 95%;
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
			}
		}

		.container {
			.right {
				.stepTitle {
					width: 100%;
					height: .65rem;
					padding-top: .25rem;
					background: #FFFFFF;
					border-radius: .15rem;
				}

				.stepCon {
					width: 97%;
					height: auto;
					min-height: 5.5rem;
					margin-top: .25rem;
					margin-bottom: .25rem;
					background: #FFFFFF;
					border-radius: .15rem;
					padding-left: 3%;
					padding-top: .2rem;

					.button {
						margin-bottom: .25rem;
						margin-top: .25rem;
						text-align: center;
					}

					._btn {
						width: 1.1rem;
						height: .45rem;
						background: #6783E9;
						border-radius: .24rem;
						color: #FFFFFF;
						line-height: .45rem;
					}

					.upload {
						width: 1.2rem;
						height: 1.4rem;
						background: #F8F8F8;
						border-radius: .1rem;
						text-align: center;
						margin-top: .18rem;

						.cover {
							width: .5rem;
							height: .5rem;
							margin-top: 0.4rem;
						}
					}

					.relative {
						position: relative;

						.unit {
							position: absolute;
							left: 77%;
							top: 0.16rem;
							color: #999999;
						}
					}

					.stepname {
						font-size: 36rpx;
						color: #000000;

						.min {
							color: #999999;
						}
					}

					.flex {
						display: flex;
						justify-content: space-between;
					}

					.title {
						color: #999999;
						font-size: 30rpx;
						margin-top: .25rem;
						margin-bottom: .18rem;
					}

					.detail {
						color: #6783E9;
						cursor: pointer;
					}

					.input-style {
						width: 80%;
						font-size: 30rpx;
						background: #F8F8F8;
						border-radius: .1rem;
						height: .5rem;
						line-height: .5rem;
						text-indent: .1rem;
					}

					._height {
						height: .9rem;
						line-height: .3rem;
						overflow-y: scroll;
					}
				}

				.connectWallet,
				.unqualified {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					min-height: 4.5rem;
					height: auto;

					.img {
						width: .75rem;
						height: .85rem;
						margin-bottom: 0.27rem;
					}

					.empty {
						font-size: 28rpx;
						color: #999999;
					}
				}

				.unqualified {
					.img {
						width: .77rem;
						height: .80rem;
					}
				}
			}
		}
	}
</style>
