import Map from "../components/map/Map.js"
import { Header, Input } from "semantic-ui-react"

const MapPage = () => {
  return (
    <div>
      <div class="ui grid container">
        <div class="sixteen wide column">
          <Header as="h1" textAlign="center">
            DESERT LOCUST MAP
          </Header>
        </div>

        {/* need text-align: center for next div to center the Input */}
        <div class="sixteen wide column">
          <Input
            label={{ icon: "search", color: "orange" }}
            placeholder="Enter a location..."
          />
        </div>
        <div class="sixteen wide column">
          <Map />
        </div>
      </div>
    </div>
  )
}

export default MapPage
