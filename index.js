const success = (message) => {
  const styles = 'color: #1dd1a1;'
  showLog(message, styles)
}

const error = (message) => {
  const styles = 'color: #ff6b6b;'
  showLog(message, styles)
}

const info = (message) => {
  const styles = 'color: #54a0ff;'
  showLog(message, styles)
}

const warning = (message) => {
  const styles = 'color: #feca57;'
  showLog(message, styles)
}

const showLog = (message, styles) => {
  console.log('%c%s', styles, message)
}

module.exports = {
  success,
  error, 
  info,
  warning
}
