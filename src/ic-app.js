const XHR = (url, call, op = {}, data = null) => {
	op = op || {}
	var xhr = new XMLHttpRequest()
	xhr.open(op.meth || (data && !op.meth ? 'POST' : 'GET'), url + (op.fresh == 0 ? '' : ((url.indexOf('?') >= 0 ? '&' : '?') + 't=' + new Date().getTime())))
	Object.keys(op.head || {}).forEach(a => {xhr.setRequestHeader(a, op.head[a])})
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
	xhr.onerror = () => {call({success: false, error: {code: 1, message: 'network error occurred'}})}
	xhr.ontimeout = () => {call({success: false, error: {code: 2, message: 'request timed out'}})}
	xhr.send(data)
}
const xhr = (url, op = {}, data = null) => new Promise(_ => {XHR(url, _, op, data)})

const pram = a => {
	if(typeof a == 'object') return Object.keys(a).map(b => b + '=' + encodeURIComponent(a[b].toString())).join('&')
	var b = {}, c = /(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g, d
	while(d = c.exec(a)) {
		if(!b[d[1]]) b[d[1]] = decodeURIComponent(d[2])
		else {
			if(!(b[d[1]] instanceof Array)) b[d[1]] = [b[d[1]]]
			b[d[1]].push(decodeURIComponent(d[2]))
		}
	}
	return b
}

const _nb = (a,b) => b ? (a instanceof icApp ? a : new icApp(a)) : (a instanceof icApp ? a.v : a),
_nc = a => a instanceof Array ? a : [a],
_nd = a => Object.keys(a).map(b=> `[data-${b}="${a[b]}"]`).join('')
class icApp {
	constructor(v,cr) {
		this.v = cr ? icApp.ce(v, typeof cr == 'string' || typeof cr == 'object' ? cr : {}) : typeof v == 'string' ? icApp.qs(v) : v;
		return v == null || v == undefined ? v : this
	}
	get c() { return Array.from(this.ch).map(e => new icApp(e)) }
	get cl() { return this.v.classList }
	get ch() { return this.v.children }
	get chn() { return this.v.childNodes }
	ap(v) { this.v.appendChild(_nb(v)); return this }
	chr(v) {
		if(v) {_nc(v).forEach(a => _nb(a,1).rem())}
		else {while(this.ch.length > 0) this.ch[0].remove()}
		return this
	}
	cla(v) { this.cl.add(..._nc(v)); return this }
	clr(v) { this.cl.remove(..._nc(v)); return this }
	clc(v) { return !_nc(v).some(a => !this.cl.contains(a)) }
	get st() { return this.v.style }
	get d() { return this.v.dataset }
	set stp(v) { this.st.setProperty(v[0], v[1]) }
	get txt() { return this.v.innerText }
	set txt(v) { this.v.innerText = v }
	get html() { return this.v.innerHTML }
	set html(v) { this.v.innerHTML = v }
	ga(n) { return this.v.getAttribute(n) }
	ra(n) { this.v.removeAttribute(n); return this }
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
	static qs(v,e) { return (e || this.d).querySelector(v) }
	static qsa(v,e) { return (e || this.d).querySelectorAll(v) }
	static ce(v,d={}) { var i=0;if([['#cdata-section', 'createCDATASection'],['#comment', 'createComment'],['#document-fragment', 'createDocumentFragment'],['#text', 'createTextNode']].some(a => a[0] == v && [i = a[1]])) return this.d[i](d); else return this.d.createElement(v, d) }
	static cen(n,v) { return this.d.createElementNS(n,v) }
	static ds(a) { return new icApp(_nd(a)) }
}

const _Na = a => a || typeof a == 'string' || (typeof a == 'number' && a == 0),
_Nb = (a,b) => Object.keys(a).forEach(c=>{b(c)}),
_Nc = a => a instanceof Array ? a : Object.keys(a).map(b => [b, a[b]]),
_Nd = a => a instanceof Array ? a : [a],
_Ne = a => a === 0 || a === false
const _elm = a => {
	if(typeof a.d == 'string') a.d = {t:'#text', _txt: a.d, nodes: 1, e:{data: a.d}}
	if(a.cr) a.cr.ap(a.e = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {}))
	if(_Na(a.d.t) && a.e.node.toUpperCase() != a.d.t.toUpperCase()) { a.e.p.v.replaceChild((a.t = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {})).v, a.e.v); a.e = a.t }
	if(a.d.s) _Nb(a.d.s, b => {if(a.d.s[b] != a.e.st[b]) a.e.st[b] = a.d.s[b]})
	if(a.d.at) _Nc(a.d.at).forEach(b => {b[1] === undefined ? a.e.ra(b[0]) : (_Na(b[1]) ? (a.e.ga(b[0]) != b[1].toString() ? a.e.sa(...b) : 0) : 0)})
	if(a.d.d) _Nc(a.d.d).forEach(b => {if(b[1].toString() != a.e.d[b[0]]) a.e.d[b[0]] = b[1].toString()})
	if(a.d.cl) {
		a.t = []
		_Nd(a.d.cl).forEach(b => {b.toString().split(' ').forEach(b => {a.t.push(b)})})
		if(!a.e.clc(a.t)) a.e.cla(a.t)
		a.e.cl.forEach(b => {a.t.indexOf(b) == -1 && a.e.clr(b)})
	}
	if(_Na(a.d.html) && a.e.html != a.d.html) a.e.html = a.d.html
	if(_Na(a.d.txt) && a.e.txt != a.d.txt) a.e.txt = a.d.txt
	if(a.d.e) _Nc(a.d.e).forEach(b => {if(a.e.v[b[0]] != b[1]) a.e.v[b[0]] = b[1]})
	if(!a.d.noupdate && a.d.ch) { a.t = a.e[a.d.nodes || a.e.chn.length != a.e.ch.length ? 'chn' : 'ch']; a.d.ch.forEach((b,c) => {if(_Na(b)) _elm(a.t[c] ? {e: new icApp(a.t[c]), d: b} : {cr: a.e, d: b})}); while(a.d.ch.length < a.t.length) a.t[a.t.length - 1].remove() }
	if(_Na(a.d.id)) a.e.id = a.d.id
	return a
}
class icAppRender {
	constructor() {
		this._elm = _elm.bind(this)
		this.e = null
		this._a = false
		this.pevData = null
	}
	update(d) {
		if(this.data) {
			this.pevData = Object.assign({}, this.data)
			Object.assign(this.data, d)
		}
		if(this.render && !(this.willUpdate && _Ne(this.willUpdate()))) {
			var b = this.render()
			this._elm({e: this.e, d: {ch: typeof b.length == 'undefined' ? [b] : b}})
			if(!this._a) {
				this._a = true
				if(this.didMount) this.didMount()
			}
			else if(this.didUpdate) this.didUpdate()
		}
	}
	mount(e) {
		this.e = new icApp(e)
		this.update()
	}
}

export { XHR, xhr, icApp, pram, icAppRender as IAR }
