<template>
	<view class="nav">
		<view class="left" @click="toUrl('index')">
			<image src="/static/index/logo.svg" mode="" class="newlogo"></image>
		</view>
		<view class="newcenter">
			<text class="newtext _marleft" @click="toUrl('market')">EXPLORE</text>
			<text class="newtext" @click="toUrl('earn')">EARN</text>
			<text class="newtext" @click="toUrl('whitepaper')">WHITEPAPER</text>
			<text class="newtext" @click="toUrl('create')">CREATE</text>
			<text class="newtext _last" @click="toUrl('gants')">GRANTS</text>
		</view>
		<view class="right">
			<button id="airdrop" class="button newbutton" @click="downloadnow()">DOWNLOAD NOW</button>
		</view>
		<download ref="mydownload"></download>
	</view>
</template>

<script>
	import common from '@/common/common.js';
	import download from '@/components/download.vue';
	export default {
		components:{
			download
		},
		name: "newnav",
		data() {
			return {

			};
		},
		methods: {
			/**
			 * 跳转页面
			 * @param {Object} url
			 */
			toUrl(url) {
				let link = url;
				//twitter or linkedin url's params
				if(url == 'create'){
					link = url + location.search;
				}
				common.toUrl(link);
			},
			
			/**
			 * 下载弹框
			 */
			downloadnow(){
				let that =this;
				that.$refs.mydownload.download();
			},
		}
	}
</script>

<style scoped lang="scss">
	.nav {
		top: 0;
		position: relative;
		z-index: 101;
		margin-left: 3%;
		.newlogo{
			vertical-align: middle;
			width: 1.4rem;
			height: 0.4rem;
		}
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
			margin-top: 2.3rem;
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
