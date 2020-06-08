import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Popup from './Popup';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import app from "../firebase";

function Map(){

    const [viewport, setViewport] = useState({
      latitude: 41.043869,
      longitude: 29.012890,
      width: "100vw",
      height: "100vh",
      zoom: 12
    });
  
    const [selectedStation, setSelectedStation] = useState(null);
    const [stationData, setStationData] = React.useState([]);
  
    useEffect(() => {
      const listener = e => {
        if(e.key === "Escape") {
          setSelectedStation(null);
        }
      };
      window.addEventListener("keydown", listener);
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        const db = app.firestore();
        const data = await db.collection("Station").get();
        setStationData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);

    console.log(stationData);
    
    return (
     <div>
       <Header/>
       <ReactMapGL 
          {...viewport} 
          mapboxApiAccessToken ="pk.eyJ1IjoiYmV0dWxlcmsiLCJhIjoiY2thZHMyNHhqMDNzbDJzbXZoYXV6dnV4NSJ9.LJ04oFCfJO13J8McZL3IfQ"
          mapStyle = "mapbox://styles/betulerk/ckadt19e30sac1ilonvflfcrm"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          >
            {stationData.map(station => (
            <Marker
              key={station.stationID}
              latitude={station.coordinates.latitude}
              longitude={station.coordinates.longitude}
            >
               <Button variant="light" onClick = {e => {
                e.preventDefault();
                setSelectedStation(station);
              }}>
                <img src="/power.png" alt="Skate Park Icon" />
                </Button>
            </Marker>
          ))}
         
         {selectedStation ? (
            <>
            <Popup name={selectedStation.name} address={selectedStation.location} capacity={selectedStation.capacity} availability={selectedStation.availability} stationID={selectedStation.stationID}/>
           </> 
         ) : null}
  
       </ReactMapGL>        
     </div>
    );
  }
  
  export default Map;
  