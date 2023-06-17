import React from "react";
import Item from "./Item";
import Cart from "./Cart";
// import Counter from "./Counter";
// import { counterContext } from "./Context/Context";


function App() {

  /*const counterCtx = useContext(counterContext);
  console.log('appContext', counterCtx)*/
  return (
    <div style={{textAlign:'center'}}>
      <Item name="Apple ipad" price={10000}/>
      <hr />
      <Item name="Digital Watch" price={20000}/>
      <hr />
      <Item name="Honor Mobile" price={30000}/>
      <hr/>
      <h2>Cart Store</h2>
      <hr />
      <Cart/>
      {/* <h1>Count is {counterCtx.count} and {counterCtx.name}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}
    </div>
  );
}

export default App;
