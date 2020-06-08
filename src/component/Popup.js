import React, { useState, useEffect, useContext } from 'react';
import StationComp from './StationComp';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Reservation from './Reservation';
import { AuthContext } from '../context';
import app from "../firebase";

function Popup(props){

    const [reservation, setReservationData] = React.useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
          const db = app.firestore();
          const data = await db.collection("Reservation").get();
          setReservationData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          console.log(data);
        };
        fetchData();
      }, []);

      console.log(currentUser);
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
                <Reservation stationID={props.stationID}/>
            </Tab>
            <Tab eventKey="charging" title="Charging">
                <h2>Your Reservation</h2>
                  {reservation.filter(item => item.stationID === props.stationID &&  item.userID === currentUser.uid).map(filteredItems => (
                    <li>
                  {  filteredItems.startDate.toDate().toString()}
                    </li>
                ))}
                <StationComp/>
            </Tab>
        </Tabs>
        </Modal.Dialog>
  );
}

export default Popup;
