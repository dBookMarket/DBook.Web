<template>
	<view class="list">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left @getBookData="getBookData"></left>
			</view>
			<view class="right">

				<view class="booklist" v-if="bookList.length>0">
					<view class="item" v-for="(item,index) in bookList" :key="index" @click="toDetail(item.id)">
						<image class="img" :src="item.cover_url"></image>
						<view class="info">{{item.name}}</view>
						<text class="author">{{item.author_name}}</text>
					</view>
				</view>
				<view class="none" v-if="bookList.length==0">
					<image class="img" src="/static/book/empty.svg"></image>
					<view class="empty">Books is empty</view>
				</view>
				<!-- 数据列表 -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getAllIssues
	} from '@/common/api.js';
	import common from '@/common/common.js';
	import navBar from '@/components/nav.vue'
	import left from '@/components/left.vue'
	export default {
		components: {
			navBar,
			left
		},
		data() {
			return {
				id: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				name: '',
				bookList: [],
				page_count:1,
				params:{
					page: 1,
					category:"",
					name: ""
				}
			};
		},
		onLoad(option) {
			let that = this;
			if (option.id) {
				that.id = option.id;
				that.params.category = that.id;
			}
			if (option.name) {
				that.name = option.name;
				that.params.name = that.name;
			} else {
				common.removeStorage('search');
			}
			that.getBookData(that.params);
		},
		onReachBottom() {
			console.log("我已经滚动到底部了");
			let that = this;
			if(parseInt(that.page_count)>parseInt(that.params.page)){
				that.params.page = that.params.page+1;
				console.log(that.params.page)
				that.getBookData(that.params);
			}
		},
		mounted() {
			
		},
		methods: {
			/**
			 * 获取书籍列表
			 * 
			 */
			getBookData(params) {
				let that = this;
				common.showLoading();
				getAllIssues(params).then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						that.page_count = data.page_count;
						that.params.page = data.page_number;
						that.bookList = that.bookList.concat(data.results);
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
			 * 跳转书详情
			 * @param {Object} id
			 */
			toDetail: function(id) {
				let that = this;
				uni.navigateTo({
					url: '/pages/index/detail?id=' + id
				})
			},
			/**
			 * 滚动到顶部/左边，会触发 scrolltoupper 事件
			 * @param {Object} e
			 */
			upper: function(e) {
				console.log(e)
			},
			/**
			 * 滚动到底部/右边，会触发 scrolltolower 事件
			 * @param {Object} e
			 */
			lower: function(e) {
				console.log(e)
			},
			/**
			 * 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
			 * @param {Object} e
			 */
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: " scrollTop 0"
				})
			},

		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		margin: 0 auto;
		min-width: 1440px;
		background-color: #F6F6F6;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.container {
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

			.scroll-Y {}

			.booklist {
				height: 7.5rem;
				text-align: left;
				width: 100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				font-size: 24rpx;

				.item {
					width: 440rpx;
					height: auto;
					margin-bottom: .2rem;
					margin-right: 4%;
					min-width: 0;
					cursor: pointer;

					.img {
						width: 440rpx;
						height: 500rpx;
						margin-bottom: .06rem;
						border-radius: .2rem;
					}

					.info {
						line-height: .18rem;
						height: 0.36rem;
						margin-bottom: .03rem;
						color: #000000;
					}
				}
			}
		}

	}
</style>
