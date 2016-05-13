'use strict'
module.exports = plugin

const createSnippetRenderer = require('./create-snippet-renderer')

function plugin (markdown) {
  return {
    snippet: createSnippetRenderer(markdown),
  }
}
