- PV: 就是页面访问量（PageView），用户每次对网站的访问均被记录下来。主要监听 history 和 hash ，由于 history API 无法通过 popstate 监听 pushState 和 replaceState ，只能重写；hash 要使用 hashchange 去监听。
- UV: 就是个人用户访问（Unique Visitor），访问网站的一台终端设备就是一个访客。
- 如何上报数据？使用 XMLHTTPRequest 和 sendBeacon，后者的好处是就算页面关闭了也会完成请求，而且兼容性也很好。
- DOM 元素事件监听：给需要的元素添加 target-key 属性进行监听。
- JS 报错的话就上报 error 事件，promise 报错就上报 unhandledrejection
