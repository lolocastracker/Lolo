import { MapContainer, TileLayer, Marker, Popup,useMap  } from 'react-leaflet'
import './Map.css'
import { useState,useEffect } from 'react'

// import Markers from './Markers'
// import MapProperties from './MapProperties'
// const disableSingleClick=False;
function LocationMarker({markerChange,position,setPosition}) {
    // const [mapPosition, setMapPosition] = useState(null)
    console.log("current position:"+position);


    useEffect(() => {
      if(position!==null){
        markerChange(position);
        map.panTo(position)
      }     
    }, [position]);

    //user can click on the map and make a marker
    const map = useMapEvents({
      click(e){
        // click to set the marker
        setPosition(e.latlng);
        // trigger an event 
      },
    })
    
    // return null;
    return position === null  ? null :
    (
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



  function MapMover({position}) {

   useEffect(() => {
      if(position!==null){
        map.panTo(position)
      }     
    }, [position]);

    //user can click on the map and make a marker
    const map = useMap()
    // return null;
    return position === null  ? null :
    (
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
 const defaultPosition=[3.5149, 38.2212]


const MapReport= ({onPositionChange,position,setPosition})=>{
// this map should display an empty map when first opened
  
    return (
        <div>
            <MapContainer
                className='reportmapContainer'
                center={defaultPosition}
                zoom={5}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <LocationMarker markerChange={onPositionChange} position={position} setPosition={setPosition}/>
                <MapMover position={position}/>
            </MapContainer>
            {/* <Marker position={reportPosition}/> */}
        </div>
    )
}

export default MapReport


