import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.css'
import Markers from './Markers'

const Map = ({ reports, onMarkerClick }) => {
  return (
    <div>
      <MapContainer id='mapContainer' center={[9.0, 39.7]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Markers reports={reports} onMarkerClick={onMarkerClick} />
      </MapContainer>
    </div>
  )
}

export default Map
