import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import FormPage from './FormPage.jsx';

function App() {
    return (
       <div className="App">
         <FormPage />
       </div>
    )
}

export default App;
