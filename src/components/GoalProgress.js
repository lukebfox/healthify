import React from "react";
import { mdiHeart, mdiCheckCircle, mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Grid from "@material-ui/core/Grid";

function Failures({ numFailures, allowedFailures }) {
  return new Array(allowedFailures - numFailures)
    .fill()
    .map(() => <Icon color="red" size={1} path={mdiHeart} />);
}

function Success({ numSuccess, maxSuccess }) {
  return new Array(maxSuccess)
    .fill()
    .map((_, i) => (
      <Icon
        color={i < numSuccess ? "green" : "grey"}
        size={1}
        path={i < numSuccess ? mdiCheckCircle : mdiCheckCircleOutline}
      />
    ));
}

export default function GoalProgress({
  numFailures = 0,
  allowedFailures = 0,
  numSuccess = 0,
  maxSuccess = 0,
  stakeLeft = 0,
  initialStake = 0
}) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6} style={{ alignSelf: "center" }}>
          <Success numSuccess={numSuccess} maxSuccess={maxSuccess} />
          <Failures
            numFailures={numFailures}
            allowedFailures={allowedFailures}
          />
        </Grid>
        <Grid style={{ textAlign: "right" }} item xs={6}>
          <p>
            Stake Left: £{stakeLeft.toFixed(2)} / £{initialStake.toFixed(2)}
          </p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
