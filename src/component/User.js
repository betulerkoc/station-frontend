import React from 'react';
import firebase from "../firebase";

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            fullname: "",
            walletAddress: ""
        };
    }

    updateInput = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("User").add({
          fullname: this.state.fullname,
          email: this.state.email,
          walletAddress: this.state.walletAddress
        }); 
        this.setState({
          fullname: "",
          email: "",
          walletAddress: "",
        });
      };

  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <input
            type="walletAddress"
            name="walletAddress"
            placeholder="Wallet Address"
            onChange={this.updateInput}
            value={this.state.walletAddress}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;