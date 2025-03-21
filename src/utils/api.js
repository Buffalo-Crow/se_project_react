const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function handleDeleteCard(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => checkResponse(res));
}

function addItem({ name, imageUrl, weatherType }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weatherType,
    }),
  }).then((res) => checkResponse(res));
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

export { getItems, addItem, handleDeleteCard, checkResponse };
