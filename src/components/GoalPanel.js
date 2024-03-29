import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import GoalCard from "./GoalCard";

import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function GoalPanel({ goal }) {
  let title = "";
  let timeString = "day";

  if (goal.recurrence === 7) {
    timeString = "week";
  } else if (goal.recurrence === 30) {
    timeString = "month";
  }

  switch (goal.type) {
    case "drinking": {
      title = `Buy a maximum of ${goal.quantity} rounds of alcohol per ${timeString}`;
      break;
    }
    case "gambling": {
      title = `Place a maximum of ${goal.quantity} bets per ${timeString}`;
      break;
    }
    case "walking": {
      title = `Walk more than ${goal.quantity} steps per ${timeString}`;
      break;
    }
  }

  return (
    <ExpansionPanel style={{ marginBottom: 15 }}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <GoalCard key={goal.id} goal={goal} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
