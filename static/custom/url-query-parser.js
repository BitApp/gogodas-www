function getQueryParam () {
  const queryParams = {}
  let paramsString = window.location.search.replace('?', '')
  let searchParams = new URLSearchParams(paramsString)
  for (let param of searchParams) {
    queryParams[param[0]] = param[1]
  }
  return queryParams
}

let queryString = $.param(getQueryParam())

if (queryString) {
  const gogodasUrl = `https://app.gogodas.com/explorer?${queryString}`
  const denameUrl = `https://app.dename.com?${queryString}`
  const dasUrl = `https://app.did.id/explorer?${queryString}`
  const bestdasUrl = `https://https://did.top?${queryString}`
  $('#denameUrl').attr('href', denameUrl)
  $('#gogodasUrl').attr('href', gogodasUrl)
  $('#dasUrl').attr('href', dasUrl)
  $('#bestdasUrl').attr('href', bestdasUrl)
}
