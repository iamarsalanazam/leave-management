// import axios from "axios";
// type FetchingData = {
//   url: string;
// };
// export const APICall = async ({ url }: FetchingData) => {
//   const baseUrl = "http://localhost:8080/leave";
//   try {
//     const response = await axios.get(`${baseUrl}${url}`);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };

import axios, { AxiosResponse } from "axios";

type FetchingData = {
  url: string;
  method: "GET" | "POST";
  data?: any;
  headers?: Record<string, string>; // Add headers property for authentication
};

export const APICall = async ({
  url,
  method,
  data,
  headers,
}: FetchingData): Promise<any> => {
  const baseUrl = "http://localhost:8080/";
  const fullUrl = `${baseUrl}${url}`;

  try {
    let response: AxiosResponse;

    if (method === "GET") {
      response = await axios.get(fullUrl, { headers });
    } else if (method === "POST") {
      response = await axios.post(fullUrl, data, { headers });
    } else {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data.data;
  } catch (error) {
    console.error(`Error ${method}ing data at ${fullUrl}:`, error);
    return null;
  }
};
