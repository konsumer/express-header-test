/* global fetch */

window.onload = async () => {
  const outputs = [...document.querySelectorAll('pre')]

  // fill testing headers
  const headers = {}
  JSON.parse(outputs[1].innerText).forEach(k => {
    headers[k] = Math.random()
  })

  // get full headers
  outputs[0].innerHTML = JSON.stringify(await fetch('/header', { headers }).then(r => r.json()), null, 2)
}
