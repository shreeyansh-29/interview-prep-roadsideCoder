import {useState} from "react";
import {useCustomMemo} from "./hook";

const PolyfillMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squareCounter = () => {
    console.log("Expensive calculation");
    return counter1 * counter1;
  };

  const memoizedValue = useCustomMemo(squareCounter, [counter1]);

  return (
    <div>
      <h2>Counter: {counter1}</h2>
      <h2>SquareCounter: {memoizedValue}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
};

export default PolyfillMemo;
