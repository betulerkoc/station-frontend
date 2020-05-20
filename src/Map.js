import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as parkData from "./data/skateboard-parks.json";
import Popup from './Popup';
import Button from 'react-bootstrap/Button';

function Map(){

    const [viewport, setViewport] = useState({
      latitude: 41.043869,
      longitude: 29.012890,
      width: "90vw",
      height: "100vh",
      zoom: 12
    });
  
    const [selectedStation, setSelectedStation] = useState(null);
  
    useEffect(() => {
      const listener = e => {
        if(e.key === "Escape") {
          setSelectedStation(null);
        }
      };
      window.addEventListener("keydown", listener);
    }, []);
    
    return (
     <div>
       <ReactMapGL 
          {...viewport} 
          mapboxApiAccessToken ="pk.eyJ1IjoiYmV0dWxlcmsiLCJhIjoiY2thZHMyNHhqMDNzbDJzbXZoYXV6dnV4NSJ9.LJ04oFCfJO13J8McZL3IfQ"
          mapStyle = "mapbox://styles/betulerk/ckadt19e30sac1ilonvflfcrm"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          >
            {parkData.features.map(park => (
            <Marker
              key={park.properties.PARK_ID}
              latitude={park.geometry.coordinates[1]}
              longitude={park.geometry.coordinates[0]}
            >
               <Button variant="light" onClick = {e => {
                e.preventDefault();
                setSelectedStation(park);
              }}>
                <img src="/power.png" alt="Skate Park Icon" />
                </Button>
            </Marker>
          ))}
         
         {selectedStation ? (
            <>
            <Popup name={selectedStation.properties.NAME} address= {selectedStation.properties.ADDRESS}/>
           </> 
         ) : null}
  
       </ReactMapGL>     
     </div>
    );
  }
  
  export default Map;
  