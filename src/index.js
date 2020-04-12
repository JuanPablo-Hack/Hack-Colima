import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app'
import 'firebase/messaging'

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

firebase.initializeApp({
  apiKey: "AIzaSyBBnPjZBAL6CkICQiaOHjHHdBIiK9t3O2U",
  authDomain: "andromeda-mango.firebaseapp.com",
  databaseURL: "https://andromeda-mango.firebaseio.com",
  projectId: "andromeda-mango",
  storageBucket: "andromeda-mango.appspot.com",
  messagingSenderId: "12185204269",
  appId: "1:12185204269:web:dba6c56a77301949dc2aa4",
  measurementId: "G-B4NSMPMD8R"
})

let messaging = firebase.messaging()

Notification.requestPermission().then(value => {
  if (value === 'granted') {
    getToken()
  }
})

function getToken() {
  messaging.getToken().then(token => {
    console.log(token)
    // => send to API
    messaging.onTokenRefresh(getToken)
  })
}