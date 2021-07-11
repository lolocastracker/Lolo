import Map from "../components/map/Map.js"
import { Header, Container, Input, Segment } from "semantic-ui-react"

const MapPage = () => {
  return (
    <div>
      <Container style={{ marginTop: "7em" }}>
        <Segment.Group basic>
          <Segment >
            <Header as="h1" textAlign="center">
              DESERT LOCUST MAP
            </Header>
          </Segment>
          <Segment textAlign="center" basic>
            <Input
              label={{ icon: "search", color: "orange" }}
              placeholder="Enter a location..."
            />
          </Segment>
          <Segment basic>
            <Map />
          </Segment>
        </Segment.Group>
      </Container>
    </div>
  )
}

export default MapPage
