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
              key={report.reportId}
              active={report.reportId === curReport.reportId}
              onClick={() => onRowClick(report)} // update state (curReport) in MapPage
            >
              <Table.Cell>{report.date.slice(5,10).concat('-',report.date.slice(0,4))}</Table.Cell>
              <Table.Cell>{report.date.slice(11,16)}</Table.Cell>
              <Table.Cell>{report.address}</Table.Cell>
              <Table.Cell>{report.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default ReportTable
