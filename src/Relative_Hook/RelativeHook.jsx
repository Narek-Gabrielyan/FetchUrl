// **** Installed libraries **** //
import { useState, useEffect } from "react";

export default function useRequest(endpoint) {
  const [data, setData] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    fetch(baseUrl + endpoint)
      .then((response) =>
        // response.status === 200 ? response.json() : console.error("Invalid URL")
        response.json()
      )
      .then((response) => setData(response));
  }, []);
  return data || [];
}
