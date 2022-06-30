import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from "./redux/counter";

function App() {

  // const { count } = useSelector ((state) => state.counter)   //state.counter(nome que namos em store depois do ponto)
  const count = useSelector ((state) => state.counter.count)  // eu quero variavel count do redux state , espicificamente do counter reducer e especificamente variavel count do counter reducer
  const dispatch = useDispatch(); // chama a redux action, pode chamar a ação de qualquer reducer que queremos
  
  
  return (
    <div >
          <h1>{count}</h1>
          <button onClick={()=>{dispatch(increment())}}>Adicionar</button>
          <button onClick= {()=> {dispatch(decrement())}}> Diminuir </button>
          <button onClick={()=>{dispatch(incrementByAmount(33))}}>Increment by 33</button>
    </div>
  );
}

export default App;
