'use strict';

function url4(patterns) {
  return function (name, params) {
    params = params || {};
    return patterns[name].replace(/(\/:\w+\??)/g, function (m, c) {
      c = c.replace(/[\/:?]/g, '');
      return params[c] ? '/' + params[c] : '';
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = url4;
}
