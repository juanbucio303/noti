importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

// Initialize Firebase
  var config = {
   apiKey: "AIzaSyA5VKKM9a6EBaXLGvLRyjCLS5-KA3c4r4w",
   authDomain: "notificationtest-6d60f.firebaseapp.com",
   databaseURL: "https://notificationtest-6d60f.firebaseio.com",
   projectId: "notificationtest-6d60f",
   storageBucket: "notificationtest-6d60f.appspot.com",
   messagingSenderId: "577427666180",
   appId: "1:577427666180:web:e0a7a52517085658eccc51",
   measurementId: "G-8E25M7K4V5"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
