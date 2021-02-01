
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
//importScripts('https://www.gstatic.com/firebasejs/7.14.0/init.js');
firebase.initializeApp({
  'messagingSenderId': '*****'
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };
 
  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});