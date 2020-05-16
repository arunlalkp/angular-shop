importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBUZBNeeXT9zGR0t0woRRO_Ctj0qCiKDaA",
    authDomain: "angular-shop-project.firebaseapp.com",
    databaseURL: "https://angular-shop-project.firebaseio.com",
    projectId: "angular-shop-project",
    storageBucket: "angular-shop-project.appspot.com",
    messagingSenderId: "689511754031",
    appId: "1:689511754031:web:fa3387ad04868441ee19da",
    measurementId: "G-W5SHMZKKXJ"
  })

  const messaging = firebase.messaging();