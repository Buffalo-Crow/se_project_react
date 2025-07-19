import { getToken } from "./token";
import baseUrl from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

function handleDeleteCard(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => checkResponse(res));
}

function addItem({ name, imageUrl, weatherType }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weatherType,
    }),
  }).then((res) => checkResponse(res));
}

function editProfile({ name, avatar }) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then((res) => checkResponse(res));
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

export {
  getItems,
  addItem,
  handleDeleteCard,
  checkResponse,
  editProfile,
  addCardLike,
  removeCardLike,
};
