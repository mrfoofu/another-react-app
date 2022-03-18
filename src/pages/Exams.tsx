// Components
import Exam from "../component/Functions/Exam";

const Exams = () => {
  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Exams</h1>
      <h2 className="text-4xl py-3">
        Code exam (Object Listing using useEffect, Promise and Try/Catch)
      </h2>
      <Exam />
    </>
  );
};

export default Exams;
