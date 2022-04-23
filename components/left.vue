<template>
	<view class="left">
		<view class="first">
			<image class="svg" src="/static/book/recommend.svg"></image>
			<text>推荐</text>
		</view>
		<view class="first">
			<image class="svg" src="/static/book/D-BOOK.svg"></image>
			<text>D-Books</text>
		</view>
		<view class="second">
			<view class="text" @click="toList()">全部</view>
			<view class="text">小说</view>
			<view class="text">文学</view>
			<view class="text">经营</view>
			<view class="text">社科</view>
			<view class="text">科技</view>
			<view class="text">少儿</view>
			<view class="text">杂志</view>
			<view class="text">漫画</view>
			<view class="text">网络小说</view>
		</view>
		<view class="first">
			<image class="svg" src="/static/book/publisher.svg"></image>
			<text>出版商&作者</text>
		</view>
		<view class="second">
			<view class="text" @click="toSettled()">入驻申请</view>
			<view class="text" @click="toSettled()">版权验证</view>
			<view class="text">发布D-Book</view>
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
	export default {
		name:"left",
		data() {
			return {
				
			};
		},
		methods:{
			toList(){
				uni.navigateTo({
					url: '/pages/index/list'
				})
			},
			/**
			 * 入驻申请/版权验证
			 */
			toSettled(){
				uni.navigateTo({
					url: '/pages/index/settled'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.left{
	width: 2.4rem;
	height: auto;
	background: #FFFFFF;
	border-radius: .12rem;
	padding-top: .2rem;
	font-size: 30rpx;
	font-family: Alibaba PuHuiTi;
	margin-bottom: 0.36rem;
	.first{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-weight: 400;
		color: #000000;
		line-height: .5rem;
		height: .5rem;
		cursor: pointer;
		.svg{
			width: .3rem;
			height: .3rem;
			margin-left: .2rem;
			margin-right: .1rem;
		}
	}
	
	.second{
		line-height: .4rem;
		.text{
			cursor: pointer;
			margin-left: .6rem;
			font-weight: 400;
			color: #999999;
		}
		
	}
	.active{
		color: #6783E9;
		text-decoration: underline;
	}
}
</style>
