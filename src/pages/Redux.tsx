// Components
import store from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";

import { bugAdded, bugResolved } from "../redux/actions/bugActions";
import { increment, decrement } from '../redux/actions/counterActions';

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
console.log(store.getState());

const Redux = () => {
  const {
    counter,
    isLogged
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Redux</h1>
      <div>Counter: {JSON.stringify(counter)}</div>
      <button className="bg-blue border p-2" onClick={() => dispatch(increment(10))}>+</button>
      <button className="bg-blue border p-2" onClick={() => dispatch(decrement())}>-</button>
      <div>{isLogged ? <>Logged in</> : <>You are not logged in</>}</div>
    </>
  );
};

export default Redux;
