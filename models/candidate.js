// AM: Do you need these require statements here? Doesn't look like you reference your env file or the request module.

var env = require( "../env" );
var request=require('request');

var Candidate = function(info){
  this.name = info.name;
}
