
var git = require('git-rev')

git.short(function (str) {
  console.log('short', str)
  // => aefdd94
})

git.tag(function (str) {
  console.log('tag', str)
})
