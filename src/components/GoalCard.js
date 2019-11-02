import React from "react";
import GoalProgress from "./GoalProgress";
import GoalHistoryTable from "./GoalHistoryTable";

import Grid from "@material-ui/core/Grid";

export default function GoalCard({ goal }) {
  const { successful_recurrences, allowed_fails, fail, succ } = goal;

  switch (goal.type) {
    case "drinking":
    case "gambling": {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GoalHistoryTable
              headings={{ end_date: "End Date", amount: "Amount" }}
              rows={goal.stats}
              cmp={amount => amount <= goal.quantity}
              cmpItem="amount"
            />
          </Grid>
          <Grid item xs={12}>
            <GoalProgress
              maxSuccess={successful_recurrences}
              numSuccess={succ}
              numFailures={fail}
              allowedFailures={allowed_fails}
            />
          </Grid>
        </Grid>
      );
    }
    case "walking": {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GoalHistoryTable
              headings={{ end_date: "End Date", amount: "Steps" }}
              rows={goal.stats}
              cmp={amount => amount >= goal.quantity}
              cmpItem="amount"
            />
          </Grid>
          <Grid item xs={12}>
            <GoalProgress
              maxSuccess={successful_recurrences}
              numSuccess={succ}
              numFailures={fail}
              allowedFailures={allowed_fails}
            />
          </Grid>
        </Grid>
      );
    }
  }
}
