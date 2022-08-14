<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">$100,000 grant</view>
			<view class="_desc">
				The economic cycle designed by dBook can ensure that all parties can achieve a win-win situation. <br />
				The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly internal cycle,
				<br />
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both
				parties.
			</view>
			<image src="/static/index/welcome.png" class="_welcome"></image>
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
		font-size: 30rpx;
		color: #000000;

		.indexapp {
			width: 100%;
			margin: 0 auto;
			height: 35vh;
			background-image: url('/static/index/msupportbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;

			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}
		.content_1_bg{
			width: 100%;
			margin: .3rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;
			._welcome {
				margin-top: .3rem;
				width: 3rem;
				height: 1.5rem;
			}
			._title {
				font-size: 40rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}
			
			._desc {
				line-height: .3rem;
				font-family: PingFang SC;
				font-weight: 400;
				text-align: center;
				margin-top: .2rem;
			}
		}
	}
</style>
