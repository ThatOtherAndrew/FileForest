interface APIError {
  detail: unknown;
}

export function request(
  input: RequestInfo,
  init: RequestInit,
  onSuccess?: (json?: unknown) => void,
  onError?: (detail: unknown) => void
) {
  const errorCallback: (json?: unknown) => void = onError ? onError : console.error;

  fetch(input, init)
    .then(async (response: Response) => {
      const text = await response.text();
      let json: unknown;
      try {
        json = JSON.parse(text);
      } catch {
        if (response.ok && !text) {
          if (onSuccess) {
            onSuccess();
          }
        } else {
          errorCallback('Invalid JSON response');
        }
        return;
      }
      if (response.ok) {
        if (onSuccess) {
          onSuccess(json);
        }
      } else {
        errorCallback((json as APIError).detail);
      }
    });
}
