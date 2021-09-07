import { useState, useEffect } from 'react';

const useFetch = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _fetch = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(url, {
          method,
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data);
        setResponse(data);
        setLoading(false);
      } catch (err) {
        console.dir(err);
        setLoading(false);
        setError(err);
        setResponse(null);
      }
    }
    url && _fetch();
  }, [url, method, body]);
  
  return {response, error, loading};
}

export default useFetch;
