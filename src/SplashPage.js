import React from "react";
import "./splash.css";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function SplashPage() {
  return (
    <div class="bgimg-1">
      <div class="caption">
        <span class="border">
          <Link to="/create_goal">
            <Button style={{ color: "white" }}>
              I want to become healthier and change my habits
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
}
