import React, { useState } from 'react';

const UseStateHook = () => {
  const [state, setState] = useState([]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    setState((prevState) => [...prevState, {name: data.get('name'), descr: data.get('descr')}]);
    return evt.target.reset();
  }
  const getItems = state.map(({name, descr}, i) => <li key={`${name}-${i}`}>{name} - {descr}</li>);
  return (
    <>
      <h1>UseStateHook</h1>
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
      {Boolean(state.length) && (
        <ul>
          {getItems}
        </ul>
      )}
    </>
  )
}

export default UseStateHook;
