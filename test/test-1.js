import { icApp } from '../src/ic-app.js';

var body = new icApp('body')
body.chr()
var elms = []
const sample_size = 50
const event = e => {
	alert('Clicked ' + new icApp(e.target).txt)
}
for (var i = 0; i < sample_size; i++) {
	var e = new icApp('span', 1)
	e.txt = 'Element ' + i
	e.sa('index', i)
	e.d.index = i
	e.ae('click', event)
	elms.push(e)
	elms.push(new icApp('br', 1))
}
elms.forEach(e => body.ap(e))
new icApp('[index="1"]').rem()

elms = icApp.ds({index:4})
elms.next.rem()
elms.rem()

body.chr([icApp.ds({index: 10}), icApp.ds({index: 20})])

elms = icApp.ds({index:12})
elms.cla(['el12', 'el', 'el-test']).clr('el-test')
console.log(elms.clc('el-test'))
console.log(elms.clc(['el', 'el-test']))
console.log(elms.clc(['el', 'el12']))
