import { useState, useMemo } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { IProps as IState, CounterProps, UserContext } from "../Functions/Hooks/UserContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IState[] | null>(null);

  const value = useMemo<CounterProps>(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Header />
      <div className="relative">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </UserContext.Provider>
  );
};

export default Layout;
