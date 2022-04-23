/**   
 * api接口统一管理
 */
import {
  post,get,put,deleteP,patch
} from '@/common/ajax.js'
import web from '@/common/web.js'

/**
 * 登录
 */
export const login = params => post('/api/v1/login', params);
/**
 * 获取登录随机数
 */
export const getNonce = params => post('/api/v1/nonce', params);
/**
 * 登出
 */
export const logout = params => post('/api/v1/logout', params);
/**
 * 个人资产
 */
export const getAssets = params => get('/api/v1/assets', params);
/**
 * 书签
 */
export const bookmarks = params => patch('/api/v1/bookmarks', params);
/**
 * 书籍
 */
export const patchIssues = params => patch('/api/v1/issues', params);
/**
 * 书籍
 */
export const postIssues = params => post('/api/v1/issues', params);
/**
 * 书籍
 */
export const getIssues = params => get('/api/v1/issues', params);
/**
 * 删除banner
 */
export const delBanners = params => deleteP('/api/v1/banners', params);
/**
 * banner
 */
export const patchBanners = params => patch('/api/v1/banners', params);
/**
 * banner
 */
export const postBanners = params => post('/api/v1/banners', params);
/**
 * banner
 */
export const getBanners = params => get('/api/v1/banners', params);
/**
 * 挂单
 */
export const delTrades = params => deleteP('/api/v1/trades', params);
/**
 * 挂单
 */
export const patchTrades = params => patch('/api/v1/trades', params);
/**
 * 挂单
 */
export const postTrades = params => post('/api/v1/trades', params);
/**
 * 挂单
 */
export const getTrades = params => get('/api/v1/trades', params);
/**
 * 购买
 */
export const postTransactions = params => post('/api/v1/transactions', params);
/**
 * 购买
 */
export const getTransactions = params => get('/api/v1/transactions', params);
/**
 * 合约
 */
export const delContracts = params => deleteP('/api/v1/contracts', params);
/**
 * 合约
 */
export const patchContracts = params => patch('/api/v1/contracts', params);
/**
 * 合约
 */
export const postContracts = params => post('/api/v1/contracts', params);
/**
 * 合约
 */
export const getContracts = params => get('/api/v1/contracts', params);
/**
 * 书籍分类
 */
export const delCategories = params => deleteP('/api/v1/categories', params);
/**
 * 书籍分类
 */
export const patchCategories = params => patch('/api/v1/categories', params);
/**
 * 书籍分类
 */
export const postCategories = params => post('/api/v1/categories', params);
/**
 * 书籍分类
 */
export const getCategories = params => get('/api/v1/categories', params);
