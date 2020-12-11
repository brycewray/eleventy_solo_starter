// Detect when any CSS files change

const fs = require('fs')
const md5 = require('md5')
const globAll = require('glob-all')
const DATAFILE = '_data/csshash.json'
const PCSSFILE = 'csshash'
cssFiles = globAll.sync([
  'src/assets/css/*.css'
])

var cssMd5Total = 0
var cssContent = ''

for(i=0; i<cssFiles.length; i++) {
  cssContent += (fs.readFileSync(cssFiles[i]))
}
cssMd5Total = md5(cssContent)
console.log(`CSS MD5 result =`, cssMd5Total)

var jsonValue = `{
  "index.css": "index-${cssMd5Total}.css"
}`
fs.writeFileSync(DATAFILE, jsonValue)

var txtValue = `index-${cssMd5Total}.css`
fs.writeFileSync(PCSSFILE, txtValue)
// ...the latter because, otherwise, you get the following error:
// The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.
