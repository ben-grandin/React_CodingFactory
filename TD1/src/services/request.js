

async function request(url, body, method = "GET") {
	let result = await fetch(
		url,
		{
			method: method,
			body: body ? JSON.stringify({
				body
			}) : null,
		}
	);
	if (result && !result.ok) throw new Error(await result.text());
	return await result.json();
}

export { request }