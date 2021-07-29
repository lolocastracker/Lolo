import { MapContainer, TileLayer, Marker, Popup,useMapEvents,useMap  } from 'react-leaflet'
import './Map.css'
import { useState,useEffect } from 'react'

// import Markers from './Markers'
// import MapProperties from './MapProperties'
// const disableSingleClick=False;
function LocationMarker({markerChange}) {
    const [position, setPosition] = useState(null)

    // this is to ask for users to use their location
    // since .locate() is not an Event, can't use useMapEvents
    
    const mapLocate = useMap();
    useEffect(() => {
      mapLocate.locate().on("locationfound", function (e) {
        mapLocate.flyTo(e.latlng, mapLocate.getZoom());
      });
    }, [mapLocate]);

    //user can click on the map and make a marker
    const map = useMapEvents({
      click(e){
        // click to set the marker
        setPosition(e.latlng);
        markerChange(e.latlng);
        // trigger an event 
      },
    })
    
    console.log("current position:"+position);
    // return null;
    return position === null ? null : (
      <Marker position={position}
            //   eventHandlers={{
            //     click: () => {
            //     console.log('marker clicked');
            //     },
            // }}
      >
        <Popup>
          Current Coordinates: <br/>
          lat = {position.lat}<br/>long= {position.lng}
        </Popup>
      </Marker>        
    )
  }
const MapReport= ({onPositionChange})=>{
// this map should display an empty map when first opened
    console.log("MapReport called");
    
    const defaultposition = [3.5149, 38.2212]
    return (
        <div>
            <MapContainer
                className='reportmapContainer'
                center={defaultposition}
                zoom={5}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <LocationMarker markerChange={onPositionChange}/>
            </MapContainer>
            {/* <Marker position={reportPosition}/> */}
        </div>
    )
}

export default MapReport



