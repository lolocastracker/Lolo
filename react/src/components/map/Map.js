import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.css'
import Markers from './Markers'

const Map = ({ reports }) => {
  return (
    <div>
      <MapContainer
        id='mapContainer'
        center={[9.0, 39.7]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Markers reports={reports} />
      </MapContainer>
    </div>
  )
}

export default Map
