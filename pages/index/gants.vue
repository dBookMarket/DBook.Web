<template>
	<view class="bg">
		<view class="indexapp">
			<view class="newbg">
				<new-nav></new-nav>
			</view>
		</view>
		<view class="content_1_bg">
			<view class="_title">$100,000 grant</view>
			<view class="_desc">
				The economic cycle designed by dBook can ensure that all parties can achieve a win-win situation. <br/>
				The ghostwriter DBK is interspersed in the whole economic system to achieve an orderly internal cycle, <br/>
				and the exchange ratio between DBK and US dollar is balanced through the dynamic capital pool of both parties.
			</view>
			<image src="/static/index/welcome.png" class="_welcome"></image>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import bottom from '@/components/newbottom.vue';
	import newNav from '@/components/newnav.vue';
	export default {
		components: {
			bottom,
			newNav
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.bg {
		background-color: #fff;
		font-size: 30rpx;
		color: #000000;

		.indexapp {
			width: 100%;
			margin: 0 auto;height: 7.68rem;
			background-image: url('/static/index/supportbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
			
			.newbg{
				width: 100%;
				margin: 0 auto;
			}
		}
		.content_1_bg{
			width: 90%;
			margin: .65rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;
			._welcome {
				margin-top: .5rem;
				width: 12.1rem;
				height: 6.4rem;
			}
			._title {
				font-size: 100rpx;
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
