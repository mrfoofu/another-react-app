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
  if (
    typeof input === "object" &&
    input !== null &&
    Object.entries(input).length
  ) {
    return true;
  }
  return false;
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

const List = ({ items }: MyGroupType) => {
  return (
    <ul>
      {items instanceof Array &&
        items.map((item) => (
          <ListItem
            key={`item-${item.id}`}
            item={item}
            id={item.id}
            name={item.name}
            children={item.children}
          />
        ))}
    </ul>
  );
};

const ListItem = (props: {
  item: any;
  id: string;
  children: any;
  name: string;
}): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <li key={`item_${props.id}`}>
      {props.children && (
        <button
          className="border"
          onClick={() => {
            setToggle(toggle ? false : true);
          }}
        >
          <div className={toggle ? "rotate-180" : ""}>🔻</div>
        </button>
      )}
      {props.name}
      {props.children && checkData(props.children) && (
        <>
          <div className={toggle ? "visible" : "hidden"}>
            <List items={props.children} />
          </div>
        </>
      )}
    </li>
  );
};

export default Exam;
