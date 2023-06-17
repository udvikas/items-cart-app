import React, { useContext } from 'react'
import { counterContext } from './Context/Context'

const Counter = () => {

   const counterCtx = useContext(counterContext);
  return (
    <>
      <hr />
     <div>
      <button onClick={() => counterCtx.setCount(counterCtx.count + 1)}>Incre</button>
      {" "} 
      <button onClick={() => counterCtx.setCount(counterCtx.count - 1)}>Decre</button>
     </div>
      
    </>
  )
}

export default Counter
