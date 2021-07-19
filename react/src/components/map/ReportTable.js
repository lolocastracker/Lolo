import { Table } from 'semantic-ui-react'

const ReportTable = ({ reports, curReport, onRowClick }) => {
  const numRows = 14
  return (
    <>
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
          {reports.slice(0, numRows).map((report) => (
            <Table.Row
              key={report.id}
              active={report.id === curReport.id}
              onClick={() => onRowClick(report)} // update state (curReport) in MapPage
            >
              <Table.Cell>{report.date}</Table.Cell>
              <Table.Cell>{report.time}</Table.Cell>
              <Table.Cell>{report.location}</Table.Cell>
              <Table.Cell>{report.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default ReportTable
