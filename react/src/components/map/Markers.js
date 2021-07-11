import { Marker } from 'react-leaflet'

const Markers = ({ reports }) => {
  return (
    <>
      {reports.map((report) => (
        <Marker
          key={report.id}
          position={report.gps}
          eventHandlers={{
            click: (e) => {
              const getReportData = () => (
              console.log('marker clicked', report.id)
              )
              getReportData()
            },
          }}
        ></Marker>
      ))}
    </>
  )
}

export default Markers
