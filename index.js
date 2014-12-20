var redis = require('then-redis');
var thunkify = require('thunkify');
var delegate = require('delegates');
var client;

module.exports = {

  configure: function* () {
    client = redis.createClient(this.config.redis || {});
  },

  initialize: function* () {
    client.on('error', this.onerror);
    this.redis = client;
    this.redis.incr('started');
    delegate(this.Controller.Base.prototype, 'app')
      .access('redis')
  },

  shutdown: function() {
    client.end();
  }

}
