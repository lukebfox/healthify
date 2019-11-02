import React from "react";
import GoalPanel from "./components/GoalPanel";

import { GOALS_QUERY } from "./queries/goals.js";
import { useQuery } from "@apollo/react-hooks";

export default function GoalsPage() {
  const { data, loading, error } = useQuery(GOALS_QUERY);

  if (loading) return <p>Loadin...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Goals</h1>
      {data.goals.map(goal => (
        <GoalPanel goal={goal} />
      ))}
    </div>
  );
}
