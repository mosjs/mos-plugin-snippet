import createSnippetRenderer from './create-snippet-renderer'

export default function plugin (mos, md) {
  mos.scope.snippet = createSnippetRenderer(md)
}

module.exports.attributes = {
  pkg: require('../package.json'),
}
