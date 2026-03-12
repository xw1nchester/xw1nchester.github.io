;(async function () {
  function getCookie (name) {
    const matches = document.cookie.match(
      new RegExp(
        // eslint-disable-next-line
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      )
    )

    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  const webviewUARegExp =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv|.0.0.0)|Linux; U; Android)/gi

  const isWebviewUA = Boolean(window.navigator.userAgent.match(webviewUARegExp))
  const isWebViewCookie = getCookie('isWebView') || ''
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  const isWebviewIOS = isWebViewCookie.toLowerCase() === 'ios' || (isWebviewUA && isIOS)

  if (isWebviewIOS) {
    return
  }

  try {
    const response = await fetch('/batch?cms[]=api/cms/v4/settings')
    const data = await response.json()
    const appId = JSON.parse(data.CmsApiCmsV4Settings.data.appLinks).idIOSApp

    if (appId) {
      const meta = document.createElement('meta')

      meta.name = 'apple-itunes-app'
      meta.content = `app-id=${appId}, app-clip-bundle-id=com.BIMBASELTD.IZZIcasino`
      document.getElementsByTagName('head')[0].appendChild(meta)
    }
  } catch (e) {
    console.log("Couldn't get idApp:", e)
  }
})()
