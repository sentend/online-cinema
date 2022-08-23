export const useHttp = () => {
	const request = async (
		url,
		method = 'GET',
		body = null,
		headers = {
			'X-API-KEY': '550904b7-edc0-4759-a706-4290f3c83040',
			'Content-Type': 'application/json',
		}
	) => {
		try {
			const response = await fetch(url, { method, body, headers })

			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`)
			}

			const data = await response.json()
			return data
		} catch (e) {
			throw e
		}
	}

	return {
		request,
	}
}
