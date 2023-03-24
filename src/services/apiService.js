const host = "http://localhost:3030";

async function request(method, url, token, body) {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json"
    },
  };

  if(token){
    options.headers["X-Authorization"] = token;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }


    const response = await fetch(host + url, options);

    if (response.status === 204) {
      return;
    }

    const data = await response.json();
    if (response.ok === false) {
      throw data;
    }

    return data;
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
