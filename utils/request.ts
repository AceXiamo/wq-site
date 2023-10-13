export type RequestOptions = {
  url: string;
  query?: any;
  body?: any;
};

export type Methods = "GET" | "POST" | "PUT" | "DELETE";

const doRequest = (options: RequestOptions, methods: Methods): any => {
  const { url, query, body } = options;
  let queryString = "";
  if (query) {
    queryString = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join("&");
    queryString = `?${queryString}`;
  }

  let fetchOptions: any = {
    method: methods,
  };
  if (body) {
    fetchOptions = {
      ...fetchOptions,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }
  return $fetch(`${url}${queryString}`, fetchOptions);
};

export default {
  get: (options: RequestOptions) => {
    return doRequest(options, "GET");
  },
  post: (options: RequestOptions) => {
    return doRequest(options, "POST");
  },
  put: (options: RequestOptions) => {
    return doRequest(options, "PUT");
  },
  delete: (options: RequestOptions) => {
    return doRequest(options, "DELETE");
  },
};
