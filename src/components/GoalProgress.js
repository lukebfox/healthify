import React from "react";
import { mdiSkull, mdiSkullOutline, mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";

function Failures({ numFailures, allowedFailures }) {
  return new Array(allowedFailures)
    .fill()
    .map((_, i) => (
      <Icon size={1} path={i < numFailures ? mdiSkull : mdiSkullOutline} />
    ));
}

function Success({ numSuccess, maxSuccess }) {
  return new Array(maxSuccess)
    .fill()
    .map((_, i) => (
      <Icon
        color="red"
        size={1}
        path={i < numSuccess ? mdiHeart : mdiHeartOutline}
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
