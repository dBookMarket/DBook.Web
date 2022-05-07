<template>
	<view class="settled">
		<nav-bar></nav-bar>
		<view class="container">
			<view class="left">
				<left></left>
			</view>
			<view class="right">
				<view class="stepTitle">
					<uni-steps :options="options" :active="current" active-color="#6783E9"></uni-steps>
					<view class="stepCon" v-if="current==0">
						<view class="stepname">
							<text>D-Book介绍</text>
							<text class="min">（第一步）</text>
						</view>
						<view class="title">上传封面（必填）</view>
						<view class="upload" @click="uploadPhoto">
							<image :src="book.cover_url" mode="" class="_upimg" v-if="book.cover_url"></image>
							<image :src="book.cover" mode="" class="_upimg" v-else></image>
							<image src="/static/book/cover.svg" mode="" class="cover"></image>
						</view>
						<view class="title">书籍名称（必填）</view>
						<input maxlength="150" type="text" v-model="book.name" class="input-style"
							placeholder="请输入书籍名称..." />
						<view class="title">作品介绍（必填）</view>
						<textarea maxlength="1500" v-model="book.desc" class="input-style _height"
							placeholder="请输入作品介绍..."></textarea>
						<view class="title">作者姓名（必填）</view>
						<input maxlength="150" type="text" v-model="book.author_name" class="input-style"
							placeholder="请输入作者姓名..." />
						<view class="title">作者介绍（必填）</view>
						<textarea maxlength="1500" v-model="book.author_desc" type="text" class="input-style _height"
							placeholder="请输入作者介绍..."></textarea>
						<view class="title">出版商名称（必填）</view>
						<input maxlength="150" type="text" v-model="book.publisher_name" class="input-style"
							placeholder="请输入出版商名称..." />
						<view class="title">出版商介绍（选填）</view>
						<textarea maxlength="1500" v-model="book.publisher_desc" type="text" class="input-style _height"
							placeholder="若你是作者可以忽略此内容..."></textarea>
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
					<view class="stepCon" v-if="current==1">
						<view class="stepname">
							<text>D-Book书籍上传</text>
							<text class="min">（第二步）</text>
						</view>
						<view class="title">上传书籍（PDF格式）</view>
						<view class="upload" @click="uploadPdf">
							<image src="/static/book/cover.svg" mode="" class="cover"></image>
							<view mode="" class="_pdfName" v-if="pdfName">{{pdfName}}</view>
						</view>
						<view class="title">书籍类型（必选）</view>
						<picker class="input-style" @change="bindCategoryChange($event)" :range="categoryList"
							:value="catindex" :range-key="'text'">
							<view class="uni-input">{{categoryList[catindex].text}}</view>
						</picker>
						<view style="height: 100px;"></view>
						<view class="button _btn _marright" @click="prevStep()">
							上一步
						</view>
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
					<view class="stepCon" v-if="current==2">
						<view class="stepname">
							<text>D-Book价格&版税</text>
							<text class="min">（第三步）</text>
						</view>
						<view class="title">选择区块链</view>
						<picker class="input-style" @change="bindPickerChange($event)" :value="index"
							:range="chainList">
							<view class="uni-input">{{chainList[index]}}</view>
						</picker>
						<view class="title">设置发行量</view>
						<input v-model="book.amount" type="number" class="input-style" placeholder="请设置发行量..." />
						<view class="title">设置数字货币</view>
						<picker class="input-style" @change="bindCurrencyChange($event)" :value="cindex"
							:range="currencyList">
							<view class="uni-input">{{currencyList[cindex]}}</view>
						</picker>
						<view class="title">设置发行单价</view>
						<input v-model="book.price" type="number" class="input-style" placeholder="" />
						<view class="title"><text>设置版税</text><text>0% ~ 50%之间</text></view>
						<view class="relative">
							<input type="number" v-model="book.ratio" class="input-style " placeholder="" />
							<text class="unit">%</text>
						</view>
						<view class="button _btn _marright" @click="prevStep()">
							上一步
						</view>
						<view class="button _btn" @click="nextStep()">
							下一步
						</view>
					</view>
					<view class="stepCon" v-if="current==3">
						<view class="stepname">
							<text>确认信息/上架</text>
							<text class="min">（第四步）</text>
						</view>
						<view class="title">上架后信息将不可以修改，请确认无误后点击上架。用户交易成功后D-Book会收取2.5%的手续费。</view>
						<view class="title detail" @click="openDetail">信息详情</view>
						<view v-if="book.status=='Uploading'">
							<view class="stepInfo">
								<uni-icons color="#6783E9" type="checkbox-filled" size="28"></uni-icons>
								<text class="text">文件加密-正在进行同步加密，请等待</text>
							</view>
							<view class="stepInfo" style="margin-left: 3px;">
								<uni-icons class="loading" color="#fff" type="spinner-cycle" size="22"></uni-icons>
								<text class="text">文件待上传</text>
							</view>
						</view>
						<view v-else-if="book.status=='Uploaded'">
							<view class="stepInfo">
								<uni-icons color="#6783E9" type="checkbox-filled" size="22"></uni-icons>
								<text class="text">文件已上传</text>
							</view>
						</view>
						<view v-else-if="book.status=='Failure'">
							<view class="stepInfo">
								<uni-icons color="#999999" type="clear" size="22"></uni-icons>
								<text class="text" style="color: #999999;">文件上传失败</text>
							</view>
						</view>
						<view v-else-if="book.status=='Success'">
							<view class="stepInfo">
								<uni-icons color="#6783E9" type="checkbox-filled" size="22"></uni-icons>
								<text class="text">书籍上架成功</text>
							</view>
						</view>
						<view style="height: 180px;"></view>
						<view class="button _btn _marright" @click="prevStep()">
							上一步
						</view>
						<view class="button _btn" @click="putOn()" v-if="book.status=='Uploaded'">
							上架
						</view>
						<view class="button _btn" @click="formDataIssuesFun()"
							v-else-if="book.status=='Failure' || book.status=='Uploading'">
							下一步
						</view>
						<view class="button _btn" @click="createIssuesFun()" v-else-if="!book.id">
							下一步
						</view>
					</view>
				</view>

			</view>
		</view>
		<uni-popup ref="detailPopup" type="center" :mask-click="false">
			<view class="detailInfo">
				<view class="title">
					上架信息详情
				</view>
				<image class="closeimg" @click="close('buy')" src="/static/book/close.svg"></image>
				<view class="contitle">封面</view>
				<image class="coverimg" :src="book.cover"></image>
				<view class="contitle">书籍名称</view>
				<input type="text" v-model="book.name" class="input-style" placeholder="请输入书籍名称..." />
				<view class="contitle">作品介绍</view>
				<textarea v-model="book.desc" class="input-style _height" placeholder="请输入作品介绍..."></textarea>
				<view class="contitle">作者姓名（必填）</view>
				<input type="text" v-model="book.author_name" class="input-style" placeholder="请输入作者姓名..." />
				<view class="contitle">作者介绍（必填）</view>
				<textarea v-model="book.author_desc" type="text" class="input-style _height"
					placeholder="若你是作者可以忽略此内容..."></textarea>
				<view class="contitle">出版商名称（必填）</view>
				<input type="text" v-model="book.publisher_name" class="input-style" placeholder="请输入出版商名称..." />
				<view class="contitle">出版商介绍</view>
				<textarea v-model="book.publisher_desc" class="input-style _height"
					placeholder="请输入出版商介绍..."></textarea>
				<view class="contitle">选择区块链</view>
				<input type="text" class="input-style" value="Polygon" placeholder="请输入书籍名称..." />
				<view class="contitle">设置发行量</view>
				<input type="text" v-model="book.amount" class="input-style" />
				<view class="contitle">设置数字货币</view>
				<input type="text" class="input-style" value="USTD" />
				<view class="contitle">设置发行单价</view>
				<input type="text" v-model="book.price" class="input-style" />
				<view class="contitle">设置版税</view>
				<input type="text" v-model="book.ratio" class="input-style" />
				<view class="between">0%~50%之间</view>
			</view>
		</uni-popup>
		<uni-popup ref="putPopup" type="center" :mask-click="false">
			<view class="deal">
				<image class="img1" src="/static/book/onShelf.svg"></image>
				<view @click="dealSuccuss()">上架中</view>
			</view>
		</uni-popup>
		<uni-popup ref="succussPopup" type="center">
			<view class="deal">
				<image class="img2" src="/static/book/shelf.svg"></image>
				<view>上架成功</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		getIssuesCurrent,
		postContracts,
		putIssuesTrade,
		formDataIssues,
		getCategories
	} from '@/common/api.js';
	import common from '@/common/common.js';
	import navBar from '@/components/nav.vue';
	import left from '@/components/left.vue';
	import wallet from '@/common/wallet.js';
	import web from '@/common/web.js';
	export default {
		components: {
			navBar,
			left
		},
		data() {
			return {
				index: 0,
				cindex: 0,
				catindex: 0,
				chainList: ['Polyaon'], //网络暂时只支持polygon
				currencyList: ['USDT'], //货币只支持USDT
				categoryList: [{
					id: 0,
					text: '请选择书籍类型'
				}],
				book: {
					cover: '', //书籍封面
					cover_url: '', //书籍修改
					name: '', //书籍名称
					desc: '', //书籍描述
					author_name: '', //作者名称
					author_desc: '', //作者描述
					publisher_name: '', //出版商名称
					publisher_desc: '', //出版商描述
					amount: '', //发行数量
					price: '', //发行单价
					ratio: '', //出版商版税比例
					number: '', //issue no
					category: 0, //书籍类别
					file: '', //书籍文件
				},
				pdfName: '',
				current: 0,
				options: [{
					title: '介绍'
				}, {
					title: '上传书籍'
				}, {
					title: '价格&版税'
				}, {
					title: '提交'
				}],

			};
		},
		filters: {
			getCategory: function(type) {
				return common.getCategory(type); //书籍分类
			},
		},
		onLoad(option) {
			let that = this;
			that.getCategoryListFun();
			that.getIssuesCurrentFun();
		},
		methods: {
			/**
			 * 获取书籍分类列表
			 */
			getCategoryListFun() {
				const that = this;
				common.showLoading();
				getCategories().then(res => {
					if(res?.statusCode===200){
						const newCategoryList = res?.data.map(item => (
							{id: item.id, text: item.name}
						));
						that.categoryList = [
							...[{id: 0, text: '请选择书籍类型'}],
							...newCategoryList
						];
					}else{
						common.showModal(res);
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 上架
			 * 调用trade上架 => 
			 * 我调用合约wallet.issue()生成书籍合约  => 
			 * 在调用合约post请求到contracts api，生成合约记录
			 */
			putOn() {
				let that = this;
				let data = that.book;
				that.$refs.putPopup.open();
				putIssuesTrade(data.id).then(async res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let tradeData = res.data;
						if (tradeData.status == "Success") {
							that.dealSuccuss(); //提示上架成功
							//common.removeStorage('stepcontent');
							//common.removeStorage('current');
							//获取判断是否连接
							let provider = await wallet.connect();
							if (provider) {
								let signer = await wallet.getSigner(provider);
								if (signer) {
									let nftId = data.id; //the issue id
									let amount = parseInt(data.amount); //买入的数量
									//hex,metainfo 原数据，一个json数据可以存nft的相关数据，需要转成十六进制 
									let metadata = common.strToHexCharCode(JSON.stringify(data));
									let price = parseFloat(data.price); //买入的价格
									let ratio = parseFloat(data.ratio); //出版商版税比例
									let issue = await wallet.issue(signer, nftId, amount, metadata, price,
										ratio);
									console.log(issue);
									that.postContractsFun(issue);
								}
							}
						}
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {

				})
			},
			/**
			 * 发布流程:
			 * Step 1，获取前端返回的数据，校验数据的合法性
			 * Step 2，校验成功后，生成一条记录并返回数据到前端
			 * Step 3，前端拿到数据后，连接用户钱包获取用户授权并调用合约生成书籍合约 
			 * Step 4，调用合约api，生成合约记录
			 */
			createIssuesFun() {
				let that = this;
				let baseURL = web.host;
				let url = baseURL + '/api/v1/issues';
				const uploadTask = uni.uploadFile({
					url: url,
					header: {
						authorization: "Bearer " + common.getStorage('token')
					},
					files: [{
						'name': 'cover',
						'uri': that.book.cover
					}, {
						'name': 'file',
						'uri': that.book.file
					}],
					formData: {
						//cover: that.book.cover, //书籍封面
						name: that.book.name, //书籍名称
						desc: that.book.desc, //书籍描述
						author_name: that.book.author_name, //作者名称
						author_desc: that.book.author_desc, //作者描述
						publisher_name: that.book.publisher_name, //出版商名称
						publisher_desc: that.book.publisher_desc, //出版商描述
						amount: that.book.amount, //发行数量
						price: that.book.price, //发行单价
						ratio: that.book.ratio, //出版商版税比例
						category: that.book.category, //书籍类别
						//file: that.book.file //书籍文件
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes);
						let data = uploadFileRes.data;
						if (uploadFileRes && (uploadFileRes.statusCode == 200 || uploadFileRes.statusCode == 201)) {
							if (data) {
								that.book = data;
								that.book.publisher_name = data.publisher.name;
								that.book.publisher_desc = data.publisher.desc;
							}
						} else {
							common.showModal(data);
						}
					},
					fail: (res) => {
						common.showModal(res);
					}
				});
				uploadTask.onProgressUpdate((res) => {
					console.log('上传进度' + res.progress);
					console.log('已经上传的数据长度' + res.totalBytesSent);
					console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
				});
			},
			/**
			 * 修改书籍流程:
			 * Step 1，获取前端修改返回的数据，校验数据的合法性
			 * Step 2，校验成功后，生成一条记录并返回数据到前端
			 * Step 3，前端拿到数据后，连接用户钱包获取用户授权并调用合约生成书籍合约 
			 * Step 4，调用合约api，生成合约记录
			 */
			formDataIssuesFun() {
				let that = this;
				common.showLoading();
				let formData = new FormData();
				that.book.cover && formData.append("cover", that.book.cover); //书籍封面
				formData.append("name", that.book.name); //书籍名称
				formData.append("desc", that.book.desc); //书籍描述
				formData.append("author_name", that.book.author_name); //作者名称
				formData.append("author_desc", that.book.author_desc); //作者描述
				formData.append("publisher_name", that.book.publisher_name); //出版商名称
				formData.append("publisher_desc", that.book.publisher_desc); //出版商描述
				formData.append("amount", that.book.amount); //发行数量
				formData.append("price", that.book.price); //发行单价
				formData.append("ratio", that.book.ratio); //出版商版税比例
				formData.append("category", that.book.category); //书籍类别
				that.book.file && formData.append("file", that.book.file); //书籍文件
				var xhr = new XMLHttpRequest();
				let baseURL = web.host;
				let url = baseURL + '/api/v1/issues/' + that.book.id;
				xhr.open('PATCH', url, true);
				//回调
				xhr.onreadystatechange = function() {
					uni.hideLoading();
					console.log(xhr);
					if (xhr.readyState == 4 && xhr.status == 200) {
						let res = JSON.parse(xhr.responseText);
						console.log(res);
						if (res) {
							that.book = data;
							that.current = 3;
							that.book.publisher_name = data.publisher.name;
							that.book.publisher_desc = data.publisher.desc;
						}
					} else {
						console.log(xhr.responseText);
						//common.showModal(xhr.responseText);
					}
				}
				//设置token
				xhr.setRequestHeader("authorization", "Bearer " + common.getStorage('token') || '');
				//将formdata上传
				xhr.send(formData);
			},
			/**
			 * 查询当前上传issues的状态 status，"Uploading", "Uploaded", "Failure", "Success”
			 */
			getIssuesCurrentFun() {
				let that = this;
				common.showLoading();
				getIssuesCurrent().then(res => {
					console.log(res);
					if (res && res.statusCode === 200) {
						let data = res.data;
						if (data) {
							that.book = data;
							that.current = 3;
							that.book.publisher_name = data.publisher.name;
							that.book.publisher_desc = data.publisher.desc;
						}
						// set category
						const catindex = that.categoryList.findIndex(item => String(item.id) === String(data.category));
						that.catindex = catindex==-1? 0:catindex;
					} else {
						common.showModal(res);
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: error,
						showCancel: false
					})
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**
			 * 创建contracts合约
			 */
			postContractsFun(issue) {
				let that = this;
				let params = {
					issue: issue.id,
					address: issue.address,
					token: common.getStorage('token'),
					token_amount: 1,
					token_creteria: issue.token_creteria, //代币标准
					block_chain: that.chainList[0]
				}
				common.showLoading();
				postContracts(issue).then(res => {
					console.log(res);
					if (res && (res.statusCode === 200 || res.statusCode === 201)) {
						let data = res.data;
						
					} else {
						common.showModal('请求失败');
					}
				}).catch(error => {
					common.showModal(error);
				}).finally(() => {
					common.hideLoading(0);
				})
			},
			/**绑定学历
			 * @param {Object} e 获取的是下标 从0开始
			 * 4硕士及以上3本科2大专1中专/高中其他0其他
			 */
			bindEducationChange: function(e, item) {
				var that = this;
				var targetIndex = e.target.value + "";
				for (var a = 0; a < that.educationList.length; a++) {
					if (targetIndex == a) {
						item.EDUCATION = that.educationList[a].value;
						item.eduindex = targetIndex;
						break;
					}
				}
			},
			/**
			 * 绑定书籍分类
			 * @param {Object} e 获取的是下标 从0开始
			 */
			bindCategoryChange(e) {
				let that = this;
				let targetIndex = e.target.value;
				that.catindex = targetIndex;
				for (let a = 0; a < that.categoryList.length; a++) {
					if (targetIndex == a) {
						that.book.category = that.categoryList[a].id;
						break;
					}
				}
			},
			/**
			 * 上一步
			 */
			prevStep() {
				let that = this;
				if (that.current > 0) {
					that.current = that.current - 1;
				}
			},
			/**
			 * 检查第一步填写信息
			 */
			checkFirstStep() {
				let that = this;
				if (!that.book.cover_url&&!that.book.cover) {
					return '请上传书籍封面';
				} else if (!that.book.name) {
					return '请输入书籍名称';
				} else if (!that.book.desc) {
					return '请输入作品介绍';
				} else if (!that.book.author_name) {
					return '请输入作者姓名';
				} else if (!that.book.author_desc) {
					return '请输入作者描述';
				} else if (!that.book.publisher_name) {
					return '请输入出版商名称';
				} else {
					return null;
				}
			},
			/**
			 * 检查第二步填写信息
			 */
			checkSecondStep() {
				let that = this;
				if (!that.book.file) {
					return '请上传书籍（pdf格式）';
				} else if (!that.book.category) {
					return '请选择书籍类型';
				} else {
					return null;
				}
			},
			/**
			 * 检查第三步填写信息
			 */
			checkThirdStep() {
				let that = this;
				if (!that.book.amount) {
					return '请设置发行量';
				} else if (!that.book.price) {
					return '请设置发行单价';
				} else if (!that.book.ratio) {
					return '请设置版税';
				} else {
					return null;
				}
			},
			/**
			 * 下一步
			 */
			nextStep() {
				let that = this;
				let returnMsg = null;
				if (that.current == 0) {
					//第一步
					returnMsg = that.checkFirstStep();
					if (returnMsg) {
						uni.showModal({
							title: '提示',
							content: returnMsg,
							showCancel: false
						})
						return false;
					}
				} else if (that.current == 1) {
					//第二步
					returnMsg = that.checkSecondStep();
					if (returnMsg) {
						uni.showModal({
							title: '提示',
							content: returnMsg,
							showCancel: false
						})
						return false;
					}
				} else if (that.current == 2) {
					//第二步
					returnMsg = that.checkThirdStep();
					if (returnMsg) {
						uni.showModal({
							title: '提示',
							content: returnMsg,
							showCancel: false
						})
						return false;
					}
				}
				that.current = that.current + 1;
				common.setStorage("current", that.current);
				common.setStorage("stepcontent", that.book);
			},
			/**
			 * 信息详细
			 */
			openDetail() {
				this.$refs.detailPopup.open()
			},
			/**
			 * 关闭
			 */
			close(type) {
				let that = this;
				that.$refs.detailPopup.close()
			},

			/**
			 * 交易成功
			 */
			dealSuccuss() {
				let that = this;
				that.$refs.putPopup.close();
				that.$refs.succussPopup.open();
			},

			/**
			 * @param {Object} e
			 * 选择区块链
			 */
			bindPickerChange: function(e) {
				let that = this;
				console.log('picker发送选择改变，携带值为', e.detail.value)
				that.index = e.detail.value;
			},
			/**
			 * 设置数字货币
			 * @param {Object} e
			 */
			bindCurrencyChange: function(e) {
				let that = this;
				console.log('picker发送选择改变，携带值为', e.detail.value)
				that.cindex = e.detail.value;
			},
			/**
			 * 上传图片
			 */
			uploadPhoto() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (chooseImageRes) => {
						console.log(chooseImageRes);
						const tempFilePaths = chooseImageRes.tempFilePaths;
						if (that.book.id) {
							that.book.cover = chooseImageRes.tempFiles[0];
						} else {
							that.book.cover = tempFilePaths[0];
						}
						that.book.cover_url = tempFilePaths[0];
					}
				});
			},
			/**
			 * 上传pdf
			 */
			uploadPdf() {
				let that = this;
				uni.chooseFile({
					count: 1, //默认100
					extension: ['.pdf'],
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						console.log(res);
						if (that.book.id) {
							that.book.file = res.tempFiles[0];
						} else {
							that.book.file = tempFilePaths[0];
						}
						that.pdfName = res.tempFiles[0].name;
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.settled {
		width: 100%;
		margin: 0 auto;
		min-width: 1280px;
		font-family: Alibaba PuHuiTi;
		font-weight: 400;

		.detailInfo {
			width: 5.5rem;
			height: 6.2rem;
			overflow-y: scroll;
			background: #FFFFFF;
			border-radius: .15rem;
			padding: .2rem .15rem;
			position: relative;
			text-align: center;

			.between {
				color: #999999;
				padding-top: .1rem;
				text-align: right;
				width: 95%;
			}

			.title {
				line-height: .24rem;
				font-size: 32rpx;
				font-family: Alibaba PuHuiTi;
				color: #000000;
			}

			.closeimg {
				position: absolute;
				width: .25rem;
				top: .2rem;
				right: 1.8%;
				z-index: 10;
				height: .25rem;
				cursor: pointer;
			}

			.coverimg {
				width: 1.1rem;
				height: 1.4rem;
				border-radius: .1rem;
				display: block;
			}

			.contitle {
				color: #999999;
				font-size: 30rpx;
				margin: .15rem 0;
				text-align: left;
			}

			.input-style {
				width: 95%;
				font-size: 30rpx;
				background: #F8F8F8;
				border-radius: .1rem;
				height: .5rem;
				text-align: left;
				line-height: .5rem;
				text-indent: .1rem;
			}

			._height {
				height: .9rem;
				line-height: .3rem;
				overflow-y: scroll;
			}
		}

		.container {
			.right {
				.stepTitle {
					width: 100%;
					height: .65rem;
					padding-top: .25rem;
					background: #FFFFFF;
					border-radius: .15rem;
				}

				.stepCon {
					width: 97%;
					height: auto;
					min-height: 5.5rem;
					margin-top: .25rem;
					margin-bottom: .25rem;
					background: #FFFFFF;
					border-radius: .15rem;
					padding-left: 3%;
					padding-top: .2rem;

					.button {
						margin-bottom: .25rem;
						margin-top: .25rem;
						text-align: center;
					}

					._btn {
						width: 1.1rem;
						height: .45rem;
						background: #6783E9;
						border: 1px solid #6783E9;
						border-radius: .24rem;
						color: #FFFFFF;
						line-height: .45rem;
					}

					._marright {
						margin-right: .5rem;
						background: #FFFFFF;
						color: #6783E9;
						border: 1px solid #6783E9;
					}

					.upload {
						width: 1.2rem;
						height: 1.4rem;
						background: #F8F8F8;
						border-radius: .1rem;
						text-align: center;
						margin-top: .18rem;
						cursor: pointer;
						position: relative;

						.cover {
							width: .5rem;
							height: .5rem;
							margin-top: 0.4rem;
						}

						._upimg {
							width: 1.2rem;
							height: 1.4rem;
							position: absolute;
							z-index: 10;
							left: 0;
						}
					}

					.relative {
						position: relative;

						.unit {
							position: absolute;
							left: 77%;
							top: 0.16rem;
							color: #999999;
						}
					}

					.stepname {
						font-size: 36rpx;
						color: #000000;

						.min {
							color: #999999;
						}
					}

					.stepInfo {
						line-height: 80rpx;
						font-size: 30rpx;
						color: #6783E9;

						.text {
							padding-left: 30rpx;
							vertical-align: top;
						}

						.loading {
							color: #ffffff;
							background: #999999;
							border-radius: 50%;
						}
					}

					.flex {
						display: flex;
						justify-content: space-between;
					}

					.title {
						color: #999999;
						font-size: 30rpx;
						margin-top: .25rem;
						margin-bottom: .18rem;
					}

					.detail {
						color: #6783E9;
						cursor: pointer;
					}

					.input-style {
						width: 80%;
						font-size: 30rpx;
						background: #F8F8F8;
						border-radius: .1rem;
						height: .5rem;
						line-height: .5rem;
						text-indent: .1rem;
					}

					._height {
						height: .9rem;
						line-height: .3rem;
						overflow-y: scroll;
					}
				}
			}
		}
	}
</style>
