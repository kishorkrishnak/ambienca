import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import axios from "axios";

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Error loading data, check spelling");
      });
  }, [url]);

  return { loading, data };
};

export default useRequest;
