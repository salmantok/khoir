export class Khoir {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  _request(endpoint, method, data = null, headers = {}) {
    const url = `${this.baseURL}${endpoint}`
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }

    if (data) {
      options.body = JSON.stringify(data)
    }

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            )
          }
          return response.json()
        })
        .then((data) => resolve(data))
        .catch((error) => {
          console.error(`Fetch error: ${error.message}`)
          reject(error)
        })
    })
  }

  request(endpoint, method, data = null, headers = {}, callback) {
    const promise = this._request(endpoint, method, data, headers)

    if (typeof callback === 'function') {
      promise
        .then((result) => callback(null, result))
        .catch((error) => callback(error, null))
      return
    }

    return promise
  }

  get(endpoint, headers = {}, callback) {
    return this.request(endpoint, 'GET', null, headers, callback)
  }

  post(endpoint, data, headers = {}, callback) {
    return this.request(endpoint, 'POST', data, headers, callback)
  }

  put(endpoint, data, headers = {}, callback) {
    return this.request(endpoint, 'PUT', data, headers, callback)
  }

  delete(endpoint, headers = {}, callback) {
    return this.request(endpoint, 'DELETE', null, headers, callback)
  }

  patch(endpoint, data, headers = {}, callback) {
    return this.request(endpoint, 'PATCH', data, headers, callback)
  }

  head(endpoint, headers = {}, callback) {
    return this.request(endpoint, 'HEAD', null, headers, callback)
  }

  options(endpoint, headers = {}, callback) {
    return this.request(endpoint, 'OPTIONS', null, headers, callback)
  }
}
