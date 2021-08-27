import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLoading();
    const data = new FormData(evt.target);
    setState((prevState) => [...prevState, {name: data.get('name'), descr: data.get('descr')}]);
    return evt.target.reset();
  }
  const getItems = state.map(({name, descr}, i) => <li key={`${name}-${i}`}>{name} - {descr}</li>);

  // componentDidMount и componentDidUpdate
  useEffect(() => {
    document.title = `Items ${state.length}`;
  });

  // componentDidMount
  useEffect(() => {
    alert('Welcome!');
  }, []);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      alert('Goodbye!');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    loading ? document.title = `Loading...` : document.title = `Items ${state.length}`;
  }, [loading]);
  return (
    <>
      <h1>UseEffectHook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Description:</span>
          <input type="text" name="descr"/>
        </label>
        <button type="submit">submit</button>
      </form>
      {Boolean(state.length) && !loading && (
        <ul>
          {getItems}
        </ul>
      )}
      {loading && <p>Loading...</p>}
    </>
  )
}

export default UseEffectHook;
