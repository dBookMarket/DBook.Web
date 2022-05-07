<template>
	<view class="left">
		<view class="first" @click="toRecommend()">
			<image class="svg" src="/static/book/recommend.svg"></image>
			<text>推荐</text>
		</view>
		<view class="first">
			<image class="svg" src="/static/book/D-BOOK.svg"></image>
			<text>D-Books</text>
		</view>
		<view class="second">
			<view class="text" @click="toList('',-1)">
				<text>全部</text>
			</view>
			<view class="text" v-for="(item,index) in categories" :key="index" @click="toList(item.id,index)">
				<text :class="{'active':index+1==curindex}">{{item.name}}</text>
			</view>
		</view>
		<view class="first">
			<image class="svg" src="/static/book/publisher.svg"></image>
			<text>出版商&作者</text>
		</view>
		<view class="second">
			<view class="text" @click="toApply()">入驻申请</view>
			<view class="text" @click="toApply()">版权验证</view>
			<view class="text" @click="toSettled()">发布D-Book</view>
		</view>
		<view class="first">
			<image class="svg" src="/static/book/community.svg"></image>
			<text>社区</text>
		</view>
		<view class="second">
			<view class="text">推特</view>
			<view class="text">Discord</view>
			<view class="text">Medium</view>
		</view>
	</view>
</template>

<script>
	import {
		getCategories
	} from '@/common/api.js';
	import common from '@/common/common.js';
	export default {
		name: "left",
		data() {
			return {
				curindex: -1, //当前索引
				categories: [], //分类
			};
		},
		mounted() {
			let that = this;
			if (common.getStorage('categories')) {
				that.categories = common.getStorage('categories');
			} else {
				that.initData();
			}
		},
		methods: {
			/**
			 * 推荐页
			 */
			toRecommend() {
				uni.navigateTo({
					url: '/pages/index/market'
				})
			},
			/**
			 * 初始化左边书籍分类的数据
			 */
			initData() {
				let that = this;
				common.showLoading();
				let params = {
					// parent: 1,
					// name: '',
					level: 1
				}
				getCategories(params).then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						that.categories = data;
						common.setStorage("categories", that.categories);
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
			 * 查询类别书籍
			 * @param {Object} id
			 * @param {Object} index
			 */
			toList(id, index) {
				let that = this;
				that.curindex = index + 1;
				uni.navigateTo({
					url: '/pages/index/list?id=' + id
				})
			},
			/**
			 * 发布dbook
			 */
			toSettled() {
				uni.navigateTo({
					url: '/pages/index/settled'
				})
			},
			/**
			 * 入驻申请/版权验证
			 */
			toApply() {
				uni.navigateTo({
					url: '/pages/index/apply'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.left {
		width: 2.4rem;
		height: auto;
		background: #FFFFFF;
		border-radius: .12rem;
		padding-top: .2rem;
		font-size: 30rpx;
		font-family: Alibaba PuHuiTi;
		margin-bottom: 0.36rem;

		.first {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: 400;
			color: #000000;
			line-height: .5rem;
			height: .5rem;
			cursor: pointer;

			.svg {
				width: .3rem;
				height: .3rem;
				margin-left: .2rem;
				margin-right: .1rem;
			}
		}

		.second {
			line-height: .4rem;

			.text {
				cursor: pointer;
				margin-left: .6rem;
				font-weight: 400;
				color: #999999;
			}

			.active {
				color: #6783E9;
				text-decoration: underline;
			}
		}

		.active {
			color: #6783E9;
			text-decoration: underline;
		}
	}
</style>
