importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
   apiKey: "AIzaSyA5VKKM9a6EBaXLGvLRyjCLS5-KA3c4r4w",
   authDomain: "notificationtest-6d60f.firebaseapp.com",
   databaseURL: "https://notificationtest-6d60f.firebaseio.com",
   projectId: "notificationtest-6d60f",
   storageBucket: "notificationtest-6d60f.appspot.com",
   messagingSenderId: "577427666180",
   appId: "1:577427666180:web:048e25d46ba14509eccc51",
   measurementId: "G-J3BZG6VZLM"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();