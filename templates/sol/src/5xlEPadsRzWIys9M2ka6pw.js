function setupOptimizeExperiment (value) {
  window.EXPERIMENT_VALUE = value
}

window.addEventListener('load', () => {
  if (typeof gtag !== 'undefined') {
    window.EXPERIMENT_NAME = '5xlEPadsRzWIys9M2ka6pw'
    // eslint-disable-next-line no-undef
    gtag('event', 'optimize.callback', {
      name: window.EXPERIMENT_NAME,
      callback: setupOptimizeExperiment
    })
  }
})
