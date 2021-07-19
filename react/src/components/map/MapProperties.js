import { useMap } from 'react-leaflet'

const MapProperties = ({ curReport }) => {

  // Recenter when the MapPage's curReport state changes
  // curReport changes when table rows or markers are clicked
  function ChangeView(center, zoom) {
    const map = useMap()
    map.flyTo(center, zoom)
    return null
  }

  ChangeView([curReport.lat, curReport.long], 10)
  return null
}

export default MapProperties
