'use strict';

const marked = require('marked');
const loaderUtils = require('loader-utils');

// synchronous
function synchronous(markdown) {
  const options = loaderUtils.getOptions(this);

  this.cacheable();

  marked.setOptions(options);
  let content = marked(markdown);
  content =
    '--------------- Markdown Start ---------------\n' +
    content +
    '\n' +
    '--------------- Markdown End ---------------';

  return `module.exports = ${JSON.stringify(content)}`;
}
// module.exports = synchronous;

// asynchronous
function asynchronous(markdown) {
  const options = loaderUtils.getOptions(this) || {};
  const { duration = 3000 } = options;
  const callback = this.async();
  setTimeout(() => {
    callback(null, JSON.stringify('hello wolrd'));
  }, duration);
}
module.exports = asynchronous;


// use raw <Buffer>
// module.exports.raw = true;