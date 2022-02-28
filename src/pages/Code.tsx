// Components
import Exam from "../component/Functions/Exam";
import Hooks from "../component/Functions/Hooks/Hooks";

const Code = () =>{

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Main</h1>
      {/* Component */}
      <h2 className="text-4xl py-3">Code exam (Object Listing using useEffect, Promise and Try/Catch)</h2>
      <Exam />
      <h2 className="text-4xl py-3">useEffect</h2>
      <Hooks />
    </>
  );
}

export default Code;
