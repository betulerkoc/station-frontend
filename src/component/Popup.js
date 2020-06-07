import React from 'react';
import StationComp from './StationComp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Popup(props){
   
  return (
        <Modal.Dialog>
        <Tabs>
            <Tab eventKey="station" title="Station">
                <h2>{props.name}</h2>
                <p>Address: {props.address}</p>
                <p>Capacity: {props.capacity}</p>
                <p>Availability: {props.availability ?  <img src="/yess.png"/> :  <img src="/no.png"/>}</p>
            </Tab>
            <Tab eventKey="reservation" title="Reservation">
                <h2>Make Reservation</h2>
               
            </Tab>
            <Tab eventKey="charging" title="Charging">
                <h2>Charging</h2>
                <StationComp/>
            </Tab>
        </Tabs>
        </Modal.Dialog>
  );
}

export default Popup;
