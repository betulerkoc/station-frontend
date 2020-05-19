import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as parkData from "./data/skateboard-parks.json";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Popup from './Popup';


function Map(){

    const [viewport, setViewport] = useState({
      latitude: 41.043869,
      longitude: 29.012890,
      width: "100vw",
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
              <button onClick = {e => {
                e.preventDefault();
                setSelectedStation(park);
              }}>
                <img src="/power.png" alt="Skate Park Icon" />
              </button>
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
  