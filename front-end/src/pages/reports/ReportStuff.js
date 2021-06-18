import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from "react-to-print";
import Stuff from './StuffList';
import { Button } from '@material-ui/core';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <Stuff/>
      </div>
    );
  }
}

class ReportStuff extends React.Component {
  render() {
    return (
      <div style={{ fontSize: "10" }} >
        <ReactToPrint
          
        trigger={() => <Button style={{ marginBottom : "20px" }} variant="contained" color="secondary"><a>پرینت</a></Button>}
        content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default ReportStuff;
