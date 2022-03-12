import OSS from 'ali-oss'
import Vue from 'vue'

function getSts() {
	return new Promise(resolve => {
		uni.request({
			url: 'http://106.13.227.221:3000/sts',
			success: (res) => {
				resolve(res.data)
			}
		})
	})
}
getSts().then(res => {
	Vue.prototype.$client_avatar = new OSS({
		// yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
		region: 'oss-cn-beijing',
		// 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
		accessKeyId: res.AccessKeyId,
		accessKeySecret: res.AccessKeySecret,
		// 从STS服务获取的安全令牌（SecurityToken）。
		stsToken: res.SecurityToken,
		refreshSTSToken: async () => {
			// 向您搭建的STS服务获取临时访问凭证。
			return getSts()
		},
		// 刷新临时访问凭证的时间间隔，单位为毫秒。
		refreshSTSTokenInterval: 300000,
		// 填写Bucket名称。
		bucket: 'store-front-avatar'
	})
})
