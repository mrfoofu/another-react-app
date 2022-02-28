import { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

interface PropsCount {
  count: number;
  count2: number;
}

const Hooks = () => {
  // Basic useStates
  const [{ count, count2 }, setCount] = useState<PropsCount>({
    count: 10,
    count2: 20,
  });
  const [count3, setCount3] = useState<number>(30);
  const [count4, setCount4] = useState<number>(40);
  const [values, handleChange] = useForm({ email: "", password: "" });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    const onMouseMove = (e: Event) => {
      console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove)

    // Clean up function
    // Unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [values.password]);

  // -------------
  // useEffect Types
  // -------------

  // 1. No dependency passed:
  // -------------
  // Equivalent of componentDidUpdate()
  // Runs on every render
  // 
  useEffect(() => {
    console.log('Mount 1')
  });

  // 2. An empty array:
  // -------------
  // Equivalent of componentDidMount()
  // Runs only on the first render
  // 
  useEffect(() => {
    console.log('Mount 2')
  }, []); // Mark [] here.

  // 3. Props or state values:
  // -------------
  // Runs on the first render
  // And any time any dependency value changes
  // 
  useEffect(() => {
    console.log('Mount 3')
  }, [values]);

  // 4. Props or state values:
  // -------------
  // Equivalent of componentWillUnmount
  // Return statement inside of the useEffect function body
  // 
  useEffect(() => {
    return () => {
      console.log('Mount 4')
    };
  }, []);

  return (
    <div>
      <button
        className="bg-blue border p-2"
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        Increment 1 and 2
      </button>
      <button
        className="bg-blue border p-2"
        onClick={() => {
          setCount3((c) => c + 1);
          setCount4((c) => c + 1);
        }}
      >
        Increment 3 and 4
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <div>count 3: {count3}</div>
      <div>count 4: {count4}</div>
      <input
        className="border"
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        className="border"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
      <div>
        {loading ? "Loading..." : data}
      </div>
    </div>
  );
};

export default Hooks;
