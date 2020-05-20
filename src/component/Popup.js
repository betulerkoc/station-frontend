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
                <h2>{props.address}</h2>
            </Tab>
            <Tab eventKey="reservation" title="Reservation">
                <h2>Make Reservation</h2>
                <StationComp/>
            </Tab>
            <Tab eventKey="charging" title="Charging">
                <p>Charging</p>
            </Tab>
        </Tabs>
        </Modal.Dialog>
  );
}

export default Popup;
