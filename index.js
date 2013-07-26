'use strict';

function url4(name, params) {
  params = params || {};
  return url4.urls[name].replace(/(\/:\w+\??)/g, function (m, c) {
    c = c.replace(/[\/:?]/g, '');
    return params[c] ? '/' + params[c] : '';
  });
}
url4.urls = {};

if (typeof module !== 'undefined') {
  module.exports = url4;
}
