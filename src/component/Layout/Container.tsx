import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:container px-6 xs:px-8 lg:mx-auto">{children}</div>
);

export default Container;
