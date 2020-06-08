import React, {useContext, useState} from 'react';
import firebase from "../firebase";
import DatePicker from 'react-datepicker';
import { AuthContext } from '../context';
 
import "react-datepicker/dist/react-datepicker.css";

function Reservation(props) {

    const [startDate, setStartDate] = useState();
    const { currentUser } = useContext(AuthContext);

    const handleChange = date => {
        setStartDate(date);
    };


    console.log(currentUser.email);
    console.log(currentUser.uid);
    console.log(props.stationID);

    const addReservation = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("Reservation").add({
          startDate: startDate,
          userID: currentUser.uid,
          stationID: props.stationID,
          chargingStatus: true
        }); 
        console.log(startDate)
      };

    return (
        <form onSubmit={ addReservation }>
            <div>
            <DatePicker
              selected={ startDate }
              onChange={ handleChange }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
          />
            <button>Save</button>
            </div>
      </form>
        );
      }
export default Reservation;