<template>
	<view class="mdoanload">
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
				<view class="_butflex" @click="toDownload('google')">
					<view class="_butitem">
						<image src="/static/index/google.svg" class="_google"></image>
						<view>
							<view class="_toptext">GET IT ON</view>
							<view class="_bottomtext">Google Play</view>
						</view>
					</view>
				</view>
				<view class="_butflex">
					<view class="_qrcode" @click="isqrcode=true">
						<image src="/static/index/qrcode.png" class="_qrcodeimg"></image>
						<view class="_bigqrcode" :class="{'isqrcode':isqrcode}">
							<image src="/static/index/qrcode.png" class="_qrcodepng"></image>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import common from '@/common/common.js';
	export default {
		name: "mdoanload",
		data() {
			return {
				isqrcode:false
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
			cursor: pointer;
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
				position: relative;
				._qrcodeimg{
					width: .32rem;
					height: .32rem;
					vertical-align: middle;
				}
				._bigqrcode{
					position: absolute;
					display: none;
					top: .82rem;
					left: 50%;
					margin-left: -.85rem;
					z-index: 10000;
					._qrcodepng{
						border-radius: .1rem;
						width: 1.5rem;
						height: 1.5rem;
						padding: .1rem;
						background-color: #FFFFFF;
					}
				}
				.isqrcode{
					display: block;
				}
			}
		}
	}
	
</style>
