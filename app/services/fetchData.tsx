import axios from "axios";
type FetchingData = {
  url: string;
};
export const APICall = async ({ url }: FetchingData) => {
  const baseUrl = "http://localhost:8080/leave";
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
