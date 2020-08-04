import {XHR, xhr, icApp, pram, IAR} from './ic-app.js'

var i = window.ic || (() => {
	class ic {}
	return ic
})()
i.XHR = XHR
i.xhr = xhr
i.icApp = icApp
i.pram = pram
i.IAR = IAR
window.ic = i

export default i
export {XHR, xhr, icApp, pram, IAR}
