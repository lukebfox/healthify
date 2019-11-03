import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withRouter } from "react-router";

const Form = props => {
  const [date, setDate] = React.useState(new Date("2019-11-03T21:11:54"));
  const [category, setCategory] = React.useState(null);

  const handleDateChange = date => {
    setDate(date);
  };
  const handleSelectChange = event => {
    setCategory(event.target.value);
  };

  function valuetext(value) {
    return `${value}%`;
  }

  const QuantityInput = ({ category }) => {
    switch (category) {
      case "drinking":
        return (
          <React.Fragment>
            <p>
              Sometimes we can all have a bit too much to drink, and theres no
              worse feeling than checking your balance during a killer hangover.
              Select this goal to cut down on the amount of drinks you buy and
              improve your health and finances at the same time! You can set the
              number of purchases you want to limit yourself to each period.
            </p>
            <TextField
              id="quantity"
              name="quantity"
              label="Number of rounds bought"
              fullWidth
              type=""
            />
          </React.Fragment>
        );
      case "gambling":
        return (
          <React.Fragment>
            <p>
              If you want to reduce the amount you gamble, or even stop
              altogether, then this goal is for you. You can set the number of
              bets you want to limit yourself to each period here.
            </p>
            <TextField
              id="quantity"
              name="quantity"
              label="Number of bets placed"
              fullWidth
              type="number"
            />
          </React.Fragment>
        );
      case "walking":
        return (
          <React.Fragment>
            <p>
              When it comes to fitness, everyone has the potential for
              improvement if they want to. Here you can set the amount of steps
              you want to walk each period here
            </p>
            <TextField
              id="quantity"
              name="quantity"
              label="Number of steps walked"
              fullWidth
              type="number"
            />
          </React.Fragment>
        );
      default:
        return <React.Fragment />;
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("hi");
        props.history.push("/goals");
      }}
    >
      <p>
        So you want to form a habit? By selecting the general category below,
        we'll use tailored metrics to accurately gauge your progress
      </p>
      <FormControl style={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Habit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleSelectChange}
        >
          <MenuItem value={"drinking"}>Drinking</MenuItem>
          <MenuItem value={"gambling"}>Gambling</MenuItem>
          <MenuItem value={"walking"}>Walking</MenuItem>
        </Select>
      </FormControl>
      <QuantityInput category={category} />
      <p>
        We break your habits down into manageable periods, which you can control
        the length of here.{" "}
      </p>
      <TextField
        id="recurrences"
        name="recurrences"
        label="Days per each habit period"
        fullWidth
        type="number"
      />
      <p>
        Your winning streak corresponds to how many habit periods you think you
        need to complete in a row to have successfully complete your goal.
      </p>
      <TextField
        id="successful_recurrences"
        name="successful_recurreces"
        label="Winning streak"
        fullWidth
        type="number"
      />
      <p>
        Hitting your goals time after time can be quite a challenge. With Lives,
        you can choose how many cheat periods you get where you can miss your
        goal and not interrupt your winning streak. If you lose all your lives,
        your streak restarts!
      </p>
      <TextField
        id="allowed_fails"
        name="allowed_fails"
        label="Lives"
        fullWidth
        type="number"
      />
      <p>
        So you think you're good huh? Put your money where your mouth is, with
        Stake. Here you can choose a fixed sum, and which is locked away on the
        Start Date. When you hit your winning streak, you get the money back!
      </p>
      <TextField
        id="amount"
        name="amount"
        label="Stake"
        fullWidth
        type="number"
      />
      <p>
        There's a catch though, and that's Decay. Every time you fail to meet
        one of your goals, the amount locked away in it decreases by a certain
        percentage of what's currently in the pot, and this percentage is Decay.
      </p>
      <TextField
        id="decay"
        name="decay"
        label="Rate of decay"
        fullWidth
        type="number"
      />
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     <p>Choose the start date for your habit! This is the day your Stake gets locked away, and when the habit initiates.</p>
     <div className={"datepicker"}>
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
          margin="normal"
          id="start-date"
          label="Start date"
          format="dd/MM/yyyy"
          value={date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
      </div>
      <Button className={"submit"} type="submit" fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default withRouter(Form);
