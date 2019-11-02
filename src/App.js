import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const USERS = gql`
  {
    users {
      username
      email
      first_name
      last_name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Users</h1>
      {data.users.map(({ username, email, first_name, last_name }) => (
        <div key={username}>
          <p>
            {`${username} | ${email} | ${first_name &&
              last_name &&
              `${first_name} ${last_name}`}`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
