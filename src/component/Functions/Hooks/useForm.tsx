import { useState } from "react";

interface Props {
  [key: string]: string;
}

export const useForm = (initialValues: Props) => {
  const [values, setValues] = useState<any>(initialValues);

  return [
    values,
    (
      e: Event & {
        target: HTMLButtonElement;
      }
    ) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
