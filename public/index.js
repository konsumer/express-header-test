/* global fetch */

window.onload = async () => {
  const [preOutput, preHeaders] = document.querySelectorAll('pre')

  // fill testing headers
  const headers = {}
  JSON.parse(preHeaders.innerText).forEach(k => {
    headers[k] = Math.random()
  })

  // get full headers
  preOutput.innerHTML = JSON.stringify(await fetch('/header', { headers }).then(r => r.json()), null, 2)
}
