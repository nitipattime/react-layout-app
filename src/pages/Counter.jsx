import {useState, useEffect} from 'react'

const Counter = () => {
  
  // let counter = 0;

  // const onChangeCounter = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // }
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(50)
  },[])
  

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {/* <button onClick={()=>counter+1}>Counter up</button> */}
      {/* <button onClick={onChangeCounter}>Counter up</button> */}
      <button onClick={() =>setCounter(counter+1)}>Counter up</button>
      <button onClick={() =>setCounter(counter-1)}>Counter down</button>
    </div>
  )
}

export default Counter
