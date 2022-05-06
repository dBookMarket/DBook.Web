<template>
	<view class="apply">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<view class="connectWallet" v-if="status==1">
					<image class="img" src="/static/book/connectWallet.svg"></image>
					<view class="empty">请先连接钱包</view>
				</view>
				<view class="unqualified" v-if="status==2">
					<image class="img" src="/static/book/none.svg"></image>
					<view class="empty">您当前未获得入驻资格，请先填写入驻申请</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from '@/common/common.js';
	import navBar from '@/components/nav.vue'
	import left from '@/components/left.vue'
	export default {
		components: {
			navBar,
			left
		},
		data() {
			return {
				status: 3,
			};
		},
		onLoad(option) {
			let that = this;
			let address = common.getStorage('address');
			if (address) {
				that.status = 2;
			} else {
				that.status = 1;
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.apply {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.container {

			.connectWallet,
			.unqualified {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				min-height: 5.0rem;
				height: auto;

				.img {
					width: .75rem;
					height: .85rem;
					margin-bottom: 0.27rem;
				}

				.empty {
					font-size: 28rpx;
					color: #999999;
				}
			}

			.unqualified {
				.img {
					width: .77rem;
					height: .80rem;
				}
			}
		}
	}
</style>
