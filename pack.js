var fs = require('fs-extra')

var map = fs.readFileSync('data/map', 'utf8').split('\n')
var data = '\n'

map.forEach(e => {
  data += '//from ' + e + '\n' + fs.readFileSync('data/' + e)
})

fs.outputFileSync('app/js/istrolid.cat.js', data)
require('child_process').exec('asar pack app app.asar')