; (function () {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-theme',
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  var toggle = document.querySelector('.theme-toggle')
  if (!toggle) return

  toggle.addEventListener('click', function (e) {
    var newTheme = getPreferredTheme() === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setStoredTheme(newTheme)
  })
})()
