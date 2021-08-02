import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementMany, decrementMany} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter {counter} </h1>
        <button onClick = {()=> dispatch(increment())}>+</button>
        <button onClick = {()=> dispatch(decrement())}>-</button>
        <button onClick = {()=> dispatch(incrementMany(5))}>+</button>
        <button onClick = {()=> dispatch(decrementMany(5))}>-</button>
        {isLogged?  <h3>valueable information i shouldnt show</h3> : ''}
    </div>
  );
}

export default App;
