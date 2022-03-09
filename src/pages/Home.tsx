import { useContext } from "react";

// Components
import { UserContext } from "../component/Functions/Hooks/UserContext";
import { login } from "../utils/login";

const Home = () => {
  const { user, setUser } = useContext<any>(UserContext);

  return (
    <>
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Main</h1>
      <div>{JSON.stringify(user, null, 1)}</div>
      {user ? (
        <button
          className="bg-blue border p-2"
          onClick={async () => {
            // Call logout here
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue border p-2"
          onClick={async () => {
            // Call login here
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Home;
