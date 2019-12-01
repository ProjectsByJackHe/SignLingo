import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import { Table, Message } from 'semantic-ui-react';

function Camera({letter}){
  const webcamRef = React.useRef(null);
  let [curValue, setCurValue] = useState("negative");
  let [tabValue, setTabValue] = useState([]);
  let refreshing = true;

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc && refreshing) {  
        refreshing = false
        console.log("sending...")
        axios({
          method: 'POST',
          url: 'https://heimdall.phillytan.xyz/url',
          data: {
            url: imageSrc
          }
        }).then(async res => {
          let a = res.data.sort((a, b) => b.probability - a.probability).map(x => [x.tagName, x.probability])
          console.log(a);
          await setCurValue(`${a[0][0]} or ${a[1][0]} or ${a[2][0]}`);
          await setTabValue(a)
          refreshing = true;
        })
      }
    },
    [refreshing]
  );
  useEffect(() => {
    setInterval(capture, 5000);
  });
  return(
    <div id = "camera">
      <Webcam 
        height={500}
        width={500}
        ref={webcamRef}
        screenshotFormat="image/png"
      />
      {(tabValue.length > 2 && (tabValue[0][0] === letter || tabValue[1][0] === letter || tabValue[2][0] === letter)) ? 
      (
        <Message positive>
          <Message.Header>Correct</Message.Header>
        </Message>
      ) : 
      (
        <Message negative>
          <Message.Header>Wrong</Message.Header>
        </Message>
      )}
      <Table 
        tableData={tabValue}
        renderBodyRow={(x, i) => {
          return (
            <Table.Row positive={(i === 0 || i === 1 || i === 2) && x[0] === letter} warning={i === 0 && !((i === 0 || i === 1 || i === 2) && x[0] === letter)}>
              <Table.Cell>{x[0]}</Table.Cell>
              <Table.Cell>{x[1]}</Table.Cell>
            </Table.Row>
          );
        }}
        headerRow={() => {
          return (
            <Table.Row>
              <Table.HeaderCell>Letter</Table.HeaderCell>
              <Table.HeaderCell>Probability</Table.HeaderCell>
            </Table.Row>
          );
        }}
      />
    </div>
  )
}

export default Camera