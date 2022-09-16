interface APIError {
  detail: any
}

export function request(
  input: RequestInfo,
  init: RequestInit,
  onSuccess: (json: any) => void,
  onError: (json: APIError) => void = console.error
) {
  fetch(input, init)
    .then((response: Response) => {
      return response.ok ? response.json() : Promise.reject(response)
    })
    .then((json: any) => {
      onSuccess(json)
    })
    .catch((response: Response) => {
      response.json()
        .then((json: APIError) => {
          onError(json)
        })
        .catch(() => {
          onError({ detail: response.statusText })
        })
    })
}
