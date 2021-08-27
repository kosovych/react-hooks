import React, { useReducer } from 'react';

const reducer = (state, {type, id, title}) => {
  let newState;
  switch (type) {
    case 'ADD':
      return [...state, { title, status: 'undone', id: Date.now()}]
    case 'MAKE_DONE':
      newState = state.map(el => {
        if(el.id === id ) {
          const newEL = {...el, status: 'done'}
          return newEL;
        }
        return el;
      });
      return newState;
    case 'MAKE_UNDONE':
      newState = state.map(el => {
        if(el.id === id ) {
          const newEL = {...el, status: 'undone'}
          return newEL;
        }
        return el;
      });
      return newState;
    default:
      return state;
  }
}

const init = [{title: 'Todo some 💩', status: 'undone', id: 1}]

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const title = data.get('title');
    dispatch({
      type: 'ADD',
      title
    });
    evt.target.reset();
  } 
  const getItems = state.map(({title, status, id}) => (
    <li
      key={id}
      style={{ textDecoration: status === 'done' && 'line-through'}}
    >
      <span>{title}</span>
      {status === 'done' ? (
          <button
            onClick={() => dispatch({status, id, type: 'MAKE_UNDONE'})}
          >↩️</button>
        ) : (
          <button
            onClick={() => dispatch({status, id, type: 'MAKE_DONE'})}
          >✅</button>
        )
      }
    </li>
  ))
  return (
    <>
      <h1>UseReducer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input type="text" name="title" />
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
};

export default UseReducer;
