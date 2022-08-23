<template>
	<view class="downloadapp">
		<uni-popup ref="downloadPopup" type="center" :is-mask-click="true">
			<view class="download">
				<image class="closeimg" @click="closePopup()" src="/static/index/close.svg"></image>
				<image src="/static/index/download.png" class="_download"></image>
				<view class="_butflex">
					<view class="_butitem">
						<image src="/static/index/apple.svg" class="_apple"></image>
						<view>
							<view class="_toptext">Download on the</view>
							<view class="_bottomtext">App Store</view>
						</view>
					</view>
					<view class="_butitem" @click="toDownload('google')">
						<image src="/static/index/google.svg" class="_google"></image>
						<view>
							<view class="_toptext">GET IT ON</view>
							<view class="_bottomtext">Google Play</view>
						</view>
					</view>
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
		name: "downloadapp",
		data() {
			return {

			};
		},
		methods: {
			/**
			 * download app
			 * @param {Object} type
			 */
			toDownload(type){
				common.toWeb(type);
			},
			/**
			 * 下载弹框
			 */
			download(){
				let that =this;
				that.$refs.downloadPopup.open('center');
			},
			/**
			 * 关闭弹框
			 */
			closePopup(){
				let that =this;
				that.$refs.downloadPopup.close();
			}
		}
	}
</script>

<style scoped lang="scss">
	.downloadapp{
		.download{
			width: 8.5rem;
			height: 3.3rem;
			background-image: url('/static/index/juxing.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
			border-radius: .2rem;
			text-align: center;
			position: relative;
			.closeimg {
				position: absolute;
				width: .33rem;
				height: .33rem;
				top: .15rem;
				right: 1.8%;
				z-index: 10;
				cursor: pointer;
			}
			._download{
				width: 7rem;
				height: .6rem;
				margin-top: .7rem;
				margin-bottom: .2rem;
			}
			._butflex{
				display: flex;
				justify-content: space-evenly;
				._butitem{
					width: 2.7rem;
					height: .9rem;
					cursor: pointer;
					background: #FFFFFF;
					border-radius: .15rem;
					font-family: Alibaba PuHuiTi;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					text-align: left;
					._apple{
						width: .43rem;
						height: .47rem;
					}
					._google{
						width: .4rem;
						height: .45rem;
					}
					._toptext{
						font-size: 15px;
						font-weight: 300;
						color: #000000;
						line-height: .25rem;
					}
					._bottomtext{
						font-size: 26px;
						font-weight: 500;
						color: #000000;
						line-height: .3rem;
					}
				}
				._qrcode{
					width: .9rem;
					height: .9rem;
					background: #FFFFFF;
					border-radius: .15rem;
					display: flex;
					justify-content: center;
					align-items: center;
					._qrcodeimg{
						width: .65rem;
						height: .65rem;
						vertical-align: middle;
					}
				}
			}
		}
	}
	
</style>
