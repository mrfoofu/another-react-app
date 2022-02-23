import React from "react";

interface Props {
  /** list title */
  heading: string | null;

  /** optional summary */
  summary?: string | null;
}

const List = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <ul className="py-2">{children}</ul>;
};

const ListItem = ({ heading, summary }: Props): JSX.Element => {
  return (
    <li>
      <h2>{heading}</h2>
      {summary && <p>{summary}</p>}
    </li>
  );
};

export { List, ListItem };
