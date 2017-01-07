var repl = require('repl');
var http = require('http');
var request = require('request');
const version = "Crunch REPL v 0.01 - Developer (Williams Isaac)";

exports.start = function(){
  const r = repl.start("crunch-$ ");
  Object.defineProperty(r.context, 'version', {
    configurable: false,
    enumerable: true,
    value: version
  })

  r.defineCommand('close', function() {
    console.log('Williams Says - Goodbye');
    this.close();
  })

  r.defineCommand('getTime',{
    help: 'Gets the Time Taken to Execute Your Functions',
    action(callback){
      console.time('Exec-Time')
        callback
      console.timeEnd('Exec-Time')
      this.displayPrompt();
    }
  })

  r.defineCommand('mapRequest', {
    help: 'Makes HTTP Request to API',
    action(url){
      var options = {
        url: url,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
        }
      };
      function callback(error, response, body) {
        if (error) {
          console.log(error);
        }
        else{
          var info = JSON.parse(body);
          console.log(info);
        }
      }
      request(options, callback);
  }
  })
}
