importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

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

const messaging = firebase.messaging()
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  }

  return self.registration.showNotification(notificationTitle,
    notificationOptions)
})
