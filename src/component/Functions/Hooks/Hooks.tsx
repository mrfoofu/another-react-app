import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

interface PropsCount {
  count: number;
  count2: number;
}

const Hooks = () => {
  
  // -------------
  // useStates
  // -------------

  const [{ count, count2 }, setCount] = useState<PropsCount>({
    count: JSON.parse(localStorage.getItem("count") || "{}"),
    count2: 20,
  });
  const [count3, setCount3] = useState<number>(30);
  const [count4, setCount4] = useState<number>(40);

  const [values, handleChange] = useForm({ email: "", password: "" });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef<HTMLInputElement>(null);

  // -------------
  // useRef
  // -------------

  // You can use useRef as a flag to check if a component has unmounted
  // To reference this, ensure you use {var}.current
  const isCurrent = useRef(true);

  // You can also store functions
  // hello.current();
  const hello = useRef(() => console.log("hello"));

  // -------------
  // useLayoutEffect
  // -------------

  // useLayoutEffect hook is similar to the useEffect
  // The difference between useEffect and useLayoutEffect is in the time when the functions are invoked
  // - useLayoutEffect hook on the other hand is called before the screen is painted but after the DOM has been mutated.
  // - useEffect hook is called after the screen is painted

  const [rect, setRect] = useState<Object>({});
  const divRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (inputRef && inputRef.current) {
      console.log(inputRef.current.getBoundingClientRect());
    }
    if (divRef && divRef.current) {
      console.log("Setting rect");
      setRect(divRef?.current?.getBoundingClientRect());
    }
  }, [data]);

  // -------------
  // useEffect
  // -------------

  useEffect(() => {
    // On update on count state, store value in localStorage
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    const onMouseMove = (e: Event) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);

    // Clean up function
    // ComponentDidUnmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      isCurrent.current = false;
    };
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
    console.log("Mount 1");
  });

  // 2. An empty array:
  // -------------
  // Equivalent of componentDidMount()
  // Runs only on the first render
  //
  useEffect(() => {
    console.log("Mount 2");
  }, []); // Mark [] here.

  // 3. Props or state values:
  // -------------
  // Runs on the first render
  // And any time any dependency value changes
  //
  useEffect(() => {
    console.log("Mount 3");
  }, [values]);

  // 4. Props or state values:
  // -------------
  // Equivalent of componentWillUnmount
  // Return statement inside of the useEffect function body
  //
  useEffect(() => {
    return () => {
      console.log("Mount 4");
    };
  }, []);

  return (
    <div>
      <h3 className="text-2xl py-3">Counter Controls</h3>
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
      <h3 className="text-2xl py-3">Counter Output</h3>
      <div>
        <strong>count 1:</strong> {count}
      </div>
      <div>
        <strong>count 2:</strong> {count2}
      </div>
      <div>
        <strong>count 3:</strong> {count3}
      </div>
      <div>
        <strong>count 4:</strong> {count4}
      </div>
      <h3 className="text-2xl py-3">Inputs</h3>
      <div>
        <input
          className="border"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email"
          ref={inputRef}
        />
      </div>
      <div>
        <input
          className="border"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
        />
      </div>
      <h3 className="text-2xl py-3">Data</h3>
      <blockquote
        ref={divRef}
        className="italic inline-block font-extralight p-5"
      >
        {!data ? "Loading..." : `"${data}"`}
      </blockquote>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <h3 className="text-2xl py-3">Button</h3>
      <button
        className="bg-blue border p-2"
        onClick={() => {
          console.log(inputRef.current);
          if (inputRef && inputRef.current) {
            inputRef?.current?.focus();
            hello.current();
          }
        }}
      >
        Focus using useRef
      </button>
    </div>
  );
};

export default Hooks;
