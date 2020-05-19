import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Popup(props){

  return (
    <Tabs>
        <TabList>
            <Tab>Station</Tab>
            <Tab>Reservation</Tab>
            <Tab>Charge</Tab>
        </TabList>

        <TabPanel>
            <h2>{props.name}</h2>
            <h2>{props.address}</h2>
        </TabPanel>
        <TabPanel>
            <h2>lalallaa</h2>
            <h2>lalalalla</h2>
        </TabPanel>
  </Tabs>
  );
}

export default Popup;
