# Khoir

> Sederhana dan fleksibel untuk melakukan permintaan HTTP

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
  - [Mengimpor Khoir](#mengimpor-khoir)
  - [Membuat Instance](#membuat-instance)
  - [Menggunakan Promises](#menggunakan-promises)
  - [Menggunakan Callbacks](#menggunakan-callbacks)
  - [Menggunakan Async/Await](#menggunakan-async-await)
- [API](#api)
  - [Constructor](#constructor)
  - [Method](#method)
    - [`get`](#get)
    - [`post`](#post)
    - [`put`](#put)
    - [`delete`](#delete)
    - [`patch`](#patch)
    - [`head`](#head)
    - [`options`](#options)

## Pendahuluan

_Mendukung gaya promises, callbacks, dan async/await, sehingga mudah diintegrasikan ke berbagai project._

## Instalasi

```bash
npm install khoir
```

## Penggunaan

```js
import { Khoir } from 'khoir'

const api = new Khoir('https://httpbin.org/')

api
  .get('/get')
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
```

### Mengimpor Khoir

Untuk menggunakan `Khoir` dalam project Anda, impor class `Khoir` sebagai berikut:

```js
import { Khoir } from 'khoir' // ESM
const { Khoir } = require('khoir') // CommonJS
```

### Membuat Instance

Buat instance `Khoir` dengan base URL untuk API Anda:

```js
const api = new Khoir('https://httpbin.org/')
```

### Menggunakan Promises

Berikut adalah contoh untuk setiap method HTTP:

- **GET**

  ```js
  api
    .get('/endpoint')
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **POST**

  ```js
  api
    .post('/endpoint', { key: 'value' })
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **PUT**

  ```js
  api
    .put('/endpoint', { key: 'value' })
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **DELETE**

  ```js
  api
    .delete('/endpoint')
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **PATCH**

  ```js
  api
    .patch('/endpoint', { key: 'value' })
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **HEAD**

  ```js
  api
    .head('/endpoint')
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

- **OPTIONS**

  ```js
  api
    .options('/endpoint')
    .then((res) => console.log(res)) // Menangani hasil sukses
    .catch((err) => console.error(err)) // Menangani kesalahan
  ```

### Menggunakan Callbacks

Berikut adalah contoh untuk setiap method HTTP:

- **GET**

  ```js
  api.get('/endpoint', {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **POST**

  ```js
  api.post('/endpoint', { key: 'value' }, {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **PUT**

  ```js
  api.put('/endpoint', { key: 'value' }, {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **DELETE**

  ```js
  api.delete('/endpoint', {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **PATCH**

  ```js
  api.patch('/endpoint', { key: 'value' }, {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **HEAD**

  ```js
  api.head('/endpoint', {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

- **OPTIONS**

  ```js
  api.options('/endpoint', {}, (err, res) => {
    if (err) {
      return console.error(err) // Menangani kesalahan
    }
    console.log(res) // Menangani hasil sukses
  })
  ```

#### Menggunakan Async/Await

Berikut adalah contoh untuk setiap method HTTP:

- **GET**

  ```js
  async function getData() {
    try {
      const res = await api.get('/endpoint')
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **POST**

  ```js
  async function postData() {
    try {
      const res = await api.post('/endpoint', { key: 'value' })
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **PUT**

  ```js
  async function putData() {
    try {
      const res = await api.put('/endpoint', { key: 'value' })
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **DELETE**

  ```js
  async function deleteData() {
    try {
      const res = await api.delete('/endpoint')
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **PATCH**

  ```js
  async function patchData() {
    try {
      const res = await api.patch('/endpoint', { key: 'value' })
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **HEAD**

  ```js
  async function headData() {
    try {
      const res = await api.head('/endpoint')
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

- **OPTIONS**

  ```js
  async function optionsData() {
    try {
      const res = await api.options('/endpoint')
      console.log(res) // Menangani hasil sukses
    } catch (err) {
      console.error(err) // Menangani kesalahan
    }
  }
  ```

## API

### Constructor

`new Khoir(baseURL)`

- `baseURL` (_string_): URL dasar untuk semua permintaan API.

### Method

#### `get`

`get(endpoint, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `post`

`post(endpoint, data, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `data` (_object_): Data yang disertakan dalam body permintaan.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `put`

`put(endpoint, data, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `data` (_object_): Data yang disertakan dalam body permintaan.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `delete`

`delete (endpoint, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `patch`

`patch(endpoint, data, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `data` (_object_): Data yang disertakan dalam body permintaan.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `head`

`head(endpoint, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.

#### `options`

`options(endpoint, (headers = {}), callback)`

- `endpoint` (_string_): Endpoint API yang diminta.
- `headers` (_object_): Header opsional yang disertakan dalam permintaan.
- `callback` (_function_): Fungsi callback opsional untuk menangani respons.
