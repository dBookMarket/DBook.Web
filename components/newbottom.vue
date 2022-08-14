<template>
	<view class="bottom">
		<view class="_item">
			<image src="/static/index/twitter.svg" mode="" class="img"></image>
			<image src="/static/index/discord.svg" mode="" class="img"></image>
			<image src="/static/index/youtube.svg" mode="" class="img"></image>
			<image src="/static/index/GitHub.svg" mode="" class="img"></image>
			<button id="airdrop" class="button dbutton">Download the APP</button>
		</view>
		<view class="_info">
			<image src="/static/index/email.svg" mode="" class="_email"></image>
			<text class="_text">Developers：dev@ddid.io</text>
			<text>Author consultation：dev@ddid.io</text>
		</view>
		<view class="_info">
			<text class="_text">Copyright DDID LTD.2022 - All Rights Reserved</text>
			|
			<text class="_text1">Powered by DDID Laboratories Limited</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newbottom",
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.bottom {
		width: 100%;
		margin: .65rem auto 0;
		height: 2.4rem;
		overflow: hidden;
		background-image: url(/static/index/bottombg.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-origin: border-box;

		._info {
			width: 40%;
			margin: .33rem auto 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30rpx;
			font-family: ExtraLight;
			font-weight: 400;

			._email {
				width: .22rem;
				height: .22rem;
				margin-right: .2rem;
			}

			._text {
				margin-right: .2rem;
			}

			._text1 {
				margin-right: 0rem;
				margin-left: .2rem;
			}
		}

		._item {
			width: 40%;
			margin: .5rem auto 0;
			display: flex;
			justify-content: center;
			align-items: center;

			.img {
				width: .31rem;
				height: .31rem;
				margin-right: 7%;
			}

			.img:last-child {
				margin-right: 0;
			}

			.dbutton {
				margin: 0;
				width: auto;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 400;
				background: #42392B;
				border-radius: 0.1rem;
				color: #FFE1B4;
			}
		}
	}
</style>
