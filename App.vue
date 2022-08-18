<script>
	export default {
		onLaunch: function() {
			// #ifdef H5  
			console.log("screen",screen.width);
			console.log('document.body.clientWidth',document.body.clientWidth)
			//如果屏幕分辨率的宽度小1024 和网页可见区域宽 则是pc
			/* if (screen.width > 1024 && document.body.clientWidth > 1024) {  
			   uni.navigateTo({
			   	url: '/pages/index/index'
			   })
			}else if(screen.width <= 1024 || document.body.clientWidth <= 1024){
				uni.navigateTo({
					url: '/pages/index/mindex'
				})
			} */
			// #endif
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './css/index.css';
	.yyzCanvas {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 200000;
		background-color: #24180e;
		opacity: 1;
	}
	uni-page-wrapper{
		background-color: #ffffff;
	}
	._info {
		display: flex;
		justify-content: space-around;
		width: 75%;
		margin: .5rem auto;

		._center {
			.book {
				width: 3rem;
				height: 3.2rem;
			}
		}

		._left,
		._right {
			flex: 1;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			align-items: flex-end;

			._item {
				display: flex;
				justify-content: flex-end;
				align-items: center;

				._font {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #000000;
					padding-right: .2rem;
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
					width: 1rem;
				}
			}
		}

		._right {
			align-items: flex-start;

			._item {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}

			._font {
				padding-left: .2rem;
			}
		}
	}
</style>
