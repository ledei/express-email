export async function SendJson(url, method, data) {
  const fetchOptions = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  };

  return await fetch(url, fetchOptions);
}
