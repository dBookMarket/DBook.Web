<template>
	<view class="woo-swiper">
		<image src="/static/index/left.svg" class="btn tc" @click="showPre()"></image>
		<view class="tc">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="false" :interval="500000" :style="{height:height+50 +'rpx'}"
			:duration="duration" :current="current" :easing-function="easing" @change="change">
				<swiper-item v-for="(i,k) in list" :key="k">
					<view class="tc" :class="{'_float':isTeam}">
						<image :src="i.src" mode="aspectFit" :style="{height:height+'rpx', width:width+'rpx'}"> </image>
						<view class="text" v-if="!isTeam">
							 {{i.text}}
						</view>
						<view class="_text" v-if="isTeam">
							<text>{{i.text}}</text>
							<text class="_text1">{{i.minText}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<image src="/static/index/right.svg" class="btn tc" @click="showNext()"></image>
	</view>
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
						return 350;
					}
				},
				width:{
					type:Number,
					default:()=>{
						return 350;
					}
				},
				isTeam:{
					type: Boolean,
					default: false
				},
				list:{
					type:Array,
					defualt: () => {
						return []
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
					console.log('this.current',this.current)
					if(this.current == 0 ) {
						this.current  = this.list.length
					}
					this.current--;
				},
				showNext(){
					console.log('this.current',this.current)
					if(this.current > this.list.length-1 ) {
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
			padding: 0 5rpx;
			font-size: 14px;
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
			line-height: 30px;
		}
		.tc{
			text-align: center;
		}
		._float{
			position: relative;
		}
		._text {
			width: 330rpx;
			z-index: 10;
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: -175rpx;
			color: #FFFFFF;
			font-family: PingFang SC;
			font-weight: 500;
			line-height: .25rem;
			background: #000000;
			opacity: 0.7;
			text-align: left;
			font-size: 20px;
			padding-left:10px;
			display: block;
		}
		
		._text1 {
			line-height: .25rem;
			display: block;
			font-size: 15px;
			font-weight: 400;
			color: #999999;
		}
		.text{
			font-size: 16px;
		}
	}
</style>