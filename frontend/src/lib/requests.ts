interface APIError {
  detail: unknown
}

export function request(
  input: RequestInfo,
  init: RequestInit,
  onSuccess: (json: unknown) => void,
  onError: (json: APIError) => void = console.error
) {
  fetch(input, init)
    .then((response: Response) => {
      return response.ok ? response.json() : Promise.reject(response)
    })
    .then((json: unknown) => {
      onSuccess(json)
    })
    .catch((response: Response) => {
      try {
        response.json()
          .then((json: APIError) => {
            onError(json)
          })
          .catch(() => {
            onError({ detail: response.statusText })
          })
      } catch {
        console.error(response)
      }
    })
}
