export const json = response => response.json()

export const status = response => {
	if (response.error) {
		const { status, message } = response.error;
		throw `${status}: ${message}`;
	}
	return response;
}
export const createHeader = (method, token) => ({
	method: `${method}`,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": `Bearer ${token}`
	}
});