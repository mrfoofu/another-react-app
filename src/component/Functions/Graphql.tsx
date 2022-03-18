import { gql, useQuery, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

interface IProps {
  id?: number,
  breed: string
}

// Whenever Apollo Client fetches query results from your server,
// it automatically caches those results locally.
// This makes later executions of that same query extremely fast.
const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }: any): React.ReactElement => {
  // The useQuery React hook is the primary API for executing queries in an Apollo application. 
  // After your ApolloProvider is hooked up, you can start requesting data with useQuery.
  // useQuery is a React hook that shares GraphQL data with your UI.
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! {error.message}</p>;

  return (
    <select className="bg-blue border p-2" name="dog" onChange={onDogSelected}>
      {data.dogs.map((dog: IProps) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

const DogPhoto = ({ breed }: IProps) => {
  const [getDogPhoto, { loading, error, data, refetch, networkStatus }] = useLazyQuery(GET_DOG_PHOTO, {
    variables: { breed },

    // Specifies the interval (in milliseconds) at which the query polls for updated results.
    pollInterval: 10000,

    // Used for first execution
    fetchPolicy: "network-only",   

    // Used for subsequent executions
    nextFetchPolicy: "cache-first", 

    // If true, the in-progress query's associated component re-renders whenever the network status changes or a network error occurs.
    notifyOnNetworkStatusChange: true
  });

  return (
    <div>
      {data && <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} alt="dog" />}
      <button className="bg-blue border p-2" onClick={() => refetch()}>Refetch!</button>
      <button className="bg-blue border p-2" onClick={() => getDogPhoto({ variables: { breed: 'bulldog' } })}>Get Dog</button>

      {networkStatus === 4 && <p>Refetching!</p>}
      {loading && <p>Loading!</p>}
      {error && <p>Error! {error}</p>}
    </div>
  );
};

const GraphqlMe = () => {
  const [selectedDog, setSelectedDog] = useState("");
  const onDogSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedDog(selectedValue);
  }

  return (
    <div>      
      <Dogs onDogSelected={onDogSelected} />
      <DogPhoto breed={selectedDog} />
    </div>
  )
}

export default GraphqlMe;
