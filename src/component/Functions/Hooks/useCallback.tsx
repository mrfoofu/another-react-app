import React from "react";
import { useCountRenders } from "./useCountRenders";

export const HelloCallBack = React.memo(({ increment }: any): JSX.Element => {
  useCountRenders();

  return (
    <button className="bg-blue border p-2" onClick={() => increment(5)}>
      Increment
    </button>
  );
});
