import { useContext } from "react";

// Components
import Hooks from "../component/Functions/Hooks/Hooks";
import { UserContext } from "../component/Functions/Hooks/UserContext";

const ReactHooks = () =>{
  const data = useContext(UserContext)

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">React hooks</h1>
      <div>{JSON.stringify(data, null, 1)}</div>
      <h2 className="text-4xl py-3">useEffect</h2>
      <Hooks />
    </>
  );
}

export default ReactHooks;
