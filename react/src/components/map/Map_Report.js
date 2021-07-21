import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './Map.css'
// import Markers from './Markers'
// import MapProperties from './MapProperties'
const position = [51.505, -0.09]

const MapReport=()=>{
// this map should display an empty map when first opened
    console.log("MapReport called");
    return (
        <div>
            <MapContainer
                className='reportmapContainer'
                center={position}
                zoom={10}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker position={position}/>
            </MapContainer>
        </div>
    )
}

export default MapReport



