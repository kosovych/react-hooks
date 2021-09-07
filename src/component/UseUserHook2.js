import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const getURL = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

const UseUserHook = () => {
  const [url, setUrl] = useState(getURL(1));
  const { response, error, loading } = useFetch({
    url,
    method: 'GET',
  });
  return (
    <>
      {error && <kbd>Ooooops... Error 😢</kbd>}
      {loading ? (<p>Loading...</p>) : (
        <div>
          <img
            src={`https://randomuser.me/api/portraits/women/${response.id}.jpg`}
            alt=""
            width="100"
            height="100"
          />
          <h1>{response?.name}</h1>
          <p>{response?.email}</p>
        </div>
      )}
      <div>
        <button className="btn btn--error" onClick={() => setUrl(getURL(-1))}>1</button>
        <button className="btn" onClick={() => setUrl(getURL(2))}>2</button>
        <button className="btn" onClick={() => setUrl(getURL(3))}>3</button>
        <button className="btn" onClick={() => setUrl(getURL(4))}>4</button>
      </div>
    </>
  )
};

export default UseUserHook;
