import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBAfVcTtMnw81i3lD1EKlhILYeR5S0pw3A",
    authDomain: "chargingstation-e1f2a.firebaseapp.com",
    databaseURL: "https://chargingstation-e1f2a.firebaseio.com",
    projectId: "chargingstation-e1f2a",
    storageBucket: "chargingstation-e1f2a.appspot.com",
    messagingSenderId: "279808325304",
    appId: "1:279808325304:web:b9d09b828c9610d09b264d",
    measurementId: "G-QPC55SRBLJ"
});

export default app;