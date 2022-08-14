<template>
	<view class="mobilenav">
		<view class="top">
			<image src="/static/index/more.svg" mode="" @click="toMore" class="more"></image>
			<view class="right">
				<button id="airdrop" class="button newbutton">DOWNLOAD NOW</button>
			</view>
		</view>
		<div class="menu-mask" :class="{'menu-mask__slide':more}">
			<image src="/static/index/logo.svg" mode="" @click="closeMore" class="newlogo"></image>
			<text class="menu-item" @click="toUrl('mindex')">HOME</text>
			<text class="menu-item" @click="toUrl('mexplore')">EXPLORE</text>
			<text class="menu-item" @click="toUrl('mearn')">EARN</text>
			<text class="menu-item" @click="toUrl()">WHITEPAPER</text>
			<text class="menu-item" @click="toUrl('mcreate')">CREATE</text>
			<text class="menu-item" @click="toUrl('mgants')">GRANTS</text>
		</div>
	</view>
</template>

<script>
	export default {
		name: "mobilenav",
		data() {
			return {
				more:false
			};
		},
		methods: {
			/**
			 * 显示更多
			 */
			toMore() {
				this.more = true
			},
			/**
			 * 关闭更多
			 */
			closeMore() {
				this.more = false
			},
			/**
			 * 跳转指定页面
			 * @param {Object} url
			 */
			toUrl(url){
				if(url){
					uni.navigateTo({
						url: '/pages/index/'+url
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.mobilenav {
		.top {
			align-items: center;
			display: flex;
			justify-content: space-between;
			left: 0;
			position: absolute;
			top: .18rem;
			width: 96%;
			z-index: 1001;
			margin-left: 2%;
			.more {
				width: .35rem;
				height: .35rem;
			}

			.newbutton {
				font-size: 26rpx;
				height: .35rem;
				line-height: .33rem;
				background: #7D5321;
				text-align: center;
				border-radius: .2rem;
			}
		}

		.newlogo {
			left: 0.22rem;
			top: .25rem;
			position: absolute;
			vertical-align: middle;
			width: 1.4rem;
			height: 0.4rem;
		}

		.menu-mask {
			align-items: center;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			height: 100vh;
			right: 100%;
			opacity: .9;
			padding: .5rem 0;
			position: fixed;
			top: 0;
			width: 100vw;
			z-index: 49998;
			transition: right .8s ease;
		}

		.menu-mask__slide {
			right: 0;
			transition: right .8s ease;
		}

		.menu-mask .menu-item {
			color: #000;
			font-family: Alibaba PuHuiTi;
			font-size: 60rpx;
			font-weight: 700;
			margin: .4rem 0;
		}
	}
</style>
