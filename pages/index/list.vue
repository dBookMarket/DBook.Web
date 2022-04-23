<template>
	<view class="list">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right" @click="toDetail(id)">
				<k-scroll-view ref="k-scroll-view" :refreshType="refreshType" :refreshTip="refreshTip"
					:loadTip="loadTip" :loadingTip="loadingTip" :emptyTip="emptyTip" :touchHeight="touchHeight"
					:height="height" :bottom="bottom" :autoPullUp="autoPullUp" :stopPullDown="stopPullDown"
					@onPullDown="handlePullDown" @onPullUp="handleLoadMore">
					<view class="booklist">
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
						<view class="item">
							<image class="img" src="/static/book/detail.png"></image>
							<view class="info">Harry Potter and the Order of the Phoenix Collector's Edition</view>
							<text class="author">J. K. Rowling</text>
						</view>
					</view>
					<!-- 数据列表 -->
				</k-scroll-view>
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
				refreshType: 'custom',
				refreshTip: '正在下拉',
				loadTip: '获取更多数据',
				loadingTip: '正在加载中...',
				emptyTip: '--我是有底线的--',
				touchHeight: 50,
				height: 0,
				bottom: 50,
				autoPullUp: true,
				stopPullDown: true, // 如果为 false 则不使用下拉刷新，只进行上拉加载
				list: []
			};
		},
		onLoad() {

		},
		methods: {
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
			 * 下拉刷新的事件监听，事件返会一个函数参数，该函数用来在执行完下拉刷新的方法之后，关闭刷新的提示
			 * @param {Object} stopLoad
			 */
			handlePullDown(stopLoad) {
				this.list = [];
				for (var i = 0; i < 10; i++) {
					this.list.push(i);
				}
				stopLoad ? stopLoad() : '';
			},
			/**
			 * 上拉加载刷新的事件监听，事件返会一个函数参数，该函数用来在执行完加载的方法之后，
			 * 关闭加载的提示，其中，config 为 {}对象，该对象传值{isEnd:true}，代表已经没有更多数据
			 * @param {Object} stopLoad
			 */
			handleLoadMore(stopLoad) {
				const size = this.list.length;
				if (size < 100) {
					const list = [];
					for (var i = 0; i < 10; i++) {
						list.push(size + i);
					}
					this.list = this.list.concat(list);
					stopLoad ? stopLoad() : '';
				} else {
					stopLoad ? stopLoad({
						isEnd: true
					}) : '';
				}
			},
			/**
			 * 组件自带回到顶部的按钮，当然您也可以手动执行
			 */
			handleGoTop() {
				this.$refs['k-scroll-view'].goTop();
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		background-color: #F6F6F6;

		.container {
			.booklist {
				text-align: left;
				width: 100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				font-size: 24rpx;

				.item {
					width: 22%;
					height: auto;
					margin-bottom: .2rem;
					margin-right: 3%;
					min-width: 0;
					cursor: pointer;

					.img {
						width: 100%;
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
		}

	}
</style>
