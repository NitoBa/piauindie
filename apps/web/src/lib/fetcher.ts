import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

/* eslint-disable no-undef */
export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(
      `${publicRuntimeConfig.API_URL}/api/graphql` ?? '',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options ?? {}),
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      },
    )

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..'
      throw new Error(message)
    }

    return json.data
  }
}
