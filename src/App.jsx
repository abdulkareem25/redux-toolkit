import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counter.slice'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementBy, setIncrementBy] = useState(0);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <input 
      type="number" 
      name="incrementBy" 
      id="incrementBy" 
      onChange={(e) => setIncrementBy(Number(e.target.value))}
      />
      <button
        aria-label="Increment value by 5"
        onClick={() => dispatch(incrementByAmount(incrementBy))}
      >
        Increment by {incrementBy} 
      </button>
    </div>
  )
}

export default App
