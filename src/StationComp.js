import React, { useState, useEffect } from 'react';
import web3 from './web3';
import station from './station';

function StationComp() {
  
/* window.ethereum.enable()
      .then(web3.eth.getAccounts()
        .then(console.log));  */

    
  const [stationOwner, setStationOwner] = useState('');
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('1');

  useEffect(async () => {
    const result = await station.methods.stationOwner().call();
    setStationOwner(result);
  }, []);


  async function onSubmit(event) {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    setMessage({message: 'Waiting on transaction success...'});

    await station.methods.startCharging().send({
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether')
    });

    setMessage({message: 'You have been entered'});
  };

  return (
    <div>
     <h2>Station</h2>
      <p>
        This station is managed by {stationOwner}
      </p>
      <form onSubmit= {onSubmit}>
        <div>
          <label>Price: 1 eth</label>
        </div>
        <button>Start Charging</button>
      </form>
    </div>
  );
  
}

export default StationComp;
