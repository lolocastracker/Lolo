import { Marker } from 'react-leaflet'

const Markers = ({ reports, onMarkerClick }) => {
  // const getReportData = (report) => console.log('marker clicked', report.id)

  return (
    <>
      {reports.map((report) => (
        <Marker
          key={report.id}
          position={report.gps}
          eventHandlers={{
            // click: (e) => getReportData(report),
            click: (e) => onMarkerClick(report.id),
          }}
        ></Marker>
      ))}
    </>
  )
}

export default Markers
