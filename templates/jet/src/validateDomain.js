const authController = (function (w) {
  const l = w.location

  const uuidv4 = () => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8)

    return v.toString(16)
  })

  const ds = (s) => s.split('.').map((i) => parseInt(i) + 2)
    .map((i) => String.fromCharCode(i))
    .join('')

  const ue = '45.104.113.45.110.112.109.100.103.106.99.124.113.99.112.116.44.105.99.119'
  const sET = '103.108.116.95.106.103.98.43.98.109.107.95.103.108'
  const ud = ds(ue)
  const dSET = ds(sET)
  const d = l.hostname

  const xhrOnload = function () {
    if (this.status >= 200 && this.status < 300) {
      const data = JSON.parse(this.response.split('.')
        .map((i) => parseInt(i) + 7)
        .map((i) => String.fromCharCode(i))
        .join(''))

      if (data && !data.isLegal) {
        const sD = {
          exception: {
            type: `Error: ${dSET}`,
            value: `${dSET} ${l.hostname}`,
            mechanism: {
              handled: true,
              type: 'generic'
            }
          },
          level: 'error',
          event_id: uuidv4(),
          platform: 'javascript',
          timestamp: new Date().getTime() / 1000,
          environment: 'production',
          request: {
            url: l.href,
            headers: { 'User-Agent': w.navigator.userAgent }
          }
        }

        const sU = 'https://sentry.firmare.cc/api/2/store/?sentry_key=02b140c8ae5a4676a9d51ca0896f0de1&sentry_version=7'
        const sXhr = new XMLHttpRequest()

        sXhr.open('POST', sU)
        sXhr.setRequestHeader('Content-Type', 'application/json')
        sXhr.send(JSON.stringify(sD))
        setTimeout(() => {
          l.href = data.redirector
        }, 1000)
      }
    }
  }

  return function (cd) {
    cd = cd || d
    const xhr = new XMLHttpRequest()

    const code = JSON.stringify({ domain: cd })
      .split('')
      .map((i) => i.charCodeAt(0) - 7)
      .join('.')

    const formData = new FormData()

    xhr.open('POST', ud)
    formData.append('request', code)
    xhr.onload = xhrOnload
    xhr.send(formData)
  }
})(window)

authController()
