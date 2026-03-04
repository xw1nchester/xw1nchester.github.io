(function () {
  try {
    /* eslint-disable */
    var isWebview = !!window.location.search.match (new RegExp('(^|[\?\&])' + 'is_web_view' + '=([^&=]*)'))
    var disableUniwebview = domainInfo && domainInfo.disable && domainInfo.disable.uniwebivew_iframe
    var isDomainWebview = domainInfo && domainInfo.type === 'PROJECT_WEBVIEW'

    if ((isWebview || isDomainWebview) && !disableUniwebview) {
      var iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = 'uniwebview://action?key=init&project=jet&host=' + window.location.host
      document.body.appendChild(iframe)
    }
  } catch (e) {}
})()
