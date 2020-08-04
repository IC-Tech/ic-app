//import { IAR } from '../src/ic-app.js';
import { IAR } from '../build/bundle.min.js';

class page extends IAR {
	didMount() {
		setInterval(e => this.update(), 1000)
	}
	render() {
		var t = new Date()
		var v = [t.getHours(), ' : ', t.getMinutes(), ' : ', t.getSeconds()].map(v => v.toString().padStart(2, '0'))
		return ({t: 'div', s: {display: 'block', width: '100%'}, ch: [
			{t: 'span', nodes: 1, ch: v, s: {'font-size': '56px', 'text-align': 'center', display: 'block'}},
			{t: 'br'},
			{t: 'span', s: {'font-size': '36px', 'text-align': 'center', display: 'block'}, txt: t}
		]})
	}
}
new page().mount('body')
