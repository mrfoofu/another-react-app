import React, { createContext } from "react"

export interface IProps {
  user: {
    id: number;
    userName: string;
    email: string;
  }[]
}

export type CounterProps = {
  user: string | null | {},
  setUser: React.Dispatch<React.SetStateAction<IProps[] | null>>,
}

const defaultState = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<CounterProps>(defaultState)
