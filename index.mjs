import tracker from './dist/index.esm.js'

new tracker({
    requestUrl: 'http://localhost:9000/tracker',
    historyTracker: true,
    domTracker: true,
    jsError: true,
})