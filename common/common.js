export default {
	// 清除存储数据
	removeStorage: function(key) {
		uni.removeStorage({
			key: key,
			success: function(res) {
				console.log('success');
			}
		});
	},
	// 清除存储数据
	clearStorage: function() {
		try {
			uni.clearStorage();
			uni.clearStorageSync();
		} catch (e) {
			console.log("uni.clearStorage failed: " + JSON.stringify(e));
		}
	},
	//获取存储的键值
	getStorage: function(key) {
		let cacheDate = uni.getStorageSync(key);
		if (cacheDate) {
			try {
				return JSON.parse(cacheDate);
			} catch (e) {
				return cacheDate;
			}
		} else {
			return null;
		}
	},
	
	//存储键值
	setStorage: function(key, value) {
		try {
			uni.setStorageSync(key, JSON.stringify(value));
		} catch (e) {
			// error
			console.log(e);
		}
	},
}