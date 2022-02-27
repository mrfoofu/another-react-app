import { useState, useEffect } from "react";

function someExpensiveInitialState () {
  // If the initial state is intensive e.g. loops, API calls
  // Then you may want to store your value in state

  return 1;
}

const Hooks = () => {
  useState(() => someExpensiveInitialState());

  return <div>foo</div>;
};

export default Hooks;