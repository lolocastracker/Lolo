import { Marker } from 'react-leaflet'

const Markers = ({ reports, onMarkerClick }) => {
  // Now using state instead of sending event data up through parents
  // const getReportData = (report) => console.log('marker clicked', report.id)

  return (
    <>
      {reports.map((report) => (
        <Marker
          key={report.id}
          position={[report.lat, report.long]}
          eventHandlers={{
            // click: (e) => getReportData(report),
            click: (e) => onMarkerClick(report),
          }}
        ></Marker>
      ))}
    </>
  )
}

export default Markers
