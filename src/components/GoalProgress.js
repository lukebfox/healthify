import React from "react";
import { mdiHeart, mdiCheckCircle, mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

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
  maxSuccess = 0
}) {
  return (
    <React.Fragment>
      <Success numSuccess={numSuccess} maxSuccess={maxSuccess} />
      <Failures numFailures={numFailures} allowedFailures={allowedFailures} />
    </React.Fragment>
  );
}
