import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';
import DynamicImage from './DynamicImage'; // Import your new component

const Report = ({ curReport }) => {
  // Gracefully handle the case where no report has been selected yet
  if (!curReport) {
    return (
      <div id='report-container'>
        <Segment>
          <Header as='h3' textAlign='center'>
            Select a sighting from the list to view its details.
          </Header>
        </Segment>
      </div>
    );
  }

  // Format the date and time for display
  const date = curReport.date.slice(5, 10).concat('-', curReport.date.slice(0, 4));
  const time = curReport.date.slice(11, 16);

  return (
    <div id='report-container'>
      <Segment>
        <Header as='h2'>Latest Sighting Details</Header>
        <div id='image-div'>
          {/* Use the new DynamicImage component */}
          <DynamicImage 
            id='report-image' 
            report={curReport} 
            height='171.99' 
            width='245' 
          />
        </div>
        <Divider />
        <Header as='h3'>
          Date: {date}
        </Header>
        <Header as='h3'>
          Time: {time}
        </Header>
        <Header as='h3'>
          Location: {curReport.address}
        </Header>
        <Header as='h3'>
          Type: {curReport.type || "N/A"}
        </Header>
        <Header as='h3'>
          Comment: {curReport.body || "No comment provided"}
        </Header>
      </Segment>
    </div>
  );
};

export default Report;