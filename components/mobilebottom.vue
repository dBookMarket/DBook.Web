<template>
	<view class="bottom">
		<view class="_item">
			<image @click="toWeb('twitter')" src="/static/index/twitter.svg" mode="" class="img"></image>
			<image @click="toWeb('discord')" src="/static/index/discord.svg" mode="" class="img"></image>
			<image @click="toWeb('youtube')" src="/static/index/youtube.svg" mode="" class="img"></image>
			<image @click="toWeb('github')" src="/static/index/GitHub.svg" mode="" class="img"></image>
		</view>
		<view class="_item">
			<button id="airdrop" class="button dbutton" @click="downloadnow()">Download the APP</button>
		</view>
		<view class="_info">
			<image src="/static/index/email.svg" mode="" class="_email"></image>
		</view>
		<view class="_info">
			<text class="_text">Developers：dev@ddid.io</text>
		</view>
		<view class="_info">
			<text class="_text">Author consultation：authors@dbookmarket.com</text>
		</view>
		<view class="_info _info1">
			<text class="_text">Powered by DDID Laboratories Limited</text>
		</view>
		<view class="_info _info2">
			<text class="_text">Copyright DDID LTD.2022 - All Rights Reserved</text>
		</view>
		<mdownload ref="mydownload"></mdownload>
	</view>
</template>

<script>
	import mdownload from '@/components/mdownload.vue';
	import common from '@/common/common.js';
	export default {
		components:{
			mdownload
		},
		name:"mobilebottom",
		data() {
			return {
				
			};
		},
		methods: {
			/**
			 * 下载弹框
			 */
			downloadnow(){
				let that =this;
				that.$refs.mydownload.download();
			},
			/**
			 * 跳转外部连接
			 * @param {Object} name
			 */
			toWeb(name){
				common.toWeb(name);
			}
		}
	}
</script>

<style scoped lang="scss">
	.bottom {
		width: 100%;
		margin: .3rem auto 0;
		overflow: hidden;
		background-image: url('/static/index/mbobg.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-origin: border-box;
		
		._info {
			margin: .1rem auto 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 15px;
			font-family: ExtraLight;
			font-weight: 400;

			._email {
				width: .22rem;
				height: .22rem;
			}

			._text {
				font-size: 14px;
			}

			._text1 {
				margin-right: 0rem;
				margin-left: .2rem;
			}
		}
		._info1{
			width: 100%;
			max-width: 375px;
			text-align: center;
			margin-top: .25rem;
			._text{
				color: #222;
				font-size: 12px;
			}
		}
		._info2{
			width: 100%;
			max-width: 375px;
			text-align: center;
			margin-bottom: .2rem;
			._text{
				color: #222;
				font-size: 12px;
			}
		}
		._item {
			margin: .2rem auto;
			display: flex;
			justify-content: center;
			align-items: center;

			.img {
				width: .30rem;
				height: .30rem;
				margin-right: 7%;
			}

			.img:last-child {
				margin-right: 0;
			}

			.dbutton {
				margin: 0;
				width: auto;
				font-size: 16px;
				font-family: PingFang SC;
				font-weight: 400;
				background: #42392B;
				border-radius: 0.1rem;
				color: #FFE1B4;
			}
		}
	}
</style>
