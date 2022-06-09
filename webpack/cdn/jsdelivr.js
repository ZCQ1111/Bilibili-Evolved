const owner = 'the1812'
const host = 'cdn.jsdelivr.net'
const jsdelivr = {
  owner,
  host,
  stableClient: `https://${host}/gh/${owner}/Bilibili-Evolved@master/dist/bilibili-evolved.user.js`,
  previewClient: `https://${host}/gh/${owner}/Bilibili-Evolved@preview/dist/bilibili-evolved.preview.user.js`,
  library: {
    lodash: `https://${host}/npm/lodash@4.17.21/lodash.min.js`,
    protobuf: `https://${host}/npm/protobufjs@6.10.1/dist/light/protobuf.min.js`,
    jszip: `https://${host}/npm/jszip@3.7.1/dist/jszip.min.js`,
    sortable: `https://${host}/npm/sortablejs@1.14.0/Sortable.min.js`,
    mdi: `https://${host}/gh/Templarian/MaterialDesign-Webfont@5.3.45/css/materialdesignicons.min.css`,
  },
  smallLogo: `https://${host}/gh/${owner}/Bilibili-Evolved@preview/images/logo-small.png`,
  logo: `https://${host}/gh/${owner}/Bilibili-Evolved@preview/images/logo.png`,
  root: (branch, ownerOverride) => `https://${host}/gh/${ownerOverride || owner}/Bilibili-Evolved@${branch}/`,
}
module.exports = {
  jsdelivr,
}