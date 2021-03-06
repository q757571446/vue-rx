import { install } from './util'
import rxMixin from './mixin'
import streamDirective from './directives/stream'
import watchAsObservable from './methods/watchAsObservable'
import fromDOMEvent from './methods/fromDOMEvent'
import subscribeTo from './methods/subscribeTo'

export default function VueRx (Vue, Rx) {
  install(Vue, Rx)
  Vue.mixin(rxMixin)
  Vue.directive('stream', streamDirective)
  Vue.prototype.$watchAsObservable = watchAsObservable
  Vue.prototype.$fromDOMEvent = fromDOMEvent
  Vue.prototype.$subscribeTo = subscribeTo
}

// auto install
if (typeof Vue !== 'undefined' && typeof Rx !== 'undefined') {
  Vue.use(VueRx, Rx)
}
