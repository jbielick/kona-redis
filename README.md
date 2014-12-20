kona-redis

a [then-redis](https://github.com/mjackson/then-redis) client mixin for the [kona](https://github.com/jbielick/kona) application framework.

In the root of your kona app, simply install the `kona-redis` module like you would any other:

`npm install -S kona-redis`

*-S will tell npm to save this dependency to our package.json*

*! You still need to be running a redis-server for this to work !*

And the next time you start your application, your application object and controller
context will now have a redis client available at `this.redis`!

Now you can use redis in your controller action as simply as:

```js

  show: function* () {
    this.set('votes', yield this.redis.get('votes'));
  },

  vote: function* () {
    yield this.redis.incr('votes');
    yield this.render({json: {votes: }})
  }

```
