import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "./Map.css"

const Map = () => {
  return (
    <div>
      <MapContainer
        id="mapContainer"
        center={[-1.286, 36.817]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

//var mymap = L.map('mapid').setView([51.505, -0.09], 13);

export default Map
