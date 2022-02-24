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
      {results ? <ShowResults items={results} /> : <ShowError />} 
    </div>
  );
};

const ShowError = () => {
  return <div>Error</div>;
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
