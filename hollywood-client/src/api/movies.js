const baseUrl = (path = "") =>
  `https://hollywood-api-calvin.now.sh/api/movies/${path}`;

export const create = data => {
  return fetch(baseUrl(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const get = id => {
  return fetch(baseUrl(id))
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const getAll = () => {
  return fetch(baseUrl())
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const update = (id, data) => {
  return fetch(baseUrl(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const remove = id => {
  return fetch(baseUrl(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const addActor = (id, data) => {
  return fetch(baseUrl(`${id}/actor`), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const removeActor = (id, data) => {
  return fetch(baseUrl(`${id}/actor`), {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
};
