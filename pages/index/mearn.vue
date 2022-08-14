<template>
	<view class="mobilebg">
		<view class="indexapp">
			<view class="newbg">
				<mobile-nav></mobile-nav>
			</view>
		</view>
		<view class="_navbtn">
			<view class="_btn" :class="{'_active':isPublish}" @click="chooseMoney(1)">Publishing money</view>
			<view class="_btn" :class="{'_active':!isPublish}" @click="chooseMoney(2)">Reading for Money</view>
		</view>
		<view class="content_1_bg" v-if="isPublish">
			<view class="_title">1、Apply to be an author</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">To maintain copyright interest<br />
							and credibility you need to <br />
							engage your social media</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn5.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Welcome to the World of Web3,
							you need to create a wallet to
							receive money</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">After verifying that you own the
							social media, you are now an
							author and can publish your
							work on dBook</view>
					</view>
				</view>
			</view>
			<view class="_title">2、Creation</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">You can create your work by
							chapter</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item">
						<view class="_font">Write anytime, anywhere,
							without any restrictions</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn6.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">One-click save draft, let creation
							everywhere</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">One-click release of works, data
							encryption, the creation of NFT,
							listed trading market in one go</view>
					</view>
				</view>
			</view>
			<view class="_title">3、Work management</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">You can see how much money
							each game makes</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
					<view class="_item"></view>
				</view>
				<view class="_center">
					<image src="/static/index/earn7.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item"></view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">You can see how much money
							each game makes</view>
					</view>
				</view>
			</view>
			<view class="_title">4、Trading market</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">You can still get royalties from
							a second hand transaction</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn8.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">The more readers buy, the more
							revenue you make</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">5、Advertising is divided into</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Fans can still provide you with
							extra tips</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn9.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">The more readers you have, the
							more advertising revenue you can get</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Comment interaction, so that
							fans understand the latest trends,
							follow more reading</view>
					</view>
				</view>
			</view>
		
		</view>
		<view class="content_1_bg" v-if="!isPublish">
			<view class="_title">1、Buy books</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">You can still get royalties from
							a second hand transaction</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn1.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Welcome to the web3 world,
							you need to create a wallet to
							receive money</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_title">2、Reading to earn</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">Please set your advertising
							preference before reading. If
							you do not set it, it will be
							configured by default
						</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn2.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Please set your advertising
							preference before reading. If
							you do not set it, it will be
							configured by default
						</view>
					</view>
					<view class="_item"></view>
				</view>
			</view>
			<view class="_info">
				<view class="_left">
					<view class="_item">
						<view class="_font">Set the advertising interval and
							calculate the revenue. If you
							don't like it, you can close it at
							any time. After closing, you
							won't get DBK incentive</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn3.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">According to personal preferences,
							set preference advertising</view>
					</view>
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">Repeat reading still pays, but at
							a much lower rate</view>
					</view>
				</view>
			</view>
		
			<view class="_title">4、Trading market</view>
			<view class="_info">
				<view class="_left">
					<view class="_item"></view>
					<view class="_item">
						<view class="_font">If the content is good and the
							audience is large, you can raise
							the price
						</view>
						<view class="_dot"></view>
						<view class="_line"></view>
					</view>
				</view>
				<view class="_center">
					<image src="/static/index/earn4.png" mode="" class="earn"></image>
				</view>
				<view class="_right">
					<view class="_item">
						<view class="_line"></view>
						<view class="_dot"></view>
						<view class="_font">It can still be sold on the market
							after reading it. In return for
							benefits
						</view>
					</view>
					<view class="_item"></view>
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
				isPublish: true
			};
		},
		methods: {
			/**
			 * 选择方式
			 * @param {Object} type
			 */
			chooseMoney(type) {
				let that = this;
				if (type == 1) {
					that.isPublish = true;
				} else if (type == 2) {
					that.isPublish = false;
				}
			}
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
			background-image: url('/static/index/mearnbg.png');
			background-repeat: no-repeat;
			background-position: center 0;
			background-size: cover;
		
			.newbg {
				width: 100%;
				margin: 0 auto;
			}
		}

		._navbtn {
			width: 96%;
			margin: .3rem auto 0;
			font-family: Alibaba PuHuiTi;
			text-align: center;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			._btn {
				cursor: pointer;
				height: .5rem;
				background: #FAFAFA;
				border: 3px solid #999999;
				font-size: 30rpx;
				font-weight: 800;
				color: #999999;
				padding: 0 .15rem;
				line-height: .5rem;
			}

			._active {
				color: #000000;
				background: #FFE1B4;
				border: 3px solid #282828;
			}
		}

		.content_1_bg {
			width: 100%;
			margin: .3rem auto 0;
			height: auto;
			overflow: hidden;
			background-color: #fff;
			text-align: center;

			._title {
				font-size: 40rpx;
				font-family: Alibaba PuHuiTi;
				font-weight: 800;
				text-align: center;
			}

			._info {
				display: flex;
				justify-content: space-between;
				width: 96%;
				margin: .3rem auto;

				._center {
					.earn {
						width: 1.45rem;
						height: 2.7rem;
					}
				}

				._left,
				._right {
					._item {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						text-align: left;
						._font {
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 400;
							color: #000000;
							padding-right: 0;
							padding-left: .05rem;
							width: .9rem;
						}
						
						._dot {
							width: 14rpx;
							height: 14rpx;
							border-radius: 50%;
							background: #282828;
						}
						
						._line {
							background: #282828;
							height: 4rpx;
							width: .1rem;
						}
					}
				}
				._left{
					._item{
						._font{
							padding-left: 0;
						}
					}
				}
			}
		}
	}
</style>
