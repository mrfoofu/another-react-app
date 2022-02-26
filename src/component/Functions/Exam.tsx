import { useEffect, useState } from "react";

const backendData: Array<ParentProps> = [
  {
    id: "1",
    name: "Office Map",
  },
  {
    id: "2",
    name: "New Employee Onboarding",
    children: [
      {
        id: "8",
        name: "Onboarding Materials",
      },
      {
        id: "9",
        name: "Training",
      },
    ],
  },
  {
    id: "3",
    name: "Office Events",
    children: [
      {
        id: "6",
        name: "2018",
        children: [
          {
            id: "10",
            name: "Summer Picnic",
          },
          {
            id: "11",
            name: "Valentine's Day Party",
          },
          {
            id: "12",
            name: "New Year's Party",
          },
        ],
      },
      {
        id: "7",
        name: "2017",
        children: [
          {
            id: "13",
            name: "Company Anniversary Celebration",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Public Holidays",
  },
  {
    id: "5",
    name: "Vacations and Sick Leaves",
  },
];

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}

interface MyGroupType {
  [key: string]: ParentProps;
}

interface ParentProps {
  id: string | number;
  name: string;
  children?: Array<ParentProps>;
}

const Exam = (): JSX.Element => {
  const [results, setResults] = useState<ParentProps>({} as ParentProps);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetchData()
      .then((value: any) => {
        setResults(value);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="prose">
        <h2>Items</h2>
        {loading ? <Loader /> : <List items={results} />}
      </div>
    </>
  );
};

const Loader = (): JSX.Element => {
  return (
    <div>Loading...</div>
  );
};

const List = ({ items }: MyGroupType): JSX.Element => {
  return (
    <ul>
      {items instanceof Array &&
        items.map((item: MyGroupType, index: number) => (
          <li key={`item_${index}`}>
            {item.children && "🔻"}
            {item.name}
            {item.children && <List items={item.children} />}
          </li>
        ))}
    </ul>
  );
};

export default Exam;
