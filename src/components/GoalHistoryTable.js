import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";

export default function GoalHistoryTable({
  headings = [],
  rows = [],
  cmp,
  cmpItem
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {Object.values(headings).map(heading => (
            <TableCell>{heading}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row[headings[0]]}>
            {Object.keys(headings).map((heading, i) => (
              <TableCell
                style={{ color: cmp(row[cmpItem]) ? "#1b5e20" : "#d50000" }}
              >
                {i === 0
                  ? moment(row[heading]).format("MMMM Do YYYY")
                  : row[heading]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
