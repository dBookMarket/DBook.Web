<template>
	<view class="mobilenav">
		<view class="top">
			<image src="/static/index/more.svg" mode="" @click="toMore" class="more"></image>
			<view class="right">
				<button id="airdrop" class="button newbutton" @click="download()">DOWNLOAD NOW</button>
			</view>
		</view>
		<div class="menu-mask" :class="{'menu-mask__slide':more}">
			<image src="/static/index/logo.svg" mode="" @click="closeMore" class="newlogo"></image>
			<text class="menu-item" @click="toUrl('mindex')">HOME</text>
			<text class="menu-item" @click="toUrl('mexplore')">EXPLORE</text>
			<text class="menu-item" @click="toUrl('mearn')">EARN</text>
			<text class="menu-item" @click="toUrl('whitepaper')">WHITEPAPER</text>
			<text class="menu-item" @click="toUrl('mcreate')">CREATE</text>
			<text class="menu-item" @click="toUrl('mgants')">GRANTS</text>
		</div>
		<uni-popup ref="downloadPopup" type="center" :is-mask-click="true">
			<view class="download">
				<image src="/static/index/download.png" class="_download"></image>
				<view class="_butflex">
					<view class="_butitem">
						<image src="/static/index/apple.svg" class="_apple"></image>
						<view>
							<view class="_toptext">Download on the</view>
							<view class="_bottomtext">App Store</view>
						</view>
					</view>
				</view>
				<view class="_butflex">
					<view class="_butitem">
						<image src="/static/index/google.svg" class="_google"></image>
						<view>
							<view class="_toptext">GET IT ON</view>
							<view class="_bottomtext">Google Play</view>
						</view>
					</view>
				</view>
				<view class="_butflex">
					<view class="_qrcode">
						<image src="/static/index/qrcode.svg" class="_qrcodeimg"></image>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import common from '@/common/common.js';
	export default {
		name: "mobilenav",
		data() {
			return {
				more:false
			};
		},
		methods: {
			/**
			 * 下载弹框
			 */
			download(){
				let that =this;
				that.$refs.downloadPopup.open('center');
			},
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
				common.toUrl(url);
			}
		}
	}
</script>

<style scoped lang="scss">
	.mobilenav {
		width: 100%;
		.download{
			width: 3.4rem;
			height: auto;
			background-image: url('/static/index/juxing.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
			border-radius: .2rem;
			text-align: center;
			position: relative;
			padding-bottom: 0.2rem;
			._download{
				width: 2.6rem;
				height: .22rem;
				margin-top: .3rem;
				margin-bottom: .2rem;
			}
			
			._butflex{
				display: flex;
				justify-content: center;
				align-items: center;
				._butitem{
					width: 1.6rem;
					height: .45rem;
					background: #FFFFFF;
					border-radius: .15rem;
					font-family: Alibaba PuHuiTi;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					text-align: left;
					margin-top: 0.15rem;
					._apple{
						width: .21rem;
						height: .23rem;
					}
					._google{
						width: .2rem;
						height: .22rem;
					}
					._toptext{
						font-size: 12px;
						font-weight: 300;
						color: #000000;
					}
					._bottomtext{
						font-size: 16px;
						font-weight: 500;
						color: #000000;
					}
				}
				._qrcode{
					width: .45rem;
					height: .45rem;
					line-height: .45rem;
					background: #FFFFFF;
					border-radius: .15rem;
					margin-top: 0.15rem;
					._qrcodeimg{
						width: .32rem;
						height: .32rem;
						vertical-align: middle;
					}
				}
			}
		}
		
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
				font-size: 16px;
				height: .35rem;
				line-height: .35rem;
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
			font-size: 30px;
			font-weight: 700;
			margin: .4rem 0;
		}
	}
</style>
