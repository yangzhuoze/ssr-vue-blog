export default {
  baseUrl() {
    let host;
    if (process.env.NODE_ENV === 'production' && process.env.BASE_URL) {
      host = `${process.env.BASE_URL}/${process.env.CONTEXT_PATH}`
    } else {
      host = `http://localhost:8000/blog`
    }
    return host
  }
}
