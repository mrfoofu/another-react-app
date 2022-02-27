import { useEffect, useState } from "react";

/**
 * Object Sample Shape
 */

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

/**
 * Fetch Object Data
 */

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}

/**
 * 
 * Check Data is Present
 * @param  {Object} input The data that is returned from the promise
 * 
 */

function checkData(input: ParentProps): unknown {
  // Checking for
  // 1. It's an object
  // 2. It's not null
  // 3. It's not an empty array
  if (typeof input === "object" && input !== null && Object.entries(input).length) {
    return true;
  }
  throw "Nothing came back";
}

// -------------
// TypeChecking
// -------------

interface MyGroupType {
  // -------------
  // Index Signatures
  // -------------

  // Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
  // In those cases you can use an index signature to describe the types of possible values, for example:
  [key: string]: ParentProps;
}

interface ParentProps {
  id: string | number;
  name: string;

  // -------------
  // Generic array type
  // -------------
  // could also use ParentProps[]
  children?: Array<ParentProps>;
}

const Exam = (): JSX.Element => {
  const [results, setResults] = useState<ParentProps>({} as ParentProps);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);

    // -------------
    // async and await
    // -------------

    // async and await are keywords which make synchronous-looking code asynchronous.
    // We use async when defining a function to signify that it returns a Promise. 

    try {
      const response: any = await fetchData();
      
      if (checkData(response)) {
        setLoading(false);
        setResults(response);
      }
    } catch (err: any) {
      setLoading(false);
      setError(true);
    }

    // -------------
    // then, catch And finally
    // -------------

    // then and catch and finally are methods of the Promise object, and they are chained one after the other.
    // Each takes a callback function as its argument and returns a Promise.

    // fetchData()
    //   .then((value: any) => {
    //     setLoading(false);
    //     setResults(value);
    //   })
    //   .catch((err: unknown) => {
    //     setError(true);
    //     setLoading(false);
    //   });
  };

  return (
    <div className="prose">
      {loading ? <Loader /> : <List items={results} />}
      {error && <Error />}
    </div>
  );
};

const Error = (): JSX.Element => {
  return <div>Error...</div>;
};

const Loader = (): JSX.Element => {
  return <div>Loading...</div>;
};

const List = ({ items }: MyGroupType): JSX.Element => {
  return (
    <ul>
      {items instanceof Array &&
        items.map((item: MyGroupType, index: number) => (
          <li key={`item_${index}`}>
            {item.children && "🔻"}
            {item.name}
            {item.children && checkData(item.children) && (
              <List items={item.children} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default Exam;
