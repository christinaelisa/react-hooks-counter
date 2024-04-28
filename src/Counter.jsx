import { useRef, useState } from "react";

export default function Counter() {
  let ref = useRef(0);
  const [count, setCount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    setCount(ref.current);
  }

  function clearCount() {
    ref.current = 0;
    setCount(ref.current);
  }

  return (
    <>
      <button onClick={handleClick}>click me!</button>
      <button onClick={clearCount}>clear count</button>
      <div className="counter">You clicked {ref.current} times!</div>
    </>
  );
}
