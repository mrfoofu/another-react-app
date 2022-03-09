import { useContext } from "react";

// Components
import Exam from "../component/Functions/Exam";
import GraphqlMe from "../component/Functions/Graphql";
import Hooks from "../component/Functions/Hooks/Hooks";
import { UserContext } from "../component/Functions/Hooks/UserContext";

const Code = () =>{
  const data = useContext(UserContext)

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Main</h1>
      <div>{JSON.stringify(data, null, 1)}</div>
      {/* Component */}
      <h2 className="text-4xl py-3">Code exam (Object Listing using useEffect, Promise and Try/Catch)</h2>
      <Exam />
      <h2 className="text-4xl py-3">useEffect</h2>
      <Hooks />
      <h2 className="text-4xl py-3">GraphQl</h2>
      <GraphqlMe />
    </>
  );
}

export default Code;
