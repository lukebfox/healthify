import React from "react";
import GoalProgress from "./GoalProgress";
import GoalHistoryTable from "./GoalHistoryTable";

import Grid from "@material-ui/core/Grid";

export default function GoalCard({ goal }) {
  const {
    successful_recurrences,
    decay,
    allowed_fails,
    fail,
    succ,
    amount
  } = goal;

  switch (goal.type) {
    case "drinking":
    case "gambling": {
      const failures = goal.stats.filter(g => g.amount > goal.quantity).length;
      const stakeLeft = amount * (1 - decay / 100) ** failures;
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GoalHistoryTable
              headings={{
                end_date: "End Date",
                amount: goal.type === "drinking" ? "Rounds" : "Bets"
              }}
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
              stakeLeft={stakeLeft}
              initialStake={amount}
            />
          </Grid>
        </Grid>
      );
    }
    case "walking": {
      const failures = goal.stats.filter(g => g.amount < goal.quantity).length;
      const stakeLeft = amount * (1 - decay / 100) ** failures;
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
              stakeLeft={stakeLeft}
              initialStake={amount}
            />
          </Grid>
        </Grid>
      );
    }
  }
}
