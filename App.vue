<script>
	export default {
		onLaunch: function() {
			// #ifdef H5  
			if (navigator.userAgent.indexOf('Mobile') === -1) {  
			  
			}  
			// #endif
			//console.log(port)
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
