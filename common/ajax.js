i// 引入 uni-ajax 模块
mport ajax from '@/uni_modules/u-ajax/js_sdk'
import web from '@/common/web.js'
let baseURL = web.host;
uni.setStorageSync('baseURL', JSON.stringify(baseURL));
//获取token
const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('token')
		if (token) {

		} else {
			console.log('获取不到token')
		}
	} catch (e) {
		console.log(e)
		//TODO handle the exception
	}
	return token
}
/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		 console.log("请求地址：" + req.url, req.data || req.params)
	}
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	if (process.env.NODE_ENV === 'development') {
		console.log(`${res.config.url}响应结果：`, res)
	}
}

// 创建自定义接口服务实例
const http = ajax.create({
	baseURL: baseURL,
	timeout: 60000, // 不可超过 manifest.json 中配置 networkTimeout的超时时间
	// #ifdef H5
	withCredentials: true,
	// #endif
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		//'X-Requested-With': 'XMLHttpRequest',
	},
})
// 添加请求拦截器
http.interceptors.request.use(
	config => {
		config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
		// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
		const token = getTokenStorage();
		token && (config.header['authorization'] = "Bearer"+token)
		//token && (config.headers.token = token);
		_reqlog(config);

		return config;
	},
	error => {
		return Promise.error(error);
	})

// 添加响应拦截器 在请求之后拦截
http.interceptors.response.use(response => {
	_reslog(response);

	return response
}, err => {
	if (err && err.response) {
		switch (err.response.status) {
			case 301:
				err.message = '请求的数据具有新的位置且更改是永久的';
				break
			case 302:
				err.message = '请求的数据临时具有不同 URI';
				break
			case 304:
				err.message = '未按预期修改文档';
				break
			case 305:
				err.message = '必须通过代理来访问请求的资源';
				break
			case 400:
				err.message = '请求中有语法问题，或不能满足请求';
				break
			case 402:
				err.message = '所使用的模块需要付费使用';
				break
			case 403:
				err.message = '当前操作没有权限';
				break
			case 404:
				err.message = '服务器找不到给定的资源';
				break
			case 407:
				err.message = '客户机首先必须使用代理认证自身';
				break
			case 415:
				err.message = '请求类型不支持，服务器拒绝服务';
				break
			case 417:
				err.message = '未绑定登录账号，请使用密码登录后绑定';
				break
			case 426:
				err.message = '用户名不存在或密码错误';
				break
			case 429:
				err.message = '请求过于频繁';
				break
			case 500:
				err.message = '服务器内部错误，无法完成请求';
				break
			case 501:
				err.message = '服务不支持请求';
				break
			case 502:
				err.message = '网络错误，服务器接收到上游服务器无效响应';
				break
			case 503:
				err.message = '服务器无法处理请求';
				break
			case 504:
				err.message = '网络请求超时';
				break
			default:
				err.message = '系统未知错误，请反馈给管理员';
				break
		}
		return Promise.reject(err.message)
	} else {
		console.log('连接服务器失败!' + err);
		/* uni.showModal({
			title: '提示',
			content: err,
			showCancel: false
		}) */
	}
})
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		http.post(url, params).then(res => {
			resolve(res);
			if (res.statusCode != 200) {
				reject('失败');
			} else {
				resolve(res);
			}
		}).catch(error => {
			reject(error);
		})
	})
}
/** 
 * patch方法，对应patch请求 
 * 该请求是一个局部更新，后端仅更新接收到的字段
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function patch(url, params) {
	return new Promise((resolve, reject) => {
		http.patch(url, params).then(res => {
			resolve(res);
			if (res.statusCode != 200) {
				reject('失败');
			} else {
				resolve(res);
			}
		}).catch(error => {
			reject(error);
		})
	})
}

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		http.get(url, params).then(res => {
			resolve(res);
			if (res.statusCode != 200) {
				reject('失败');
			} else {
				resolve(res);
			}
		}).catch(error => {
			reject(error);
		})
	})
}
/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 */
export function put(url, params) {
	console.log(url)
	return new Promise((resolve, reject) => {
		http.put(url, params).then(res => {
			resolve(res);
			if (res.statusCode != 200) {
				reject('失败');
			} else {
				resolve(res);
			}
		}).catch(error => {
			reject(error);
		})
	})
}
/** 
 * deleteP方法，对应deleteP请求 
 * @param {String} url [请求的url地址] 
 */
export function deleteP(url, params) {
	return new Promise((resolve, reject) => {
		http.delete(url, params).then(res => {
			resolve(res);
			if (res.statusCode != 200) {
				reject('失败');
			} else {
				resolve(res);
			}
		}).catch(error => {
			reject(error);
		})
	})
}

export function formPost(url, params) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url, // 请求接口
			data: params, // 发送参数
			method: "POST", // 参数类型
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			}, // 请求头
			dataType: 'json', // 返回数据格式
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
		})
	})
}
