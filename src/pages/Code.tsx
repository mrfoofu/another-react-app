// Components
import Exam from "../component/Functions/Exam";
import Hooks from "../component/Functions/Hooks/Hooks";

const Code = () =>{

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Main</h1>
      {/* Component */}
      <code className="font-bold">Code exam (Object Listing using useEffect, Promise and Try/Catch)</code>
      <Exam />
      <code className="font-bold">useEffect</code>
      <Hooks />
    </>
  );
}

export default Code;
