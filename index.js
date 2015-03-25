var util = require('util')
var fs = require('fs')
var path = require('path')
var home = require('osenv').home()

var command

function calculateCommand(callback) {
  if (command) return callback(command)
  fs.readFile(path.join(home, '.open-text-editor'), 'utf8', function(err, data) {
    if (err) return callback(err)
    command = data.trim()
    return callback(command)
  })
}

exports.open = function(file, line, callback) {
  calculateCommand(function(cmd) {
    var fullcmd = util.format(cmd, file, line)
    require('child_process').exec(fullcmd, function(err, stdout, stderr) {
      callback && callback(err)
    })
  })
}
