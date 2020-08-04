import {XHR, xhr, icApp, pram, IAR} from './ic-app.js'

var i = window.ic || (() => {
	class ic {}
	return ic
})()
exports.XHR = i.XHR = XHR
exports.xhr = i.xhr = xhr
exports.icApp = i.icApp = icApp
exports.pram = i.pram = pram
exports.IAR = i.IAR = IAR
exports.default = window.ic = i
