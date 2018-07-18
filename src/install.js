import {version} from '../package.json'

export default function (_Vue, opts = {}) {
  if (this.installed) {
    return
  }
  this.installed = true

  const $leilaoRealtime = {
    version
  }

  _Vue.prototype.$leilaoRealtime = $leilaoRealtime
}
