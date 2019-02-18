var fs = require('fs-extra')

var data = fs.readFileSync('app/js/istrolid.cat.js', 'utf8').split('//from ').slice(1)
var map = ''

data.forEach(e => {
  e = e.split('\n')
  map += e[0] + '\n'
  fs.outputFileSync('data/' + e[0], e.slice(1).join('\n'))
})

fs.outputFileSync('data/map', map.split('\n').slice(0, -1).join('\n'))