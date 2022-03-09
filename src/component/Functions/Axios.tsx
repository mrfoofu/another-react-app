import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem } from "../Modules/List";

const API_URL = process.env.REACT_APP_API_URL || "";

interface PropItems {
  id: number;
  quote: string,
  author: string;
}

const AxiosExample = () => {
  const [results, setResults] = useState<PropItems>();
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get<PropItems>(API_URL);
      setResults(response.data);
      setError(null);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div>
      {results ? <ShowResults items={results} /> : <ShowError error={error}/>} 
    </div>
  );
};

const ShowError = (error: { error: string | null; }) => {
  return <div>{JSON.stringify(error)}</div>;
};

const ShowResults = ({ items }: any): JSX.Element => {
  return (
    <List>
      {items?.quotes && items.quotes.map((item: PropItems, index: number) => (
        <ListItem
          key={`product_item_${index}`}
          heading={item.quote}
          summary={item.author}
        />
      ))}
    </List>
  );
};

export default AxiosExample;

// -----
// Using then/catch
// https://javascript.info/async-await
// -----

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

// -----
// Using <async />
// https://javascript.info/async-await
// -----

// async function loadJson(url) { // (1)
//   let response = await fetch(url); // (2)

//   if (response.status == 200) {
//     let json = await response.json(); // (3)
//     return json;
//   }

//   throw new Error(response.status);
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404 (4)
