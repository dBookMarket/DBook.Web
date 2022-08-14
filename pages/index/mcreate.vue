<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">DBook writer</view>
			<image src="/static/index/writer.svg" class="_img"></image>
			<view class="_desc">
				<view class="p">DBook provides a completely autonomous and decentralized environment
				for literary creators from all over the world. Creating on dBook allows you
				to create freely without sharing revenue, signing exclusive agreements or
				exclusivity agreements.</view>
				<view class="p">
				You can make your books into NFT by dBook and publish them on the
				market. After readers buy them, you will directly get all the profits. At
				the same time, when some readers resell your works, you can get a certain
				percentage of royalties.</view>
				<view class="p">At the same time, you can actually interact with readers through on-chain
				reviews to get their feedback on your work.</view>
			</view>
		</view>
		<view class="content_2_bg">
			<view class="_title">dBook Writer's Earnings</view>
			<view class="_desc">dBook is an open-ended gathering place for writers, where you
				can not only create freely, but also get objective benefits.</view>
			<view class="_someone">
				<view class="_item">
					<image src="/static/index/earn1.svg" class="_img"></image>
					<view class="_text">100% share of income</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn2.svg" class="_img"></image>
					<view class="_text">100% gift yield</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn3.svg" class="_img"></image>
					<view class="_text">All rights reserved</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn4.svg" class="_img"></image>
					<view class="_text">Author Subsidy Program</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn5.svg" class="_img"></image>
					<view class="_text">100% share of income</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn6.svg" class="_img"></image>
					<view class="_text">100% gift yield</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn7.svg" class="_img"></image>
					<view class="_text">All rights reserved</view>
					<view class="_text1">I am a writer</view>
				</view>
				<view class="_item">
					<image src="/static/index/earn8.svg" class="_img"></image>
					<view class="_text">Author Subsidy Program</view>
					<view class="_text1">I am a writer</view>
				</view>
			</view>
		</view>
		<view class="content_3_bg">
			<view class="_title">How am I going to be a dBook writer</view>
			<view class="_desc">dBook is an open-ended writer's gathering place, <br />
				you can complete the writer's identification through the following steps, it takes about 2-3 minutes
			</view>
			<view class="_step">
				<image src="/static/index/metamask.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP1</text>
					<text class="_infoitem">Link your wallet-MetaMask</text>
				</view>
				<view class="_detail">You need to link to MetaMask to log in first. If you have not installed
					MetaMask <text class="_color">(go to the Google WebShop) </text>
					or have never used MetaMask<text class="_color">(how-to guide)</text>,please follow the relevant
					links to install or learn.</view>
				<view class="_bottom">
					<button class="_btn">Link wallets</button>
				</view>
			</view>
			<view class="_step">
				<image src="/static/index/media.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP2</text>
					<text class="_infoitem">Connect your social media</text>
				</view>
				<view class="_detail">Once you've completed the first step, connect your social media, Twitter,
					and LinkedIn choose one of the two. Clicking on Link will ask you to send
					the specified content in your social media account, in order to verify the
					identity owner of that social media.</view>
				<view class="_bottom">
					<button class="_btn _btn1">Link Tweets</button>
				</view>
			</view>
			<view class="_step">
				<image src="/static/index/verify.svg" class="_img"></image>
				<view class="_center">
					<text class="_text">STEP3</text>
					<text class="_infoitem">Verify social media and become an author</text>
				</view>
				<view class="_detail">After completing the second step, select your associated social media method,
					click the corresponding verification button, and automatically activate the
					author's publishing permission after detecting the identity consistency.</view>
				<view class="_bottom">
					<button class="_btn _btn1">Verify LinkedIn</button>
				</view>
			</view>
		</view>
		<mobile-bottom></mobile-bottom>
	</view>
</template>

<script>
	import mobileBottom from '@/components/mobilebottom.vue';
	import mobileNav from '@/components/mobilenav.vue';
	export default {
		components: {
			mobileBottom,
			mobileNav
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.mobilebg {
		background-color: #fff;
		color: #000000;

		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 35vh;
			background-image: url('/static/index/mcreatebg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;

			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}
		.content_1_bg {
			width: 92%;
			margin: .3rem auto 0;
			overflow: hidden;
			background-color: #fff;
			text-align: center;		
			._title {
				font-size: 48rpx;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}
					
			._desc {
				width: 92%;
				margin: .2rem auto 0;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #000;
				.p{
					margin-top: .15rem;
				}
			}
			._img {
				width: 3rem;
				height: 1.6rem;
				margin-top: .2rem;
				border-radius: 20px;
			}
		}
		.content_2_bg,
		.content_3_bg {
			width: 90%;
			margin: .3rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
		
			._title {
				font-size: 48rpx;
				line-height: .35rem;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}
					
			._desc {
				width: 92%;
				margin: .2rem auto .3rem;
				line-height: .25rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #747474;
			}
		
			._someone {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: .3rem;
				font-family: PingFang SC;
		
				._item {
					width: 48%;
					background: #FFF5E5;
					text-align: center;
					margin-bottom: .12rem;
					padding-bottom: .2rem;
					._img {
						margin-top: 0.1rem;
						width: 1rem;
						height: 1rem;
					}
		
					._text {
						margin-top: .1rem;
						font-size: 30rpx;
						font-weight: 500;
					}
		
					._text1 {
						margin-top: .1rem;
						font-size: 30rpx;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}
		.content_3_bg {
			._step {
				width: 96%;
				margin: .3rem auto;
				background: #FFFFFF;
				box-shadow: 0px 3px 20px 0px rgba(36, 41, 47, 0.1000);
				border-radius: .1rem;
				text-align: center;
		
				._img {
					margin-top: .2rem;
					width: 1rem;
					height: 1rem;
				}
		
				._center {
					font-family: PingFang SC;
					margin-top: .1rem;
					._text {
						padding: .02rem .1rem;
						line-height: .23rem;
						background: #4D9BEC;
						border-radius: .05rem;
						font-size: 30rpx;
						font-weight: 500;
						color: #FFFFFF;
						text-align: center;
					}
		
					._infoitem {
						margin-left: .15rem;
						line-height: .23rem;
						font-size: 28rpx;
						font-weight: 500;
						color: #000000;
						text-align: left;
					}
				}
				._detail {
					width: 90%;
					margin: 0 auto;
					font-size: 26rpx;
					font-weight: 400;
					color: #787878;
					line-height: .23rem;
					margin-top: 0.2rem;
						
					._color {
						color: #4D74EB;
					}
				}
				._bottom {
					padding:.3rem 0;
					._btn {
						width: 90%;
						height: .45rem;
						background: #E2E2E2;
						border-radius: .05rem;
						border: none;
						font-family: PingFang SC;
						font-weight: 400;
						color: #363636;
						text-align: center;
					}
		
					._btn1 {
						background: #C8A168;
						border-radius: .05rem;
						color: #FFFFFF;
						margin-top: .2rem;
					}
				}
			}
		}
	}
</style>
