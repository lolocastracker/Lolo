import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.css'
import Markers from './Markers'
import MapProperties from './MapProperties'

const Map = ({ reports, curReport, onMarkerClick }) => {
  return (
    <div>
      <MapContainer
        id='mapContainer'
        center={[curReport.lat, curReport.long]} // Initial position only (immutable)
        zoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Markers
          reports={reports}
          curReport={curReport}
          onMarkerClick={onMarkerClick}
        />
        <MapProperties curReport={curReport} />
      </MapContainer>
    </div>
  )
}

export default Map
