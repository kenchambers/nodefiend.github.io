// NOTE: inspired by:
// https://medium.com/@byn9826/100-line-in-react-to-show-when-you-are-coding-in-a-day-by-github-api-91b09dab773c

import React from "react";

import fetchAsync from "../utils/async";
// const GitHubCalendar = require("../../node_modules/github-calendar");

import GitHubCalendar from "github-calendar";

class CommitComponent extends React.Component {
  calendarOptions = {
    responsive: true,
    global_stats: true
  };
  componentDidMount() {
    GitHubCalendar(".calendar", "nodefiend", this.calendarOptions);
  }
  componentWillMount() {
    // trigger async function
    // log response or catch error of fetch promise
    fetchAsync(
      "https://github.com/users/nodefiend/created_commits?from=2018-08-01&to=2018-08-31"
    )
      .then(data => console.log(data))
      .catch(reason => console.log(reason.message));
  }

  render() {
    return <div className="calendar" />;
  }
}

export default CommitComponent;
