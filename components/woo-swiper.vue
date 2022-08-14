<template>
	<div class="woo-swiper">
		<uni-icons type="back"  size="30"  color="white" class="btn tc" :style="{opacity: opacity(0)}" @click="showPre()"></uni-icons>
		<view class="tc">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="false" :interval="500000" :style="{height:height+50 +'upx'}"
			:duration="duration" :current="current" :easing-function="easing" @change="change">
				<swiper-item v-for="(i,k) in list" :key="k">
					<view class="tc">
						<image :src="i.src" mode="aspectFit" :style="{height:height+'upx', width:width+'upx'}"> </image>
						<view class="text">
							 {{i.text}}
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<uni-icons type="forward" color="white" size="30" class="btn tc" :style="{opacity: opacity(list.length - 1)}" @click="showNext()"></uni-icons>
	</div>
</template>

<script>
	export default {
			name:"woo-swiper",
			props:{
				showIndex:{
					type: Boolean,
					default: true
				},
				easing:{
					type:String,
					default:()=>{
						return 'easeInOutCubic';
					}
				},
				height:{
					type:Number,
					default:()=>{
						return 300;
					}
				},
				width:{
					type:Number,
					default:()=>{
						return 300;
					}
				},
				list:{
					type:Array,
					defualt: () => {
						return [
							{src:'https://cdn.uviewui.com/uview/demo/transition/fadeUp.png', text:"取件码:3HDKF7B4SZ"},
							{src:'https://cdn.uviewui.com/uview/demo/transition/zoom.png', text:"取件码:9KSDDF84BD"},
						]
					}
				}
			},
			data() {
				return {
					duration:500,
					current:0,
				};
			},
			computed:{
				opacity(){
					return function(current){ 
						if(current == this.current) {
							return 0.5;
						}
						return 1;
					}
				}
			},
			
			methods:{
				change(e){
					this.current = e.detail.current;
					this.$emit('change',this.current);
				},
				showPre(){
					if(this.current == 0 ) {
						this.current  = this.list.length-1
					}
					this.current--;
				},
				showNext(){
					if(this.current >= this.list.length-1 ) {
						this.current = 0;
					}
					this.current++;
				}
			}
		}
	
</script>

<style scoped lang="scss">
	.woo-swiper{
		color: black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.fwb{
			font-weight: bold;
			padding: 0 5upx;
			font-size: 2em;
		}
		.color-red{
			color: #FF4347;
		}
		.swiper{
			width: 50vw;
		}
		.btn{
			text-align: center;
			width: 30px;
			height: 30px;
			border-radius: 25upx;
			background: rgba(61,61,61,0.4000);	// border: 1px #333 solid;
			border-radius: 30px;
			line-height: 30px;
		}
		.tc{
			text-align: center;
			.text{
				font-size: 30upx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #000000;
			}
		}
	}
</style>