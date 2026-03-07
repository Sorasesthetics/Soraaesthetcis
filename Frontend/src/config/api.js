const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "http://127.0.0.1:8001" : "")

export const apiUrl = (path) => `${API_BASE_URL}${path}`

