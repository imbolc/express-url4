'use strict';

var assert = require('assert');
var url4 = require('./')({
  index: '/',
  users: '/users/:id?'
});

var url = url4('index');
assert.equal(url, '/');

var url = url4('users');
assert.equal(url, '/users');

var url = url4('users', {'id': 'foo'});
assert.equal(url, '/users/foo');
