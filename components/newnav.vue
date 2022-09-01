<template>
	<view class="newnav">
		<view class="nav">
			<view class="left" @click="toUrl('home')">
				<image src="/static/index/logo.svg" mode="" class="newlogo"></image>
			</view>
			<view class="newcenter">
				<text class="newtext" @click="toUrl('how-to-use')">HOW TO USE</text>
				<text class="newtext" @click="toUrl('create')">CREATE</text>
				<text class="newtext _marleft" @click="toUrl('marketplace')">MARKETPLACE</text>
				<text class="newtext _last" @click="toUrl('gants')">GRANTS</text>
				<text class="newtext" @click="toUrl('whitepaper')">WHITEPAPER</text>
			</view>
			<view class="right">
				<button id="airdrop" class="button newbutton" @click="downloadnow()">DOWNLOAD NOW</button>
			</view>
		</view>
		<download ref="mydownload"></download>
	</view>
</template>

<script>
	import common from '@/common/common.js';
	import download from '@/components/download.vue';
	export default {
		components: {
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
				if (url == 'create') {
					link = url + location.search;
				}
				common.toUrl(link);
			},

			/**
			 * 下载弹框
			 */
			downloadnow() {
				let that = this;
				that.$refs.mydownload.download();
			},
		}
	}
</script>

<style scoped lang="scss">
	.newnav{
		.nav {
			.newlogo {
				vertical-align: middle;
				width: 1.4rem;
				height: 0.4rem;
			}
		}
	}
</style>
