import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import { HelloCallBack } from "./useCallback";

// -------------
// Types
// -------------
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

  // For useLayoutEffect example
  const inputRef = useRef<HTMLInputElement>(null);

  // For callback example
  const [foo, setFoo] = useState(0);

  // For reducer example
  const [text, setText] = useState<string>("");

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
      // console.log(e);
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
    console.log("Mount - On each re-render");
  });

  // 2. An empty array:
  // -------------
  // Equivalent of componentDidMount()
  // Runs only on the first render
  //

  useEffect(() => {
    console.log("Mount 2 - Runs once on first render");
  }, []); // Mark [] here.

  // 3. Props or state values:
  // -------------
  // Runs on the first render
  // And any time any dependency value changes
  //

  useEffect(() => {
    console.log("Mount 3 - Runs when depedancy of values changes");
  }, [values]);

  // 4. Props or state values:
  // -------------
  // Equivalent of componentWillUnmount
  // Return statement inside of the useEffect function body
  //

  useEffect(() => {
    return () => {
      console.log("UnMount 4 - When it unmounts");
    };
  }, []);

  // -------------
  // useCallback
  // -------------
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

  const increment = useCallback(
    (n: number) => {
      setFoo((c) => c + n);
    },
    [setFoo]
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }

    console.log("Computing Longest Word");

    let longestWord = "";

    arr.split(" ").forEach((word: string) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })

    return longestWord;
    // If you are not passing any depedencies if might mean
    // you don't need useCallback and you can just move this outside
    
  }, []);

  const longestWord = useMemo(
    () => computeLongestWord(data),
    [computeLongestWord, data]
  );

  // -------------
  // useReducer
  // -------------
  // Returns a stateful value, and a function to update it.

  interface reducerAction {
    type: "increment" | "decrement";
    count: 1;
  }

  interface countProps {
    result: number;
  }

  const initialState1 = {
    result: 1,
  };

  const countValue: number = 1;

  const counterReducer = (state: countProps, action: reducerAction) => {
    const { type, count } = action;
    const { result } = state;

    switch (type) {
      case "increment":
        return { result: result + count };
      case "decrement":
        return { result: result - count };

      // If the action is unknown
      // we return the current state:
      default:
        return 0;
    }
  };

  // -------------
  // useReducer
  // -------------
  // Returns a stateful value, and a function to update it.

  interface Todo {
    todos: Todos[];
    todoCount: number;
  }

  interface Todos {
    text: string;
    completed: boolean;
  }

  type Actions = {
    type: "add-todo" | "toggle-todo";
    idx: number;
    text: string;
  };

  const initialState2 = {
    todos: [],
    todoCount: 0
  };

  const todoReducer = (state: Todo, action: Actions) => {
    const { type, text } = action;

    switch (type) {
      case "add-todo":
        return {
          todos: [
            ...state.todos,
            {
              text: text,
              completed: false,
            },
          ],
          todoCount: state.todoCount + 1
        };
      case "toggle-todo":
        return {
          todos: state.todos.map((t: Todos, idx: number) =>
            idx === action.idx ? { ...t, completed: !t.completed } : t
          ),
          todoCount: state.todoCount
        };
      default:
        return state;
    }
  };

  // useReducer takes 2 parameters:
  // - the state reducer,
  // - and an initial state.

  // To update the state,
  // we call the dispatch function
  // and pass as an argument an according action:
  const [state, dispatch]: any = useReducer<any>(counterReducer, initialState1);
  const [{ todos, todoCount }, todoDispatch]: any = useReducer<any>(
    todoReducer,
    initialState2
  );

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
        {!data ? loading : `"${data}"`}
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

      <h3 className="text-2xl py-3">React.memo</h3>
      <HelloCallBack increment={increment} />
      <div>count: {foo}</div>
      <div>longest word: {longestWord}</div>

      <h3 className="text-2xl py-3">Reducer Basic</h3>
      <div>Count: {state.result}</div>
      <button
        className="bg-blue border p-2"
        onClick={() => dispatch({ type: "increment", count: countValue })}
      >
        +
      </button>
      <button
        className="bg-blue border p-2"
        onClick={() => dispatch({ type: "decrement", count: countValue })}
      >
        -
      </button>
      
      <h3 className="text-2xl py-3">Reducer Form Todo</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          todoDispatch({ type: "add-todo", text: text });
          // Just so we can clear the input field
          setText("");
        }}
      >
        <input
          type="text"
          className="border"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
      </form>
      <div>Number of todos: {todoCount}</div>
      {todos.map((t: Todos, idx: number) => (
        <div
          key={idx}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
          onClick={() => {
            todoDispatch({ type: "toggle-todo", idx });
          }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default Hooks;
