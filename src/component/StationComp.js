import React, { useState, useEffect } from 'react';
import web3 from '../ethereum/web3';
import station from '../ethereum/station';
import Spinner from 'react-bootstrap/Spinner';

class StationComp extends React.Component {
  state = {
    stationOwner: '',
    value: "1",
    message: ''
  };
  
  async componentDidMount() {
    const stationOwner = await station.methods.stationOwner().call();  
    this.setState({stationOwner});
  }

  onSubmit = async (event) =>{
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Please wait for the transaction...'});
 

    await station.methods.startCharging().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({message: 'Thanks for payment!'});
  };

  render() {
  return (
    <div>
      <form onSubmit= {this.onSubmit}>
        <div>
          <label>Price: {this.state.value} ether</label>
        {this.state.message == 'Please wait for the transaction...' ?   <p>{this.state.message}  <Spinner animation="border" variant="danger" /> </p> : ''}
        </div>
        <button>Start Charging</button>

      </form>
    </div>
  );
}
}

export default StationComp;
