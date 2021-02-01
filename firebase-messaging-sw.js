importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/init.js');

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
  // [END initialize_firebase_in_sw]
   
  // If you would like to customize notifications that are received in the
  // background (Web app is closed or not in browser focus) then you should
  // implement this optional method.
  // [START background_handler]
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    };
   
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });