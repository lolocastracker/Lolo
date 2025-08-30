import { Table } from 'semantic-ui-react'
import './Map.css'
import { useState, useEffect } from 'react'

const ReportTable = ({ reports, curReport, onRowClick }) => {
  // Use a state variable to store the number of rows to display
  const [numRows, setNumRows] = useState(20);

  // Use a useEffect hook to set the number of rows from an environment variable
  useEffect(() => {
    // Read the environment variable, providing a default of 20 if it's not set
    const envNumReports = process.env.REACT_APP_NUM_REPORTS;
    if (envNumReports) {
      setNumRows(parseInt(envNumReports, 10));
    }
  }, []);

  return (
    <>
      <div id='table-scroll'>
        <Table compact celled selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* Slice the reports array based on the numRows variable */}
            {reports.slice(0, numRows).map((report) => (
              <Table.Row
                key={report.reportId}
                active={report.reportId === curReport.reportId}
                onClick={() => onRowClick(report)} // update state (curReport) in MapPage
              >
                <Table.Cell>
                  {report.date
                    .slice(5, 10)
                    .concat('-', report.date.slice(0, 4))}
                </Table.Cell>
                <Table.Cell>{report.date.slice(11, 16)}</Table.Cell>
                <Table.Cell>{report.address}</Table.Cell>
                <Table.Cell>{report.type}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export default ReportTable
