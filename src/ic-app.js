/**
 * Imesh Chamara (https://github.com/IC-Tech)
 *
 * @link      https://github.com/IC-Tech/icApp
 * @copyright Copyright © 2019-2020, Imesh Chamara. All rights reserved.
 * @license   Copyrights licensed under the MIT License.
 *
 */

const XHR = (url, call, op = {}, data = null) => {
	op = op || {}
	var xhr = new XMLHttpRequest()
	xhr.open(op.meth || (data && !op.meth ? 'POST' : 'GET'), url + (op.fresh == 0 ? '' : ((url.indexOf('?') >= 0 ? '&' : '?') + 't=' + new Date().getTime())))
	Object.keys(op.head || {}).forEach(a => xhr.setRequestHeader(a, op.head[a]))
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status != 0) {
			if(!xhr.response) return call({success: false, error: {code: 3, message: 'server did not respond'}})
			try {
				call(op.raw ? xhr.response : JSON.parse(xhr.response))
			} catch(e) {
				call({success: false, error: {code: 4, message: 'response could not parse'}})
			}
		}
	}
	xhr.onerror = () => call({success: false, error: {code: 1, message: 'network error occurred'}})
	xhr.ontimeout = () => call({success: false, error: {code: 2, message: 'request timed out'}})
	xhr.send(data)
}
const xhr = (url, op = {}, data = null) => new Promise(_ => XHR(url, _, op, data))

const pram = a => {
	a = a || location.search
	var b = {}, d, c = /(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g
	while((d = c.exec(a))) b[d[1]] = decodeURIComponent(d[2])
	return b
}

var _n = {
	b: (a,b) => {
		if(b) return a instanceof icApp ? a : new icApp(a)
		return a instanceof icApp ? a.v : a
	},
	c: a => a instanceof Array ? a : [a]
}
class icApp {
	constructor(v,cr) {
		this.v = cr ? icApp.ce(v, typeof cr == 'string' || typeof cr == 'object' ? cr : {}) : typeof v == 'string' ? icApp.qs(v) : v;
		return v == null || v == undefined ? v : this
	}
	get c() { return Array.from(this.v.classList).map(e => new icApp(e)) }
	get cl() { return this.v.classList }
	get ch() { return this.v.children }
	get chn() { return this.v.childNodes }
	ap(v) { this.v.appendChild(_n.b(v)); return this }
	chr(v) {
		if(v) {_n.c(v).forEach(a => _n.b(a,1).rem())}
		else {while(this.ch.length > 0) this.ch[0].remove()}
		return this
	}
	cla(v) { this.cl.add(..._n.c(v)); return this }
	clr(v) { this.cl.remove(..._n.c(v)); return this }
	clc(v) { return !_n.c(v).some(a => !this.cl.contains(a)) }
	get st() { return this.v.style }
	get d() { return this.v.dataset }
	set stp(v) { this.st.setProperty(v[0], v[1]) }
	get txt() { return this.v.innerText }
	set txt(v) { this.v.innerText = v }
	get html() { return this.v.innerHTML }
	set html(v) { this.v.innerHTML = v }
	ga(n) { return this.v.getAttribute(n) }
	sa(n,v) { this.v.setAttribute(n,v); return this }
	ae(n,f) { this.v.addEventListener(n,f); return this }
	get p() { return new icApp(this.v.parentElement) }
	get tag() {return this.v.tagName }
	get node() {return this.v.nodeName }
	get val() { return this.v.value }
	set val(v) { this.v.value = v }
	rem() { this.v.remove(); return this }
	get prev() { return new icApp(this.v.previousElementSibling) }
	get prevN() { return new icApp(this.v.previousSibling) }
	get next() { return new icApp(this.v.nextElementSibling) }
	get nextN() { return new icApp(this.v.nextSibling) }

	static get d() { return document }
	static qs(v) { return this.d.querySelector(v) }
	static qsa(v) { return this.d.querySelectorAll(v) }
	static ce(v,d={}) { var i=0;if([['#cdata-section', 'createCDATASection'],['#comment', 'createComment'],['#document-fragment', 'createDocumentFragment'],['#text', 'createTextNode']].some(a => a[0] == v ? [i = a[1]] : 0)) return this.d[i](d); else return this.d.createElement(v, d) }
	static cen (n,v) { return this.d.createElementNS(n,v) }
	static ds (a) { return new icApp(Object.keys(a).map(b=> `[data-${b}="${a[b]}"]`).join('')) }
}

const IC_DEV = !!((typeof __IC_DEV__ != 'undefined' && __IC_DEV__) || 0)
const _fn = {
	a: a => a || typeof a == 'string' || (typeof a == 'number' && a == 0),
	b: (a,b) => Object.keys(a).forEach(c=>b(c)),
	c: a => a instanceof Array ? a : Object.keys(a).map(b => [b, a[b]]),
	d: a => a instanceof Array ? a : [a],
}
const _elm = a => {
	if(typeof a.d == 'string') a.d = {t:'#text', _txt: a.d, nodes: 1, e:{data: a.d}}
	if(a.cr) a.cr.ap(a.e = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {}))
	if(_fn.a(a.d.t) && a.e.node.toUpperCase() != a.d.t.toUpperCase()) { a.e.p.v.replaceChild((a.t = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {})).v, a.e.v); a.e = a.t }
	if(a.d.s) {
		a.t = b => a.d.s[b] != a.e.st[b] ? [a.e.st[b] = a.d.s[b]] : 0
		//_fn.b(a.e.st, b => { try{ if(!_fn.a(a.d.s[b])) {delete a.e.st[b]} else c(b) } catch(e) {}})
		_fn.b(a.d.s, a.t)
	}
	if(a.d.at) _fn.c(a.d.at).forEach(b => _fn.a(b[1]) ? (a.e.ga(b[0]) != b[1].toString() ? a.e.sa(...b) : 0) : 0)
	if(a.d.cl) {
		a.t = []
		_fn.d(a.d.cl).forEach(b => b.toString().split(/ /g).forEach(b => a.t.push(b)))
		if(!a.e.clc(a.t)) a.e.cla(a.t)
		a.e.cl.forEach(b => a.t.indexOf(b) >= 0 ? 0 : a.e.clr(b))
	}
	if(_fn.a(a.d.html)) {a.e.html != a.d.html ? a.e.html = a.d.html : 0}
	if(_fn.a(a.d.txt)) {a.e.txt != a.d.txt ? a.e.txt = a.d.txt : 0}
	if(a.d.e) _fn.c(a.d.e).forEach(b => a.e.v[b[0]] != b[1] ? a.e.v[b[0]] = b[1] : 0)
	if(!a.d.noupdate && a.d.ch) { a.t = a.e[a.d.nodes ? 'chn' : 'ch']; a.d.ch.forEach((b,c) => !_fn.a(b) ? 0 : _elm(a.t[c] ? {e: new icApp(a.t[c]), d: b} : {cr: a.e, d: b})); while(a.d.ch.length < a.t.length) a.t[a.t.length - 1].remove() }
	if(_fn.a(a.d.id)) a.e.id = a.d.id
	return a
}
class icAppRender {
	constructor() {
		this._elm = _elm.bind(this)
		this.e = null
		this.a = false
		this.pevData = null
		if(IC_DEV) window.__IC_DEV__[this.constructor.name] = this
	}
	update(d) {
		if(this.data) {
			if(this.willUpdate) this.pevData = Object.assign({}, this.data)
			Object.assign(this.data, d)
		}
		if(this.render && (typeof this.willUpdate == 'undefined' || !this.willUpdate())) {
			var b = this.render()
			this._elm({e: this.e, d: {ch: typeof b.length == 'undefined' ? [b] : b}})
			if(this.a && this.didUpdate) this.didUpdate()
			if(!this.a) this.a = true
		}
	}
	mount(e) {
		this.e = new icApp(e)
		this.update()
		if(this.didMount) this.didMount()
	}
}

window.ic = window.ic || (() => {
	class ic {}
	return ic
})()
window.ic.XHR = XHR
window.ic.xhr = xhr
window.ic.icApp = icApp
window.ic.pram = pram
window.ic.IAR = icAppRender
export default window.ic
export { XHR, xhr, icApp, pram, icAppRender as IAR }
