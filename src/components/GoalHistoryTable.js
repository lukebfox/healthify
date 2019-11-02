import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function GoalHistoryTable({ headings, rows, cmp, cmpItem }) {
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
          <TableRow
            style={{
              backgroundColor: cmp(row[cmpItem]) ? "#a5d6a7" : "#ef9a9a"
            }}
            key={row[headings[0]]}
          >
            {Object.keys(headings).map(heading => (
              <TableCell>{row[heading]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
