importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

// Initialize Firebase
  var config = {
     apiKey: "AIzaSyA5VKKM9a6EBaXLGvLRyjCLS5-KA3c4r4w",
     authDomain: "notificationtest-6d60f.firebaseapp.com",
     databaseURL: "https://notificationtest-6d60f.firebaseio.com",
     storageBucket: "notificationtest-6d60f.appspot.com",
     messagingSenderId: "577427666180",
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
