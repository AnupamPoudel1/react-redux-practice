import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  }
  const decrement = () => {
    dispatch({ type: 'DEC' });
  }

  // This is also possible but more efficient way is given below
  // const addBy = () => {
  //   dispatch({ type: 'AB' });
  // }
  // const subBy = () => {
  //   dispatch({ type: 'SB' });
  // }

  const addBy = () => {
    dispatch({ type: 'AB', payload: 10 })
  }
  const subBy = () => {
    dispatch({ type: 'SB', payload: 10 })
  }

  return (
    <>

      <div className="app">
        <span>This counter doesnot go to negative number</span>
        <h1>Counter</h1>
        <h2>
          {counter}
        </h2>
      </div>
      <div className="buttons">
        <button onClick={increment}>Counter + 1</button>
        <button onClick={decrement}>Counter - 1</button>
        <button onClick={addBy}>Counter + 10</button>
        <button onClick={subBy}>Counter - 10</button>
      </div>
    </>
  );
}


export default App;
