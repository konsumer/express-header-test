/* global fetch */

window.onload = async () => {
  const [preOutput, preHeaders, preOutSingleHeaders] = document.querySelectorAll('pre')

  const testHeaders = JSON.parse(preHeaders.innerText)

  // fill testing headers
  const headers = {}
  testHeaders.forEach(k => {
    headers[k] = Math.random()
  })

  // get full headers
  preOutput.innerHTML = JSON.stringify(await fetch('/header', { headers }).then(r => r.json()), null, 2)

  const singleOutput = {}

  // get single headers from server
  const out = await Promise.all(testHeaders.map(k => {
    return fetch(`/header/${k}`, { headers }).then(r => r.json())
  }))

  testHeaders.forEach((k, i) => {
    singleOutput[k] = out[i]
  })

  preOutSingleHeaders.innerHTML = JSON.stringify(singleOutput, null, 2)

  console.log(out)
}
