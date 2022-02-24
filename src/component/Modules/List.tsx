import React from "react";

interface Props {
  /** list title */
  heading: string | null;

  /** optional summary */
  summary?: string | null;
}

const List = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <ol className="list-decimal prose prose-base px-4 my-4">{children}</ol>;
};

const ListItem = ({ heading, summary }: Props): JSX.Element => {
  return (
    <li>
      <div className="not-prose flex flex-col shrink-0 mb-1">
        <h2 className="">{heading}</h2>
        {summary && <p>{summary}</p>}
      </div>
    </li>
  );
};

export { List, ListItem };
