import { Table } from 'semantic-ui-react'

let numRows = 14

const ReportTable = ({ reports }) => {
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
          {reports.slice(0, numRows).map((report) => {
            return (
              <Table.Row>
                <Table.Cell>{report.date}</Table.Cell>
                <Table.Cell>{report.time}</Table.Cell>
                <Table.Cell>{report.location}</Table.Cell>
                <Table.Cell>{report.type}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </>
  )
}

export default ReportTable
